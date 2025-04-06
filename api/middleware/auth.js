import db from "../db/index.js";
import { verifyAuth0Token } from "../methods/token";

/**
 * @name authMiddleware
 * @description MIDDLEWARE TO VERIFY AUTHORIZATION OF REQUESTS FROM CLIENTS
 * @param {*} ctx CONTEXT OBJECT
 * @param {*} next NEXT FUNCTION
 * @returns {undefined} undefined
 */
export const authMiddleware = async (ctx, next) => {
  try {
    // CHECKING FOR THE EXISTENCE OF THE AUTHORIZATION HEADER
    const authorizationHeader = ctx.req.header('Authorization');
    if(!authorizationHeader){
      return unauthorized(ctx, "MISSING AUTHORIZATION HEADER");
    }
    // CHECKING FOR THE EXISTENCE OF THE AUTHORIZATION TOKEN VALUE
    const token = authorizationHeader.split(" ")[1]
    if(!token)
      return unauthorized(ctx, "MISSING TOKEN IN AUTHORIZATION HEADER")
      const decoded = await verifyAuth0Token(token);
      const auth0Id = decoded.sub;

      // CHECKING FOR THE EXISTENCE OF THE AUTH0 ID
      let userResult = await db.select()
        .from(user)
        .where(eq(user.auth0Id, auth0Id))
        .limit(1);
      
      // CREATING NEW USER IF AUTH0 ID DOESN'T EXIST 
      if (userResult.length === 0) {
        const newUser = await db.insert(user).values({
          name: decoded.name || 'Anonymous User',
          email: decoded.email,
          auth0Id: auth0Id,
          emailVerified: decoded.email_verified || false,
          picture: decoded.picture || null,
          isActive: true
        }).returning();
        userResult = newUser;
      }
      
      ctx.set('user', JSON.stringify(userResult[0]));

    await next();
  }
  catch(error) {
    return ctx.json({ error: 'Unauthorized' }, 401);
  }
}