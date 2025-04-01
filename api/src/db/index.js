import postgres from 'postgres';
import config from '../config.js';
import dbConfig from './config.js';
import * as schema from './schema.js';
import { drizzle } from 'drizzle-orm/postgres-js';

const isProduction = config.NODE_ENV === 'production';
console.log(`CONNECITNG TO ${isProduction? "PRODUCTION": "LOCAL"} DATABASE`, dbConfig.connectionString)

const client = postgres(dbConfig.connectionString, dbConfig.options);
const db = drizzle(client, { schema });
export default db;