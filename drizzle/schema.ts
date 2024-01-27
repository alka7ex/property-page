import { pgTable, foreignKey, pgEnum, uuid, text, timestamp, boolean, integer } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const timezone = pgEnum("timezone", ['Asia/Jakarta'])


export const photos = pgTable("photos", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	contentId: uuid("content_id").notNull().references(() => content.id),
	url: text("url"),
	createdAt: timestamp("created_at", { precision: 6, withTimezone: true, mode: 'string' }),
});

export const content = pgTable("content", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	propertyId: uuid("property_id").notNull().references(() => property.id),
	description: text("description"),
	createdAt: timestamp("created_at", { precision: 6, withTimezone: true, mode: 'string' }),
});

export const property = pgTable("property", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	propertyName: text("property_name"),
	address: text("address"),
	currency: text("currency"),
	city: text("city"),
	state: text("state"),
	country: text("country"),
	zipCode: text("zip_code"),
	email: text("email"),
	phone: text("phone"),
	isActive: boolean("is_active"),
	minStayType: text("min_stay_type"),
	accChannelsCount: text("acc_channels_count"),
	latitude: text("latitude"),
	longitude: text("longitude"),
	locationPrecision: text("location_precision"),
	propertyType: text("property_type"),
	propertyCategory: text("property_category"),
	timezone: time("timezone"),
	website: text("website"),
	logoUrl: text("logo_url"),
	defaultCancellationPolicyId: uuid("default_cancellation_policy_id"),
	hotelPolicyId: uuid("hotel_policy_id"),
	defaultTaxSetId: uuid("default_tax_set_id"),
	profileId: uuid("profile_id"),
	createdAt: timestamp("created_at", { precision: 6, withTimezone: true, mode: 'string' }),
	slug: text("slug"),
	googleMapsUrl: text("google_maps_url"),
});

export const roomType = pgTable("room_type", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	propertyId: uuid("property_id").notNull(),
	roomTypeName: text("room_type_name"),
	price: text("price"),
});

export const ratePlans = pgTable("rate_plans", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	roomTypeId: uuid("room_type_id").notNull(),
	ratePlanName: text("rate_plan_name"),
	price: integer("price"),
});