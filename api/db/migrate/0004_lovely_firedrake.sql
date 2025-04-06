ALTER TABLE "user" DROP CONSTRAINT "user_auth0_id_unique";--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "given_name" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "family_name" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "nickname" text;--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "auth0_id";