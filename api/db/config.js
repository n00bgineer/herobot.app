import env from '../env.js';

// SETTING LOCAL VARIABLES
const { NODE_ENV, DATABASE_URL } = env;
const isProduction = NODE_ENV === 'PRODUCTION';

const dbConfig = {
  connectionString: DATABASE_URL,
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