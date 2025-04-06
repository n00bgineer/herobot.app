import { eq } from "drizzle-orm";
import db from "../db/index.js";
import { accessToken, user } from "../db/schema.js";
import { verifyAuth0Token } from "../methods/token.js";
import env_config from "../env_config.js";
import { unauthorized } from "../utils/responseHandler.js";

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
    if(!token){
      return unauthorized(ctx, "MISSING TOKEN IN AUTHORIZATION HEADER")
    }
    
    const payload = await verifyAuth0Token(token);
    const subject = payload.sub;
    const googleId = subject.startsWith('google-oauth2|') ? subject.split('|')[1] : null;

    // CHECKING FOR THE EXISTENCE OF THE GOOGLE ID IN THE DATABASE
    let userResult = await db().select()
      .from(user)
      .where(eq(user.googleId, googleId))
      .limit(1);
      
      // CREATING NEW USER IF AUTH0 ID DOESN'T EXIST 
    if (userResult.length === 0) {
      const userInfoResponse = await fetch(`${env_config.AUTH0_DOMAIN}userinfo`, {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });
    
      // IF NO DATA IS AVAILABLE 
      if (!userInfoResponse.ok) {
        const errorText = await userInfoResponse.text();
        console.error('Failed to fetch user info:', errorText);
        return unauthorized(ctx, "FAILED TO FETCH USER INFO");
      }
      
      // SIGNING UP THE USER
      const userInfo = await userInfoResponse.json();
      userResult = await db().insert(user).values({
        name: userInfo.name || 'Anonymous User',
        email: userInfo.email,
        given_name: userInfo.given_name || null,
        nickname: userInfo.nickname || null,
        family_name: userInfo.family_name || null,
        emailVerified: userInfo.email_verified || false,
        googleId: googleId,
        picture: userInfo.picture || null,
        isActive: true
      }).returning();

      // ADDING DEFAULT ACCESS TOKEN FOR THE USER
      await db().insert(accessToken).values({
        name: 'DEFAULT ACCESS TOKEN',
        description: "USER'S DEFAULT ACCESS TOKEN",
        isRevoked: false,
        expiresAt: null,
        userId: userResult[0].id
      })
    }

    ctx.set('user', JSON.stringify(userResult[0]));
    await next();
  }
  catch(error) {
    console.error(error);
    return ctx.json({ error: 'Unauthorized' }, 401);
  }
}