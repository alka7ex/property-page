DO $$ BEGIN
 CREATE TYPE "timezone" AS ENUM('Asia/Jakarta');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "content" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"property_id" uuid NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "facilities" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"content_id" uuid NOT NULL,
	"facilities_name" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "photos" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"content_id" uuid NOT NULL,
	"url" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "property" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"property_name" text,
	"slug" text,
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
	"google_maps_url" text,
	"property_type" text,
	"property_category" text,
	"timezone" "timezone",
	"website" text,
	"logo_url" text,
	"cancellation_policy" text,
	"property_policy" text,
	"default_tax_set_id" uuid,
	"profile_id" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "rate_plans" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"room_type_id" uuid NOT NULL,
	"rate_plan_name" text,
	"price" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "room_type" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"property_id" uuid NOT NULL,
	"room_type_name" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "content" ADD CONSTRAINT "content_property_id_property_id_fk" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facilities" ADD CONSTRAINT "facilities_content_id_content_id_fk" FOREIGN KEY ("content_id") REFERENCES "content"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "photos" ADD CONSTRAINT "photos_content_id_content_id_fk" FOREIGN KEY ("content_id") REFERENCES "content"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "rate_plans" ADD CONSTRAINT "rate_plans_room_type_id_room_type_id_fk" FOREIGN KEY ("room_type_id") REFERENCES "room_type"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "room_type" ADD CONSTRAINT "room_type_property_id_property_id_fk" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
