import config from '../config';

const isProduction = config.NODE_ENV === 'production';

const dbConfig = {
  connectionString: config.DATABASE_URL,
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