import postgres from 'postgres';
import env from '../../env.js';
import dbConfig from './config.js';
import * as schema from './schema.js';
import { drizzle } from 'drizzle-orm/postgres-js';

const isProduction = env.NODE_ENV === 'production';
console.log(`CONNECITNG TO ${isProduction? "PRODUCTION": "LOCAL"} DATABASE`, dbConfig.connectionString, env)

const client = postgres(dbConfig.connectionString, dbConfig.options);
const db = drizzle(client, { schema });
export default db;