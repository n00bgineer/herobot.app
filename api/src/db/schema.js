import { pgTable, text, varchar, timestamp, boolean, uuid } from 'drizzle-orm/pg-core';
import { sql, relations, desc } from 'drizzle-orm';

// USER SCHEMA
export const user = pgTable('user', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  
  // USER IDENTIFIERS
  auth0Id: varchar('auth0_id', { length: 128 }).unique().notNull(),
  googleId: varchar('google_id', { length: 128 }),

  // USER PROFILE DATA
  name: text('name').notNull(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  emailVerified: boolean('email_verified').default(false),
  picture: text('picture'),
  isActive: boolean('is_active').default(true),
});

// USER RELATIONS
export const userRelations = relations(user, ({ many }) => ({
  sessions: many(userSession),
  tokens: many(userToken),
}))

// USER SESSION DATA
export const userSession = pgTable('user_sessions', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  expiresAt: timestamp('expires_at').notNull(),

  userId: uuid('user_id').references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }).notNull(),
  token: text('token').notNull(),
});

// USER SESSION RELATIONS
export const userSessionRelations = relations(userSession, ({ one }) => ({
  user: one(user, {
    fields: [userSession.userId],
    references: [user.id],
  })
}));

// USER TOKENS DATA
export const userToken = pgTable('user_tokens', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  expiresAt: timestamp('expires_at').notNull(),

  name: varchar('name', { length: 128 }).notNull(),
  description: text(),
  isRevoked: boolean('is_revoked').default(true),
  token: uuid('token').defaultRandom().notNull(),
  userId: uuid('user_id').references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }).notNull(),
});

// USER TOKEN RELATIONS
export const userTokenRelations = relations(userToken, ({ one }) => ({
  user: one(user, {
    fields: [userToken.userId],
    references: [user.id],
  })
}));