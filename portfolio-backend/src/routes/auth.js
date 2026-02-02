import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import config from '../config/index.js';
import { db } from '../models/database.js';
import { authenticate, requireAdmin } from '../middleware/auth.js';

const router = Router();

// Validation middleware
const loginValidation = [
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
];

// POST /api/auth/login
router.post('/login', loginValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;
    
    // Find user
    const user = db.findUserByEmail(email);
    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Invalid email or password',
      });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        error: 'Invalid email or password',
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      config.jwtSecret,
      { expiresIn: config.jwtExpiresIn }
    );

    res.json({
      success: true,
      data: {
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
});

// GET /api/auth/me - Get current user
router.get('/me', authenticate, (req, res) => {
  const { password, ...userWithoutPassword } = req.user;
  res.json({
    success: true,
    data: userWithoutPassword,
  });
});

// POST /api/auth/logout
router.post('/logout', authenticate, (req, res) => {
  // In a real app with refresh tokens, you'd invalidate the token here
  res.json({
    success: true,
    message: 'Logged out successfully',
  });
});

export default router;
