ALTER TYPE "public"."token_type" RENAME TO "access_token_type";--> statement-breakpoint
ALTER TABLE "user_tokens" RENAME TO "access_token";--> statement-breakpoint
ALTER TABLE "access_token" RENAME COLUMN "token_type" TO "access_token_type";--> statement-breakpoint
ALTER TABLE "access_token" DROP CONSTRAINT "user_tokens_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "access_token" ADD CONSTRAINT "access_token_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE cascade;