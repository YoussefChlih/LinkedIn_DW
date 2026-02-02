import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { db } from '../models/database.js';

const router = Router();

// Validation middleware
const contactValidation = [
  body('name').trim().isLength({ min: 2, max: 100 }).withMessage('Name must be 2-100 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('subject').trim().isLength({ min: 3, max: 200 }).withMessage('Subject must be 3-200 characters'),
  body('message').trim().isLength({ min: 10, max: 5000 }).withMessage('Message must be 10-5000 characters'),
];

// POST /api/contact - Submit contact form (public)
router.post('/', contactValidation, (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { name, email, subject, message } = req.body;
    const contactMessage = db.createContactMessage({ name, email, subject, message });
    
    res.status(201).json({
      success: true,
      data: { id: contactMessage.id },
      message: 'Message sent successfully! I will get back to you soon.',
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send message',
    });
  }
});

export default router;
