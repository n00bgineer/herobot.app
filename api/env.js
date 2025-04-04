import { env } from "cloudflare:workers"

export default {
    NODE_ENV: env.NODE_ENV || 'LOCAL',
    DATABASE_URL: env.DATABASE_URL,
    ATHENA_AGENT_URL: env.ATHENA_AGENT_URL,
    APOLLO_AGENT_URL: env.APOLLO_AGENT_URL,
    HERMES_AGENT_URL: env.HERMES_AGENT_URL,
};