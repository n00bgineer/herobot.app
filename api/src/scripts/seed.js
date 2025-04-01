import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { user, accessToken } from '../db/schema.js';
import dbConfig from '../db/config.js';

const client = postgres(dbConfig.connectionString, dbConfig.options);
const db = drizzle(client);

async function seed() {
  try {
    console.log('🌱 STARTING DATABASE SEEDING...');
    
    // Create a test user
    const newUser = await db.insert(user).values({
      name: 'Test User',
      email: 'test@example.com',
      auth0Id: 'auth0|test123456789',
      emailVerified: true,
      picture: 'https://i.pravatar.cc/150?u=test@example.com',
      isActive: true
    }).returning();
    
    console.log('👤 Created test user:', newUser[0]);
    
    // CALCULATE EXPIRATION DATE (30 DAYS FROM NOW)
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    
    // CREATE AN ACCESS TOKEN FOR THE USER
    const newToken = await db.insert(accessToken).values({
      name: 'API Access Token',
      description: 'Token created by seed script for testing',
      isRevoked: false,
      expiresAt: expiryDate,
      userId: newUser[0].id
    }).returning();
    
    console.log('🔑 CREATED ACCESS TOKEN:', newToken[0]);
    console.log(`TOKEN VALUE: ${newToken[0].token}`);
    console.log(`TOKEN EXPIRES AT: ${newToken[0].expiresAt}`);

  } catch (error) {
    console.error('❌ ERROR SEEDING DATABASE:', error);
  } finally {
    await client.end();
    console.log('✅ DATABASE SEEDING COMPLETED');
  }
}

seed();