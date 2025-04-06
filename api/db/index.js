import postgres from 'postgres';
import env from '../env_config.js';
import dbConfig from './config.js';
import * as schema from './schema.js';
import { drizzle } from 'drizzle-orm/postgres-js';

const { NODE_ENV } = env;
const { connectionString, options } = dbConfig;
const isProduction = NODE_ENV === 'PRODUCTION';
console.log(`CONNECTING TO ${isProduction? "PRODUCTION": "LOCAL"} DATABASE`)

function createDbConnection() {
  const client = postgres(connectionString, options);
  return drizzle(client, { schema });
}
export default createDbConnection();