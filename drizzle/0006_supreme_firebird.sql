DO $$ BEGIN
 CREATE TYPE "timezone" AS ENUM('Asia/Jakarta');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "property" ADD COLUMN "currency" text;--> statement-breakpoint
ALTER TABLE "property" ADD COLUMN "city" text;--> statement-breakpoint
ALTER TABLE "property" ADD COLUMN "country" text;--> statement-breakpoint
ALTER TABLE "property" ADD COLUMN "zip_code" text;--> statement-breakpoint
ALTER TABLE "property" ADD COLUMN "email" text;--> statement-breakpoint
ALTER TABLE "property" ADD COLUMN "phone" text;--> statement-breakpoint
ALTER TABLE "property" ADD COLUMN "is_active" boolean;--> statement-breakpoint
ALTER TABLE "property" ADD COLUMN "min_stay_type" text;--> statement-breakpoint
ALTER TABLE "property" ADD COLUMN "acc_channels_count" text;--> statement-breakpoint
ALTER TABLE "property" ADD COLUMN "latitude" text;--> statement-breakpoint
ALTER TABLE "property" ADD COLUMN "longitude" text;--> statement-breakpoint
ALTER TABLE "property" ADD COLUMN "location_precision" text;--> statement-breakpoint
ALTER TABLE "property" ADD COLUMN "property_type" text;--> statement-breakpoint
ALTER TABLE "property" ADD COLUMN "property_category" text;--> statement-breakpoint
ALTER TABLE "property" ADD COLUMN "timezone" "timezone";--> statement-breakpoint
ALTER TABLE "property" ADD COLUMN "website" text;--> statement-breakpoint
ALTER TABLE "property" ADD COLUMN "logo_url" text;--> statement-breakpoint
ALTER TABLE "property" ADD COLUMN "default_cancellation_policy_id" uuid;--> statement-breakpoint
ALTER TABLE "property" ADD COLUMN "hotel_policy_id" uuid;--> statement-breakpoint
ALTER TABLE "property" ADD COLUMN "default_tax_set_id" uuid;--> statement-breakpoint
ALTER TABLE "property" ADD COLUMN "profile_id" uuid;--> statement-breakpoint
ALTER TABLE "property" ADD COLUMN "created_at" timestamp (6) with time zone DEFAULT now();