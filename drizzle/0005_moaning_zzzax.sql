ALTER TABLE "facilities" DROP CONSTRAINT "facilities_property_id_property_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facilities" ADD CONSTRAINT "facilities_property_id_content_id_fk" FOREIGN KEY ("property_id") REFERENCES "content"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
