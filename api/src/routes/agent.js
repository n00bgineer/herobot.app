import { Hono } from "hono";
import { verifyTokenMiddleware } from "../middleware/agent";
import { validationMiddleware, verifyTokenSchema } from "../utils/validator";
import { logAgentUsage } from "../methods/token";

const app = new Hono().basePath('/agent');

app.post('/verify', verifyTokenMiddleware, validationMiddleware('json', verifyTokenSchema), async (ctx) => {
  // EXTRACTING TOKEN DATA PASSED FROM VERIFY TOKEN MIDDLEWARE
  const tokenData = ctx.get("token");
  const {token, agentType, agentUsageType} = JSON.parse(tokenData) || {};

  // LOGGING CORRECT TOKEN USAGE
  await logAgentUsage({ token, agentType, agentUsageType });

  return sendSuccess(ctx, null, 'VALID TOKEN');
})

export default app;