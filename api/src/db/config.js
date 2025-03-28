import 'dotenv/config';

const isProduction = process.env.NODE_ENV === 'production';

const dbConfig = {
  connectionString: process.env.DATABASE_URL,
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