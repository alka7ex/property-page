ALTER TABLE "property" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "property" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "property" ALTER COLUMN "property_name" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "property" ALTER COLUMN "address" SET DATA TYPE text;