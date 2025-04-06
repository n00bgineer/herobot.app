import { eq } from 'drizzle-orm';
import db from '../db/index.js';
import { accessToken } from '../db/schema.js';
import jwksClient from 'jwks-rsa';
import jwt from 'jsonwebtoken';
import env_config from '../env_config.js';

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

// VERIFYING TOKEN FROM CLIENT
// GENERATING JWT TOKEN FOR AUTHORIZATION
const client = jwksClient({
  jwksUri: `https://${env_config.AUTH0_DOMAIN}/.well-known/jwks.json`,
  cache: true,
  rateLimit: true,
});

/**
 * @name getSigningKey
 * @description GETS THE SIGNING KEY FROM AUTH0 FOR JWT VERIFICATION
 * @param {*} header HEADER
 * @param {*} callback CALLBACK FUNCTION
 */
const getSigningKey = (header, callback) => {
  client.getSigningKey(header.kid, function(err, key) {
    if (err) return callback(err);
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
};

/**
 * @name verifyAuth0Token
 * @description VERIFIES THE AUTH0 TOKEN USING JWT
 * @param {*} token TOKEN STRING
 * @returns {Promise<object>} DECODED TOKEN DATA
 */
export const verifyAuth0Token = async (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      getSigningKey,
      {
        audience: process.env.AUTH0_AUDIENCE,
        issuer: `https://${process.env.AUTH0_DOMAIN}/`,
        algorithms: ['RS256']
      },
      (err, decoded) => {
        if (err) return reject(err);
        resolve(decoded);
      }
    );
  })
};