CREATE TABLE IF NOT EXISTS "property" (
	"id" serial PRIMARY KEY NOT NULL,
	"property_name" varchar(256),
	"address" varchar(256),
	"text" varchar(256)
);
