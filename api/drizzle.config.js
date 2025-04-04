import "dotenv/config";
import { defineConfig } from 'drizzle-kit';
import dbConfig from './db/config';

export default defineConfig({
  out: './db/migrate',
  schema: './db/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});