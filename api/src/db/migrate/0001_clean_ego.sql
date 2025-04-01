ALTER TABLE "access_token" ALTER COLUMN "is_revoked" SET DEFAULT false;--> statement-breakpoint
ALTER TABLE "agent_usage_log" ALTER COLUMN "access_token" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "agent_usage_log" ALTER COLUMN "access_token" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "agent_usage_log" DROP COLUMN "invalid_access_token";