import env_config from './env_config'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import agent from './routes/agent'
import { sendSuccess } from './utils/responseHandler'
import auth from './routes/auth'

// GETTING CORS ALLOWED ORIGIN
const agentOrigins = [
  env_config.ATHENA_AGENT_URL, 
  env_config.APOLLO_AGENT_URL, 
  env_config.HERMES_AGENT_URL,
]
const clientOrigins = [ 
  env_config.CLIENT_URL || 'http://localhost:5173'
]

// CREATING SERVER APP AND MIDDLEWARES
const app = new Hono().basePath('/api');
app.use(logger())
app.use(
  '/agent/*',
  cors({
    origin: agentOrigins,
    allowMethods: ['POST'],
    allowHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  })
);
app.use('*', cors({
  origin: clientOrigins,
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// ROUTES
app.get('/health', (ctx) => {
  return sendSuccess(ctx, null, "ONLINE")
});
app.route('/', agent);
app.route('/', auth);

export default app;
