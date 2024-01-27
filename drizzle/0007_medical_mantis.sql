ALTER TABLE "property" RENAME COLUMN "default_cancellation_policy_id" TO "cancellation_policy";--> statement-breakpoint
ALTER TABLE "property" RENAME COLUMN "hotel_policy_id" TO "property_policy";--> statement-breakpoint
ALTER TABLE "content" DROP COLUMN IF EXISTS "created_at";--> statement-breakpoint
ALTER TABLE "photos" DROP COLUMN IF EXISTS "created_at";--> statement-breakpoint
ALTER TABLE "property" DROP COLUMN IF EXISTS "created_at";