import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { db } from '../models/database.js';
import { authenticate, requireAdmin } from '../middleware/auth.js';

const router = Router();

// Validation middleware
const commentValidation = [
  body('name').trim().isLength({ min: 2, max: 100 }).withMessage('Name must be 2-100 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('message').trim().isLength({ min: 5, max: 1000 }).withMessage('Message must be 5-1000 characters'),
];

// GET /api/comments - Get all approved comments (public)
router.get('/', (req, res) => {
  try {
    const comments = db.getApprovedComments();
    res.json({
      success: true,
      data: comments,
    });
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch comments',
    });
  }
});

// GET /api/comments/all - Get all comments (admin)
router.get('/all', authenticate, requireAdmin, (req, res) => {
  try {
    const { status } = req.query;
    let comments;
    
    if (status === 'pending') {
      comments = db.getPendingComments();
    } else if (status === 'approved') {
      comments = db.getApprovedComments();
    } else {
      comments = db.getAllComments();
    }
    
    res.json({
      success: true,
      data: comments,
    });
  } catch (error) {
    console.error('Error fetching all comments:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch comments',
    });
  }
});

// POST /api/comments - Create a new comment (public)
router.post('/', commentValidation, (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { name, email, message } = req.body;
    const comment = db.createComment({ name, email, message });
    
    res.status(201).json({
      success: true,
      data: comment,
      message: 'Comment submitted successfully. It will appear after moderation.',
    });
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit comment',
    });
  }
});

// PUT /api/comments/:id/approve - Approve a comment (admin)
router.put('/:id/approve', authenticate, requireAdmin, (req, res) => {
  try {
    const comment = db.updateComment(req.params.id, { status: 'approved' });
    
    if (!comment) {
      return res.status(404).json({
        success: false,
        error: 'Comment not found',
      });
    }
    
    res.json({
      success: true,
      data: comment,
      message: 'Comment approved',
    });
  } catch (error) {
    console.error('Error approving comment:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to approve comment',
    });
  }
});

// PUT /api/comments/:id/reject - Reject a comment (admin)
router.put('/:id/reject', authenticate, requireAdmin, (req, res) => {
  try {
    const comment = db.updateComment(req.params.id, { status: 'rejected' });
    
    if (!comment) {
      return res.status(404).json({
        success: false,
        error: 'Comment not found',
      });
    }
    
    res.json({
      success: true,
      data: comment,
      message: 'Comment rejected',
    });
  } catch (error) {
    console.error('Error rejecting comment:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to reject comment',
    });
  }
});

// POST /api/comments/:id/like - Like a comment (public)
router.post('/:id/like', (req, res) => {
  try {
    const comment = db.likeComment(req.params.id);
    
    if (!comment) {
      return res.status(404).json({
        success: false,
        error: 'Comment not found',
      });
    }
    
    res.json({
      success: true,
      data: { likes: comment.likes },
    });
  } catch (error) {
    console.error('Error liking comment:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to like comment',
    });
  }
});

// DELETE /api/comments/:id - Delete a comment (admin)
router.delete('/:id', authenticate, requireAdmin, (req, res) => {
  try {
    const deleted = db.deleteComment(req.params.id);
    
    if (!deleted) {
      return res.status(404).json({
        success: false,
        error: 'Comment not found',
      });
    }
    
    res.json({
      success: true,
      message: 'Comment deleted',
    });
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete comment',
    });
  }
});

export default router;
