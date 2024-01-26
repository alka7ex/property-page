ALTER TABLE "photos" RENAME COLUMN "property_id" TO "content_id";--> statement-breakpoint
ALTER TABLE "photos" DROP CONSTRAINT "photos_property_id_content_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "photos" ADD CONSTRAINT "photos_content_id_content_id_fk" FOREIGN KEY ("content_id") REFERENCES "content"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
