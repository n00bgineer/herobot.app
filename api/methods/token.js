import { eq } from 'drizzle-orm';
import db from '../db/index.js';
import { accessToken } from '../db/schema.js';
import env_config from '../env_config.js';
import { createRemoteJWKSet, jwtVerify }  from 'jose';

// VERIFYING TOKEN FROM AGENTS
/**
 * @name verifyToken
 * @description VERIFIES IF A TOKEN EXISTS IN THE DATABASE AND IS VALID
 * @param {object} db DATABASE CONNECTION
 * @param {string} token TOKEN TO VERIFY
 * @returns {Promise<object|null>} TOKEN DATA IF VALID, NULL OTHERWISE
 */
export const verifyToken = async (token) => {
  try {
    const result = await db()
      .select()
      .from(accessToken)
      .where(
        eq(accessToken.token, token)
      )
      .limit(1);
    const tokenData = result[0];

    // CHECKING FOR THE EXISTENCE OF TOKEN DATA
    if (!tokenData) {
      return null;
    }
    // CHECKING IF THE TOKEN DATA IS REVOKED
    else if (tokenData.isRevoked) {
      return null;
    }
    // CHECKING IF THE TOKEN DATA IS EXPIRED OR NOT
    else if (new Date(tokenData.expiresAt) < new Date()) {
      return null;
    }
    return tokenData;
  } catch (error) {
    console.error('ERROR VERIFYING TOKEN:', error);
    return null;
  }
}

/**
 * @name verifyAuth0Token
 * @description VERIFIES THE AUTH0 TOKEN USING JWT
 * @param {*} token TOKEN STRING
 * @returns {Promise<object>} DECODED TOKEN DATA
 */
export const verifyAuth0Token = async (token) => {
    const JWKS = createRemoteJWKSet(
      new URL(`${env_config.AUTH0_DOMAIN}.well-known/jwks.json`)
    );
    const { payload } = await jwtVerify(token, JWKS, {
      audience: env_config.AUTH0_AUDIENCE,
      issuer: env_config.AUTH0_DOMAIN,
    });
    return payload;
};