import { Hono } from "hono";
import { verifyTokenMiddleware } from "../middleware/agent";
import { validationMiddleware, verifyTokenSchema } from "../utils/validator";
import { logAgentUsage } from "../methods/logging";
import { sendSuccess } from "../utils/responseHandler";

const app = new Hono().basePath('/agent');

// ROUTE FOR VERIFYING EXTERNAL TOKEN ACCESS
app.post('/verify', verifyTokenMiddleware, validationMiddleware('json', verifyTokenSchema), async (ctx) => {
  // EXTRACTING TOKEN DATA PASSED FROM VERIFY TOKEN MIDDLEWARE
  const tokenData = ctx.get("token");
  const { token } = JSON.parse(tokenData) || {};
  const { agentType, agentUsageType } = await ctx.req.json();

  // LOGGING CORRECT TOKEN USAGE
  await logAgentUsage({ token, agentType, agentUsageType });

  return sendSuccess(ctx, null, 'VALID TOKEN');
})

export default app;