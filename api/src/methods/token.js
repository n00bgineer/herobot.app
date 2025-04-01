import { eq } from 'drizzle-orm';
import db from '../db/index.js';
import { accessToken, agentUsageLog } from '../db/schema.js';

/**
 * @name logAgentUsage
 * @description METHOD TO LOG THE USER AGENT'S USAGE
 * @returns
 */
export const logAgentUsage = async ({token, agentType, agentUsageType, validToken = true}) => {
  // FOR INVALID TOKENS
  if(!validToken){
    await db.insert(agentUsageLog).values({
      agentType,
      agentUsageType,
      invalidAccessToken: token
    })
  }
  else{
    await db.insert(agentUsageLog).values({
      agentType,
      agentUsageType,
      accessToken: token
    })
  }
}

/**
 * @name verifyToken
 * @description VERIFIES IF A TOKEN EXISTS IN THE DATABASE AND IS VALID
 * @param {object} db DATABASE CONNECTION
 * @param {string} token TOKEN TO VERIFY
 * @returns {Promise<object|null>} TOKEN DATA IF VALID, NULL OTHERWISE
 */
export const verifyToken = async ({ token, agentType, agentUsageType }) => {
  try {
    const result = await db
      .select()
      .from(accessToken)
      .where(
        eq(accessToken.token, token)
      )
      .limit(1);
    
    const tokenData = result[0];

    // CHECKING FOR THE EXISTENCE OF TOKEN DATA
    if (!tokenData) {
      await logAgentUsage({ token, agentType, agentUsageType, validToken: false });
      return null;
    }
    // CHECKING IF THE TOKEN DATA IS REVOKED
    else if (tokenData.isRevoked) {
      await logAgentUsage({ token, agentType, agentUsageType });
      return null;
    }
    // CHECKING IF THE TOKEN DATA IS EXPIRED OR NOT
    else if (new Date(tokenData.expiresAt) < new Date()) {
      await logAgentUsage({ token, agentType, agentUsageType });
      return null;
    }
    return tokenData;
  } catch (error) {
    console.error('ERROR VERIFYING TOKEN:', error);
    await logAgentUsage({ token, agentType, agentUsageType });
    return null;
  }
}