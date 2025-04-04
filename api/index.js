import env from './env'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import agent from './routes/agent'
import { sendSuccess } from './utils/responseHandler'

// GETTING CORS ALLOWED ORIGIN
const agentOrigins = [
  env.ATHENA_AGENT_URL, 
  env.APOLLO_AGENT_URL, 
  env.HERMES_AGENT_URL
]
const clientOrigins = [ 
  env.CLIENT_URL || 'http://localhost:5173'
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

export default app;
