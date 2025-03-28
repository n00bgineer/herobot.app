import 'dotenv/config';
import dbConfig from './src/db/config.js';
import { defineConfig } from 'drizzle-kit';

const isProduction = process.env.NODE_ENV === 'production';
console.log(`CONNECITNG TO ${isProduction? "PRODUCTION": "LOCAL"} DATABASE`)

export default defineConfig({
  out: './src/db/migrate',
  schema: './src/db/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: dbConfig.connectionString,
  },
});