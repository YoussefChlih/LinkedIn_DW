import { Router } from 'express';
import { db } from '../models/database.js';
import { authenticate, requireAdmin } from '../middleware/auth.js';

const router = Router();

// All admin routes require authentication
router.use(authenticate, requireAdmin);

// GET /api/admin/analytics - Get dashboard analytics
router.get('/analytics', (req, res) => {
  try {
    const analytics = db.getAnalytics();
    res.json({
      success: true,
      data: analytics,
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch analytics',
    });
  }
});

// GET /api/admin/visitors - Get all visitors
router.get('/visitors', (req, res) => {
  try {
    const { page = 1, limit = 20 } = req.query;
    const visitors = db.getAllVisitors();
    
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    const paginatedVisitors = visitors.slice(startIndex, endIndex);
    
    res.json({
      success: true,
      data: {
        visitors: paginatedVisitors,
        total: visitors.length,
        page: parseInt(page),
        totalPages: Math.ceil(visitors.length / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching visitors:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch visitors',
    });
  }
});

// GET /api/admin/messages - Get all contact messages
router.get('/messages', (req, res) => {
  try {
    const { page = 1, limit = 20, unread } = req.query;
    let messages = db.getAllContactMessages();
    
    if (unread === 'true') {
      messages = messages.filter(m => !m.read);
    }
    
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    const paginatedMessages = messages.slice(startIndex, endIndex);
    
    res.json({
      success: true,
      data: {
        messages: paginatedMessages,
        total: messages.length,
        page: parseInt(page),
        totalPages: Math.ceil(messages.length / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch messages',
    });
  }
});

// PUT /api/admin/messages/:id/read - Mark message as read
router.put('/messages/:id/read', (req, res) => {
  try {
    const message = db.markMessageAsRead(req.params.id);
    
    if (!message) {
      return res.status(404).json({
        success: false,
        error: 'Message not found',
      });
    }
    
    res.json({
      success: true,
      data: message,
    });
  } catch (error) {
    console.error('Error marking message as read:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update message',
    });
  }
});

// GET /api/admin/dashboard - Get dashboard summary
router.get('/dashboard', (req, res) => {
  try {
    const analytics = db.getAnalytics();
    const recentComments = db.getAllComments().slice(0, 5);
    const recentMessages = db.getAllContactMessages().slice(0, 5);
    
    res.json({
      success: true,
      data: {
        analytics,
        recentComments,
        recentMessages,
      },
    });
  } catch (error) {
    console.error('Error fetching dashboard:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch dashboard data',
    });
  }
});

export default router;
