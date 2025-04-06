import db from '../db/index.js';
import { agentUsageLog } from '../db/schema.js';

/**
 * @name logAgentUsage
 * @description METHOD TO LOG THE USER AGENT'S USAGE
 * @returns {Promise<void>} INSERTION RESULT
 */
export const logAgentUsage = async ({token, agentType, agentUsageType}) => {
  await db().insert(agentUsageLog).values({
    agentType,
    agentUsageType,
    accessToken: token
  })
}