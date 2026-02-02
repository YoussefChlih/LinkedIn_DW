import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ThumbsUp, Clock, Send } from 'lucide-react';
import { Card, Button, Input, Textarea, Badge } from '../ui';
import { useInView } from '../../hooks';
import { Comment } from '../../types';

// Mock comments data
const mockComments: Comment[] = [
  {
    id: '1',
    name: 'Ahmed Ben Ali',
    email: 'ahmed@example.com',
    message: 'Great portfolio! Your AI projects are really impressive. The HireGenius project shows a deep understanding of NLP and Computer Vision integration.',
    createdAt: '2025-01-15T10:30:00Z',
    status: 'approved',
    likes: 12,
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    message: 'Love the clean design and the variety of skills showcased. Your experience with PyTorch and DGCNN is exactly what our company is looking for!',
    createdAt: '2025-01-20T14:45:00Z',
    status: 'approved',
    likes: 8,
  },
  {
    id: '3',
    name: 'Mohamed Tazi',
    email: 'mohamed@example.com',
    message: 'Mashallah! Fellow Moroccan AI enthusiast here. Your work with GANs and generative AI is inspiring. Keep up the great work!',
    createdAt: '2025-01-25T09:15:00Z',
    status: 'approved',
    likes: 15,
  },
];

export const Comments: React.FC = () => {
  const { ref: sectionRef, isInView } = useInView(0.1);
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [newComment, setNewComment] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const validateForm = (): boolean => {
    const newErrors: typeof errors = {};
    
    if (!newComment.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!newComment.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newComment.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!newComment.message.trim()) {
      newErrors.message = 'Comment is required';
    } else if (newComment.message.length < 5) {
      newErrors.message = 'Comment must be at least 5 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const comment: Comment = {
        id: Date.now().toString(),
        name: newComment.name,
        email: newComment.email,
        message: newComment.message,
        createdAt: new Date().toISOString(),
        status: 'pending',
        likes: 0,
      };
      
      setComments(prev => [comment, ...prev]);
      setNewComment({ name: '', email: '', message: '' });
      setShowSuccess(true);
      
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLike = (commentId: string) => {
    setComments(prev =>
      prev.map(comment =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      )
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewComment(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      id="comments"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 md:py-32 bg-muted/30"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Visitor <span className="gradient-text">Comments</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leave your thoughts, feedback, or just say hello!
          </p>
        </motion.div>

        {/* Comment Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MessageSquare size={20} className="text-primary-500" />
              Leave a Comment
            </h3>
            
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-4 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 text-sm"
              >
                ✓ Thank you for your comment! It will appear after moderation.
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Your name"
                  name="name"
                  value={newComment.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <Input
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={newComment.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>
              <Textarea
                placeholder="Write your comment..."
                name="message"
                rows={4}
                value={newComment.message}
                onChange={handleChange}
                error={errors.message}
              />
              <Button
                type="submit"
                isLoading={isSubmitting}
                rightIcon={<Send size={16} />}
              >
                Post Comment
              </Button>
            </form>
          </Card>
        </motion.div>

        {/* Comments List */}
        <div className="space-y-6">
          <AnimatePresence>
            {comments.map((comment, index) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {comment.avatar ? (
                        <img src={comment.avatar} alt={comment.name} className="w-full h-full rounded-full object-cover" />
                      ) : (
                        comment.name.charAt(0).toUpperCase()
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      {/* Header */}
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-foreground">{comment.name}</h4>
                          {comment.status === 'pending' && (
                            <Badge variant="warning" size="sm">Pending</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock size={14} />
                          <span>{formatDate(comment.createdAt)}</span>
                        </div>
                      </div>
                      
                      {/* Message */}
                      <p className="text-muted-foreground mb-4">{comment.message}</p>
                      
                      {/* Actions */}
                      <div className="flex items-center gap-4">
                        <motion.button
                          onClick={() => handleLike(comment.id)}
                          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary-500 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ThumbsUp size={16} />
                          <span>{comment.likes}</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No comments state */}
        {comments.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <MessageSquare size={48} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No comments yet. Be the first to leave one!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
