import jwt from 'jsonwebtoken';
import config from '../config/index.js';
import { db } from '../models/database.js';

// JWT Authentication Middleware
export const authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        error: 'Access denied. No token provided.',
      });
    }
    
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, config.jwtSecret);
    
    const user = db.findUserById(decoded.userId);
    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Invalid token. User not found.',
      });
    }
    
    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        error: 'Token expired. Please login again.',
      });
    }
    return res.status(401).json({
      success: false,
      error: 'Invalid token.',
    });
  }
};

// Admin Authorization Middleware
export const requireAdmin = (req, res, next) => {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({
      success: false,
      error: 'Access denied. Admin privileges required.',
    });
  }
  next();
};

// Rate Limiting for sensitive routes
export const loginRateLimiter = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts
  message: {
    success: false,
    error: 'Too many login attempts. Please try again later.',
  },
};

// Visitor tracking middleware
export const trackVisitor = (req, res, next) => {
  // Skip tracking for API endpoints
  if (req.path.startsWith('/api/')) {
    return next();
  }
  
  const visitorData = {
    ip: req.ip || req.connection?.remoteAddress || 'unknown',
    userAgent: req.headers['user-agent'] || 'unknown',
    referer: req.headers.referer || 'direct',
    pageViews: [req.path],
    timeSpent: 0,
    browser: getBrowserFromUA(req.headers['user-agent']),
    device: getDeviceFromUA(req.headers['user-agent']),
    os: getOSFromUA(req.headers['user-agent']),
  };
  
  db.createVisitor(visitorData);
  next();
};

// Helper functions to parse user agent
function getBrowserFromUA(ua) {
  if (!ua) return 'Unknown';
  if (ua.includes('Chrome')) return 'Chrome';
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Safari')) return 'Safari';
  if (ua.includes('Edge')) return 'Edge';
  if (ua.includes('Opera')) return 'Opera';
  return 'Other';
}

function getDeviceFromUA(ua) {
  if (!ua) return 'Unknown';
  if (ua.includes('Mobile')) return 'Mobile';
  if (ua.includes('Tablet')) return 'Tablet';
  return 'Desktop';
}

function getOSFromUA(ua) {
  if (!ua) return 'Unknown';
  if (ua.includes('Windows')) return 'Windows';
  if (ua.includes('Mac')) return 'MacOS';
  if (ua.includes('Linux')) return 'Linux';
  if (ua.includes('Android')) return 'Android';
  if (ua.includes('iOS') || ua.includes('iPhone') || ua.includes('iPad')) return 'iOS';
  return 'Other';
}
