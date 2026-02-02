// Environment Configuration
export default {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  adminEmail: process.env.ADMIN_EMAIL || 'admin@portfolio.com',
  adminPassword: process.env.ADMIN_PASSWORD || 'admin123',
};
