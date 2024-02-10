ALTER TABLE "content" ADD COLUMN "created_at" timestamp (6) with time zone;--> statement-breakpoint
ALTER TABLE "facilities" ADD COLUMN "created_at" timestamp (6) with time zone;--> statement-breakpoint
ALTER TABLE "photos" ADD COLUMN "created_at" timestamp (6) with time zone;--> statement-breakpoint
ALTER TABLE "rate_plans" ADD COLUMN "created_at" timestamp (6) with time zone;--> statement-breakpoint
ALTER TABLE "room_type" ADD COLUMN "created_at" timestamp (6) with time zone;