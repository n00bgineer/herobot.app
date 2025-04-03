import 'dotenv/config';

console.log(process.env["NODE_ENV"])
console.log(process.env["DATABASE_URL"])

export default {
  NODE_ENV: process.env.NODE_ENV || 'LOCAL',
  DATABASE_URL: process.env.DATABASE_URL
};