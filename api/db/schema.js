import { pgTable, text, varchar, timestamp, boolean, uuid, pgEnum } from 'drizzle-orm/pg-core';
import { sql, relations } from 'drizzle-orm';

// ENUMS/TYPES
// AGENT
export const agentType = pgEnum("agent_type", [
  'athena_agent',
  'apollo_agent',
  'hermes_agent'
])

// AGENT USAGE
export const agentUsageType = pgEnum("agent_usage_type", [
  'user_query',
  'roadmap_generation',
  'knowledge_eval',
  'user_comms'
])

// ACCESS TOKEN
export const accessTokenType = pgEnum('access_token_type', [
  'programmatic_access',
  'default_access',
]);

// MODELS
// USER
export const user = pgTable('user', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  
  googleId: varchar('google_id', { length: 128 }).unique().notNull(),
  name: text('name').notNull(),
  given_name: text('given_name'),
  family_name: text('family_name'),
  nickname: text('nickname'),
  email: varchar('email', { length: 255 }).unique().notNull(),
  emailVerified: boolean('email_verified').default(false),
  picture: text('picture'),
  isActive: boolean('is_active').default(true),
});

// USER SESSION
export const userSession = pgTable('user_sessions', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  expiresAt: timestamp('expires_at').notNull(),

  userId: uuid('user_id').references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }).notNull(),
  token: text('token').notNull(),
});

// ACCESS TOKEN
export const accessToken = pgTable('access_token', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  expiresAt: timestamp('expires_at'),

  name: varchar('name', { length: 128 }).notNull(),
  description: text().default(null),
  accessTokenType: accessTokenType('access_token_type').default('default_access').notNull(),
  isRevoked: boolean('is_revoked').default(false),
  token: uuid('token').defaultRandom().notNull().unique(),
  userId: uuid('user_id').references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }).notNull(),
});

// AGENT USAGE LOG
export const agentUsageLog = pgTable('agent_usage_log', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),

  accessToken: uuid('access_token').references(() => accessToken.token, { onDelete: 'cascade', onUpdate: 'cascade' }).notNull(),
  agentType: agentType('agent_type').notNull(),
  agentUsageType: agentUsageType('agent_usage_type').notNull()
})

// RELATIONS
// USER
export const userRelations = relations(user, ({ many }) => ({
  sessions: many(userSession),
  tokens: many(accessToken),
}))

// USER SESSION
export const userSessionRelations = relations(userSession, ({ one }) => ({
  user: one(user, {
    fields: [userSession.userId],
    references: [user.id],
  })
}));

// USER TOKEN
export const accessTokenRelations = relations(accessToken, ({ one }) => ({
  user: one(user, {
    fields: [accessToken.userId],
    references: [user.id],
  })
}));

// AGENT USAGE LOG
export const agentUsageLogRelations = relations(agentUsageLog, ({ one })=>({
  accessToken: one(accessToken, {
    fields: [agentUsageLog.accessToken],
    references: [accessToken.token]
  })
}))