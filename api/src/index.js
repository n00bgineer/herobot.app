import { Hono } from 'hono'
import agent from './routes/agent'
import { sendSuccess } from './utils/responseHandler'

const app = new Hono().basePath('/api');

// ROUTES
app.get('/health', (ctx) => {
  return sendSuccess(ctx, null, "ONLINE")
});
app.route('/', agent);

export default app;
