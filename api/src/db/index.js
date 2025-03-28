
import 'dotenv/config';
import dbConfig from './config.js';
import * as schema from './schema.js';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

console.log(process.env.NODE_ENV)
console.log(dbConfig.connectionString)
const isProduction = process.env.NODE_ENV === 'production';
console.log(`CONNECITNG TO ${isProduction? "PRODUCTION": "LOCAL"} DATABASE`)

const client = postgres(dbConfig.connectionString, dbConfig.options);
const db = drizzle(client, { schema });
export default db;