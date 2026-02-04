// Environment Configuration
const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  adminEmail: process.env.ADMIN_EMAIL || 'admin@portfolio.com',
  adminPassword: process.env.ADMIN_PASSWORD,
};

// In production, require JWT_SECRET and ADMIN_PASSWORD to be set
if (config.nodeEnv === 'production') {
  if (!config.jwtSecret) {
    throw new Error('JWT_SECRET environment variable must be set in production');
  }
  if (!config.adminPassword || config.adminPassword.length < 12) {
    throw new Error('ADMIN_PASSWORD must be set and at least 12 characters in production');
  }
} else {
  // Development defaults (ONLY for development)
  config.jwtSecret = config.jwtSecret || 'dev-only-secret-change-in-production-32chars';
  config.adminPassword = config.adminPassword || 'admin123';
}

export default config;
