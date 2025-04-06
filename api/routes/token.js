import db from "../db";
import { Hono } from "hono";
import { and, eq } from "drizzle-orm";
import { accessToken } from "../db/schema";
import { authMiddleware } from "../middleware/auth";
import { sendError, sendSuccess } from "../utils/responseHandler";
import { createTokenSchema, validationMiddleware } from "../utils/validator";

const token = new Hono();

// ROUTE FOR GETTING PROGRAMMATIC ACCESS TOKENS FOR THE USER
token.get('/tokens', authMiddleware , async (ctx) => {
  // GETTING USER ID
  const userData = ctx.get("user");
  const userId = userData.id;
  
  try{
    let tokens = await db().select()
      .from(accessToken)
      .where(
        and(
          eq(accessToken.userId, userId),
          eq(accessToken.accessTokenType, "programmatic_access"),
          eq(accessToken.isRevoked, false)
        )
      );
    return sendSuccess(ctx, tokens);
  }
  catch(error){
    console.error(error);
    return sendError(ctx, "SOMETHING WENT WRONG", error)
  }
})

// ROUTE FOR CREATING A PROGRAMMATIC ACCESS TOKEN FOR THE USER
token.post('/token/create', authMiddleware, validationMiddleware('json', createTokenSchema), async (ctx) => {
  // GETTING USER ID
  const userData = ctx.get("user");
  const userId = userData.id;

  try{
    // GETTING REQUEST BODY
    const { name, description = null } = await ctx.req.json();
    const tokenData = await db().insert(accessToken).values({
        userId,
        name,
        description,
        accessTokenType: "programmatic_access"
      }).returning();
    return sendSuccess(ctx, tokenData[0]);
  }
  catch(error){
    console.error(error);
    return sendError(ctx, "SOMETHING WENT WRONG", error);
  }
})

// ROUTE FOR DELETING/REVOKING PROGRAMMATIC ACCESS TOKEN
token.delete('/token/delete/:id', authMiddleware, async (ctx) => {
  // GETTING USER ID
  const userData = ctx.get("user");
  const userId = userData.id;

  // GETTING TOKEN ID
  const tokenId = ctx.req.param('id');

  try{
    // CHECKING IF THE TOKEN EXISTS AND WHETHER IT BELONGS TO THE USER OR NOT
    const tokenResult = await db().select()
          .from(accessToken)
          .where(
            and(
              eq(accessToken.id, tokenId),
              eq(accessToken.userId, userId),
              eq(accessToken.accessTokenType, "programmatic_access")
            )
          ).limit(1);

    if(tokenResult.length === 0){
      return sendError(ctx, "TOKEN NOT FOUND");
    }
    else{
      await db().update(accessToken)
                .set({ "isRevoked": true })
                .where(
                  eq(accessToken.id, tokenId)
                );
      return sendSuccess(ctx, null, "PROGRAMMATIC ACCESS TOKEN DELETED");
    }
  }
  catch(error){
    console.error(error);
    return sendError(ctx, "SOMETHING WENT WRONG", error);
  }
})

export default token;