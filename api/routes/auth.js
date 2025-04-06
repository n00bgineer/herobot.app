import { Hono } from "hono";
import { sendSuccess } from "../utils/responseHandler";
import { authMiddleware } from "../middleware/auth";

const app = new Hono().basePath('/auth');

app.get('/', authMiddleware , async (ctx) => {
  const userData = ctx.get("user");
  return sendSuccess(ctx, userData);
})

export default app;