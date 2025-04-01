import {z} from 'zod'
import { zValidator } from '@hono/zod-validator'
import { validationError } from './responseHandler'

// SCHEMAS
// TOKEN VERIFICATION SCHEMA for verifyTokenMiddleware
export const verifyTokenSchema = z.object({
    agentType: z.enum([
      'athena_agent',
      'apollo_agent',
      'hermes_agent'
    ]),
    agentUsageType: z.enum([
      'user_query',
      'roadmap_generation',
      'knowledge_eval',
      'user_comms'
    ])
  }).required()

// METHODS
/**
 * @name createValidator
 * @description CREATES A HONO ZVALIDATOR WITH CUSTOM ERROR HANDLING
 * @param {string} target VALIDATION TARGET (e.g. 'json', 'form', etc.)
 * @param {z.ZodType} schema SCHEMA FOR VALIDATION
 * @param {string} errorMessage CUSTOM ERROR MESSAGE SHOWN ON VALIDATION FAILURE
 * @returns {Function} ZVALIDATOR MIDDLEWARE
 */
export const validationMiddleware = (target, schema, errorMessage = "INCORRECT OR MISSING ITEMS IN REQUEST BODY") => {
  return zValidator(target, schema, (result, ctx) => {
    if (!result.success) {
      return validationError(ctx, errorMessage);
    }
  });
}