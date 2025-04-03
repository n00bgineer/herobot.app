import { env } from "cloudflare:workers"

export default {
    NODE_ENV: env.NODE_ENV || 'LOCAL',
    DATABASE_URL: env.DATABASE_URL
};