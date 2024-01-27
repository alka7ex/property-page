-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
DO $$ BEGIN
 CREATE TYPE "timezone" AS ENUM('Asia/Jakarta');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "photos" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"content_id" uuid NOT NULL,
	"url" text,
	"created_at" timestamp(6) with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "content" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"property_id" uuid NOT NULL,
	"description" text,
	"created_at" timestamp(6) with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "property" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"property_name" text,
	"address" text,
	"currency" text,
	"city" text,
	"state" text,
	"country" text,
	"zip_code" text,
	"email" text,
	"phone" text,
	"is_active" boolean,
	"min_stay_type" text,
	"acc_channels_count" text,
	"latitude" text,
	"longitude" text,
	"location_precision" text,
	"property_type" text,
	"property_category" text,
	"timezone" "timezone",
	"website" text,
	"logo_url" text,
	"default_cancellation_policy_id" uuid,
	"hotel_policy_id" uuid,
	"default_tax_set_id" uuid,
	"profile_id" uuid,
	"created_at" timestamp(6) with time zone,
	"slug" text,
	"google_maps_url" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "room_type" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"property_id" uuid NOT NULL,
	"room_type_name" text,
	"price" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "rate_plans" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"room_type_id" uuid NOT NULL,
	"rate_plan_name" text,
	"price" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "photos" ADD CONSTRAINT "photos_content_id_content_id_fk" FOREIGN KEY ("content_id") REFERENCES "public"."content"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "content" ADD CONSTRAINT "content_property_id_property_id_fk" FOREIGN KEY ("property_id") REFERENCES "public"."property"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

*/