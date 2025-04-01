CREATE TYPE "public"."access_token_type" AS ENUM('programmatic_access', 'default_access');--> statement-breakpoint
CREATE TYPE "public"."agent_type" AS ENUM('athena_agent', 'apollo_agent', 'hermes_agent');--> statement-breakpoint
CREATE TYPE "public"."agent_usage_type" AS ENUM('user_query', 'roadmap_generation', 'knowledge_eval', 'user_comms');--> statement-breakpoint
CREATE TABLE "access_token" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"expires_at" timestamp NOT NULL,
	"name" varchar(128) NOT NULL,
	"description" text DEFAULT null,
	"access_token_type" "access_token_type" DEFAULT 'default_access' NOT NULL,
	"is_revoked" boolean DEFAULT true,
	"token" uuid DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	CONSTRAINT "access_token_token_unique" UNIQUE("token")
);
--> statement-breakpoint
CREATE TABLE "agent_usage_log" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"expires_at" timestamp NOT NULL,
	"access_token" uuid DEFAULT null,
	"invalid_access_token" uuid DEFAULT null,
	"agent_type" "agent_type" NOT NULL,
	"agent_usage_type" "agent_usage_type" NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"auth0_id" varchar(128) NOT NULL,
	"google_id" varchar(128),
	"name" text NOT NULL,
	"email" varchar(255) NOT NULL,
	"email_verified" boolean DEFAULT false,
	"picture" text,
	"is_active" boolean DEFAULT true,
	CONSTRAINT "user_auth0_id_unique" UNIQUE("auth0_id"),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "user_sessions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"expires_at" timestamp NOT NULL,
	"user_id" uuid NOT NULL,
	"token" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "access_token" ADD CONSTRAINT "access_token_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "agent_usage_log" ADD CONSTRAINT "agent_usage_log_access_token_access_token_token_fk" FOREIGN KEY ("access_token") REFERENCES "public"."access_token"("token") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "user_sessions" ADD CONSTRAINT "user_sessions_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE cascade;