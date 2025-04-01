import { verifyToken } from '../methods/token.js'
import { unauthorized, validationError } from '../utils/responseHandler.js'
import { verifyTokenSchema } from '../utils/validator.js'

// METHODS
/**
 * @name verifyTokenMiddleware
 * @description MIDDLEWARE TO VERIFY 
 * @param {*} ctx 
 * @param {*} next 
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
    const body = await ctx.req.json() || {};
    const tokenData = await verifyToken({token, ...body});
    if(!tokenData)
      return unauthorized(ctx, "INVALID OR EXPIRED TOKEN")

    // CHECKING VALIDITY OF THE BODY
    const result = verifyTokenSchema.safeParse(body);
    if(!result.success)
      return validationError(ctx, "INCORRECT OR MISSING ITEMS IN REQUEST BODY")

    next();
  }
  catch(error){
    return unauthorized(ctx, "SOMETHING WENT WRONG")
  }
}