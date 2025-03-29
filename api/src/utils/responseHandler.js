//RESPONSE HANDLER UTILITY

// STANDARD HANDLERS
/**
 * @name sendSuccess
 * @description STANDARD SUCCESSFUL RESPONSE FORMAT
 * @param {object} ctx - HONO CONTEXT OBJECT
 * @param {any} data - DATA TO BE SENT IN THE RESPONSE
 * @param {string} message - SUCCESS MESSAGE
 * @param {number} STATUS - HTTP STATUS CODE (DEFAULT: 200)
 */
export const sendSuccess = (ctx, data = null, message = 'SUCCESS', status = 200) => {
  return ctx.json({
    success: true,
    message,
    data
  }, status);
};

/**
 * STANDARD ERROR RESPONSE FORMAT
 * @param {object} ctx HONO CONTEXT OBJECT
 * @param {string} message ERROR MESSAGE
 * @param {any} errors OPTIONAL ADDITIONAL ERROR DETAILS
 * @param {number} status HTTP STATUS CODE
 */
export const sendError = (ctx, message, errors = null, status) => {
  return ctx.json({
    success: false,
    message,
    errors
  }, status);
};

/**
 * PREDEFINED ERROR RESPONSES FOR COMMON SERVER-SIDE ERRORS
 */
/**
 * @name badRequest
 * @description 400 - BAD REQUEST
 * @param {object} ctx HONO CONTEXT OBJECT
 * @param {string} message ERROR MESSAGE
 * @param {any} errors OPTIONAL ERROR DETAILS
 */
export const badRequest = (ctx, message = null, errors = null) => {
  return sendError(
    ctx, 
    message || 'Bad request: The server cannot process the request due to client error', 
    errors, 
    400
  );
};

/**
 * @name unauthorized
 * @description 401 - UNAUTHORIZED
 * @param {object} ctx HONO CONTEXT OBJECT
 * @param {string} message ERROR MESSAGE
 * @param {any} errors OPTIONAL ERROR DETAILS
 */
export const unauthorized = (ctx, message = null, errors = null) => {
  return sendError(
    ctx, 
    message || 'Unauthorized: Authentication is required and has failed or not been provided', 
    errors, 
    401
  );
};

/**
 * @name forbidden
 * @description 403 - FORBIDDEN
 * @param {object} ctx HONO CONTEXT OBJECT
 * @param {string} message ERROR MESSAGE
 * @param {any} errors OPTIONAL ERROR DETAILS
 */
export const forbidden = (ctx, message = null, errors = null) => {
  return sendError(
    ctx, 
    message || 'Forbidden: You do not have permission to access this resource', 
    errors, 
    403
  );
};

/**
 * @name notFound
 * @description 404 - NOT FOUND
 * @param {object} ctx HONO CONTEXT OBJECT
 * @param {string} message ERROR MESSAGE
 * @param {any} errors OPTIONAL ERROR DETAILS
 */
export const notFound = (ctx, message = null, errors = null) => {
  return sendError(
    ctx, 
    message || 'Not found: The requested resource could not be found', 
    errors, 
    404
  );
};

/**
 * @name validationError
 * @description 422 - UNPROCESSABLE ENTITY
 * @param {object} ctx HONO CONTEXT OBJECT
 * @param {string} message ERROR MESSAGE
 * @param {any} errors OPTIONAL ERROR DETAILS
 */
export const validationError = (ctx, message = null, errors = null) => {
  return sendError(
    ctx, 
    message || 'Validation error: The request was well-formed but contains semantic errors', 
    errors, 
    422
  );
};

/**
 * @name tooManyRequests
 * @description 429 - TOO MANY REQUESTS
 * @param {object} ctx HONO CONTEXT OBJECT
 * @param {string} message ERROR MESSAGE
 * @param {any} errors OPTIONAL ERROR DETAILS
 */
export const tooManyRequests = (ctx, message = null, errors = null) => {
  return sendError(
    ctx, 
    message || 'Too many requests: You have sent too many requests in a given amount of time', 
    errors, 
    429
  );
};


// SERVER-SIDE ERRORS
/**
 * @name serverError
 * @description 500 - INTERNAL SERVER ERROR
 * @param {object} ctx HONO CONTEXT OBJECT
 * @param {string} message ERROR MESSAGE
 * @param {any} errors OPTIONAL ERROR DETAILS
 */
export const serverError = (ctx, message = null, errors = null) => {
  return sendError(
    ctx, 
    message || 'Internal server error: Something went wrong on the server', 
    errors, 
    500
  );
};

/**
 * @name serviceUnavailable
 * @description 503 - SERVICE UNAVAILABLE
 * @param {object} ctx HONO CONTEXT OBJECT
 * @param {string} message ERROR MESSAGE
 * @param {any} errors OPTIONAL ERROR DETAILS
 */
export const serviceUnavailable = (ctx, message = null, errors = null) => {
  return sendError(
    ctx, 
    message || 'Service unavailable: The server is currently unable to handle the request', 
    errors, 
    503
  );
};