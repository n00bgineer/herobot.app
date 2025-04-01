import config from './src/config.js';
import dbConfig from './src/db/config.js';
import { defineConfig } from 'drizzle-kit';

const isProduction = config.NODE_ENV === 'production';
console.log(`CONNECITNG TO ${isProduction? "PRODUCTION": "LOCAL"} DATABASE`)

export default defineConfig({
  out: './src/db/migrate',
  schema: './src/db/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: dbConfig.connectionString,
  },
});