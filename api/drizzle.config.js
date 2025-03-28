import 'dotenv/config';
import dbConfig from './src/db/config.js';

export default {
  out: './src/db/migrate',
  schema: './src/db/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    connectionString: dbConfig.connectionString,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
  },
  verbose: true,
  strict: true,
};