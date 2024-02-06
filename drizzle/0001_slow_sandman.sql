CREATE TABLE IF NOT EXISTS "profiles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email" text,
	"phone" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "property" DROP COLUMN IF EXISTS "min_stay_type";--> statement-breakpoint
ALTER TABLE "property" DROP COLUMN IF EXISTS "acc_channels_count";--> statement-breakpoint
ALTER TABLE "property" DROP COLUMN IF EXISTS "location_precision";--> statement-breakpoint
ALTER TABLE "property" DROP COLUMN IF EXISTS "website";--> statement-breakpoint
ALTER TABLE "property" DROP COLUMN IF EXISTS "logo_url";--> statement-breakpoint
ALTER TABLE "property" DROP COLUMN IF EXISTS "default_tax_set_id";