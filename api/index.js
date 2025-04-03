import { Hono } from 'hono'
import { logger } from 'hono/logger'
import agent from './routes/agent'
import { sendSuccess } from './utils/responseHandler'

const app = new Hono().basePath('/api');
app.use(logger())

// ROUTES
app.get('/health', (ctx) => {
  return sendSuccess(ctx, null, "ONLINE")
});
app.route('/', agent);

export default app;
