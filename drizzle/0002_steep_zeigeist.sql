ALTER TABLE "content" ALTER COLUMN "created_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "content" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "content" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "facilities" ALTER COLUMN "created_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "facilities" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "facilities" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "group_users" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "photos" ALTER COLUMN "created_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "photos" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "photos" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "property" ALTER COLUMN "created_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "property" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "property" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "rate_plans" ALTER COLUMN "created_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "rate_plans" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "rate_plans" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "room_type" ALTER COLUMN "created_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "room_type" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "room_type" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user_roles" ADD COLUMN "created_at" timestamp with time zone DEFAULT now() NOT NULL;