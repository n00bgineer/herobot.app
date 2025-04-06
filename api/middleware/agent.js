import { verifyToken } from '../methods/token.js'
import { unauthorized } from '../utils/responseHandler.js'

// METHODS
/**
 * @name verifyTokenMiddleware
 * @description MIDDLEWARE TO VERIFY TOKENS FOR AUTHORIZATION OF REQUESTS FROM EXTERNAL AGENTS
 * @param {*} ctx CONTEXT OBJECT
 * @param {*} next NEXT METHOD
 * @returns 
 */
export const verifyTokenMiddleware = async (ctx, next) => {
  try{
    // CHECKING FOR THE EXISTENCE OF THE AUTHORIZATION HEADER
    const authorizationHeader = ctx.req.header('Authorization');
    if(!authorizationHeader){
      return unauthorized(ctx, "MISSING AUTHORIZATION HEADER");
    }
    // CHECKING FOR THE EXISTENCE OF THE AUTHORIZATION TOKEN VALUE
    const token = authorizationHeader.split(" ")[1]
    if(!token)
      return unauthorized(ctx, "MISSING TOKEN IN AUTHORIZATION HEADER")

    // CHECKING VALIDITY OF TOKEN FROM THE DATABASE
    const tokenData = await verifyToken(token);
    if(!tokenData)
      return unauthorized(ctx, "INVALID OR EXPIRED TOKEN")

    ctx.set('token', JSON.stringify({token, ...tokenData}));
    await next();
  }
  catch(error){
    return unauthorized(ctx, "SOMETHING WENT WRONG", error)
  }
}