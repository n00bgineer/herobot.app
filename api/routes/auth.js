import { Hono } from "hono";
import { sendSuccess } from "../utils/responseHandler";
import { authMiddleware } from "../middleware/auth";

const auth = new Hono().basePath('/auth');

// ROUTE CALLED AFTER IMMEDIATE SIGNUP/LOGIN FROM /callback
auth.get('/', authMiddleware , async (ctx) => {
  const userData = ctx.get("user");
  return sendSuccess(ctx, userData);
})

export default auth;