CREATE TABLE IF NOT EXISTS "price" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"property_id" uuid NOT NULL,
	"price" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "price" ADD CONSTRAINT "price_property_id_property_id_fk" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
