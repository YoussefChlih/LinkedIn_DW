// In-memory data store (replace with database in production)
// This is a simple implementation for demonstration

const store = {
  users: [
    {
      id: '1',
      username: 'admin',
      email: 'admin@portfolio.com',
      // Password: admin123 (hashed with bcrypt)
      password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
      role: 'admin',
      createdAt: new Date().toISOString(),
    },
  ],
  
  comments: [
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
  ],
  
  visitors: [],
  
  contactMessages: [],
};

// Data access functions
export const db = {
  // Users
  findUserByEmail: (email) => store.users.find(u => u.email === email),
  findUserById: (id) => store.users.find(u => u.id === id),
  createUser: (user) => {
    const newUser = { ...user, id: Date.now().toString(), createdAt: new Date().toISOString() };
    store.users.push(newUser);
    return newUser;
  },
  
  // Comments
  getAllComments: () => [...store.comments].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
  getApprovedComments: () => store.comments.filter(c => c.status === 'approved').sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
  getPendingComments: () => store.comments.filter(c => c.status === 'pending').sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
  findCommentById: (id) => store.comments.find(c => c.id === id),
  createComment: (comment) => {
    const newComment = {
      ...comment,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      status: 'pending',
      likes: 0,
    };
    store.comments.unshift(newComment);
    return newComment;
  },
  updateComment: (id, updates) => {
    const index = store.comments.findIndex(c => c.id === id);
    if (index !== -1) {
      store.comments[index] = { ...store.comments[index], ...updates };
      return store.comments[index];
    }
    return null;
  },
  deleteComment: (id) => {
    const index = store.comments.findIndex(c => c.id === id);
    if (index !== -1) {
      store.comments.splice(index, 1);
      return true;
    }
    return false;
  },
  likeComment: (id) => {
    const comment = store.comments.find(c => c.id === id);
    if (comment) {
      comment.likes += 1;
      return comment;
    }
    return null;
  },
  
  // Visitors
  getAllVisitors: () => [...store.visitors].sort((a, b) => new Date(b.visitedAt) - new Date(a.visitedAt)),
  createVisitor: (visitor) => {
    const newVisitor = {
      ...visitor,
      id: Date.now().toString(),
      visitedAt: new Date().toISOString(),
    };
    store.visitors.push(newVisitor);
    return newVisitor;
  },
  updateVisitor: (id, updates) => {
    const index = store.visitors.findIndex(v => v.id === id);
    if (index !== -1) {
      store.visitors[index] = { ...store.visitors[index], ...updates };
      return store.visitors[index];
    }
    return null;
  },
  
  // Contact Messages
  getAllContactMessages: () => [...store.contactMessages].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
  createContactMessage: (message) => {
    const newMessage = {
      ...message,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      read: false,
    };
    store.contactMessages.push(newMessage);
    return newMessage;
  },
  markMessageAsRead: (id) => {
    const message = store.contactMessages.find(m => m.id === id);
    if (message) {
      message.read = true;
      return message;
    }
    return null;
  },
  
  // Analytics
  getAnalytics: () => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
    
    const todayVisitors = store.visitors.filter(v => new Date(v.visitedAt) >= today).length;
    const weeklyVisitors = store.visitors.filter(v => new Date(v.visitedAt) >= weekAgo).length;
    const monthlyVisitors = store.visitors.filter(v => new Date(v.visitedAt) >= monthAgo).length;
    
    // Calculate average time spent
    const totalTime = store.visitors.reduce((sum, v) => sum + (v.timeSpent || 0), 0);
    const averageTimeSpent = store.visitors.length > 0 ? Math.round(totalTime / store.visitors.length) : 0;
    
    // Country distribution
    const countriesMap = {};
    store.visitors.forEach(v => {
      if (v.country) {
        countriesMap[v.country] = (countriesMap[v.country] || 0) + 1;
      }
    });
    const countriesDistribution = Object.entries(countriesMap)
      .map(([country, visitors]) => ({ country, visitors }))
      .sort((a, b) => b.visitors - a.visitors);
    
    // Browser distribution
    const browserMap = {};
    store.visitors.forEach(v => {
      if (v.browser) {
        browserMap[v.browser] = (browserMap[v.browser] || 0) + 1;
      }
    });
    const browserDistribution = Object.entries(browserMap)
      .map(([browser, count]) => ({ browser, count }))
      .sort((a, b) => b.count - a.count);
    
    // Daily stats for last 7 days
    const dailyStats = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
      const nextDate = new Date(date.getTime() + 24 * 60 * 60 * 1000);
      const visitors = store.visitors.filter(v => {
        const visitDate = new Date(v.visitedAt);
        return visitDate >= date && visitDate < nextDate;
      }).length;
      dailyStats.push({
        date: date.toISOString().split('T')[0],
        visitors,
      });
    }
    
    return {
      totalVisitors: store.visitors.length,
      todayVisitors,
      weeklyVisitors,
      monthlyVisitors,
      averageTimeSpent,
      totalComments: store.comments.length,
      pendingComments: store.comments.filter(c => c.status === 'pending').length,
      totalMessages: store.contactMessages.length,
      unreadMessages: store.contactMessages.filter(m => !m.read).length,
      countriesDistribution,
      browserDistribution,
      dailyStats,
    };
  },
};
