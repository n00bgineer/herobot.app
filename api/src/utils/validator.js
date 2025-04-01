import {z} from 'zod'

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

