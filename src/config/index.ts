import * as dotenv from 'dotenv';

// Initialize dotenv
dotenv.config();

const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3000', 10),

  // Example for future expansions
  // db: {
  //   url: process.env.DATABASE_URL || '',
  // },

  // jwt: {
  //   secret: process.env.JWT_SECRET || 'super-secret-key',
  //   expiresIn: '1d',
  // },

  isProduction: process.env.NODE_ENV === 'production',
};

export default config;
