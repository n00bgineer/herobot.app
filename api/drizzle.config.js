import env from './env.js';
import dbConfig from './db/config.js';
import { defineConfig } from 'drizzle-kit';

const isProduction = env.NODE_ENV === 'PRODUCTION';
console.log(`CONNECITNG TO ${isProduction? "PRODUCTION": "LOCAL"} DATABASE`)

export default defineConfig({
  out: './db/migrate',
  schema: './db/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: dbConfig.connectionString,
  },
});