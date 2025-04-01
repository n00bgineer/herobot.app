import { Hono } from "hono";
import { verifyTokenMiddleware } from "../middleware/agent";

const app = new Hono().basePath('/agent');

app.get('/verify', verifyTokenMiddleware, (ctx) => {
  return sendSuccess(ctx, null, 'VALID TOKEN');
})

export default app;