import env from '../env.js';

const isProduction = env.NODE_ENV === 'PRODUCTION';

const dbConfig = {
  connectionString: env.DATABASE_URL,
  options: isProduction 
    ? {
        max: 20, 
        prepare: false,
        idleTimeoutMillis: 30000,
        ssl: { rejectUnauthorized: false }, 
      } 
    : {
        max: 10,
        idleTimeoutMillis: 60000
      }
};

export default dbConfig;