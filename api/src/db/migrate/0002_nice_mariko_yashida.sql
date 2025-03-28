ALTER TABLE "user_sessions" DROP CONSTRAINT "user_sessions_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "user_tokens" DROP CONSTRAINT "user_tokens_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "user_sessions" ADD CONSTRAINT "user_sessions_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "user_tokens" ADD CONSTRAINT "user_tokens_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE cascade;