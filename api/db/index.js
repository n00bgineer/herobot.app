import postgres from 'postgres';
import env from '../env.js';
import dbConfig from './config.js';
import * as schema from './schema.js';
import { drizzle } from 'drizzle-orm/postgres-js';


const { NODE_ENV } = env;
const { connectionString, options } = dbConfig;
const isProduction = NODE_ENV === 'PRODUCTION';
console.log(`CONNECITNG TO ${isProduction? "PRODUCTION": "LOCAL"} DATABASE`)

const client = postgres(connectionString, options);
const db = drizzle(client, { schema });
export default db;