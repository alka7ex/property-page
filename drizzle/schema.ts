import { pgTable, foreignKey, pgEnum, uuid, text, integer, boolean, timestamp } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const keyStatus = pgEnum("key_status", ['default', 'valid', 'invalid', 'expired'])
export const keyType = pgEnum("key_type", ['aead-ietf', 'aead-det', 'hmacsha512', 'hmacsha256', 'auth', 'shorthash', 'generichash', 'kdf', 'secretbox', 'secretstream', 'stream_xchacha20'])
export const aalLevel = pgEnum("aal_level", ['aal1', 'aal2', 'aal3'])
export const codeChallengeMethod = pgEnum("code_challenge_method", ['s256', 'plain'])
export const factorStatus = pgEnum("factor_status", ['unverified', 'verified'])
export const factorType = pgEnum("factor_type", ['totp', 'webauthn'])
export const role = pgEnum("role", ['admin', 'property_owner'])
export const timezone = pgEnum("timezone", ['Asia/Jakarta'])


export const content = pgTable("content", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	propertyId: uuid("property_id").notNull().references(() => property.id),
	description: text("description"),
});

export const ratePlans = pgTable("rate_plans", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	roomTypeId: uuid("room_type_id").notNull().references(() => roomType.id),
	ratePlanName: text("rate_plan_name"),
	price: integer("price"),
});

export const photos = pgTable("photos", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	contentId: uuid("content_id").notNull().references(() => content.id),
	url: text("url"),
});

export const facilities = pgTable("facilities", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	contentId: uuid("content_id").notNull().references(() => content.id),
	facilitiesName: text("facilities_name"),
});

export const property = pgTable("property", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	propertyName: text("property_name"),
	slug: text("slug"),
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
	googleMapsUrl: text("google_maps_url"),
	propertyType: text("property_type"),
	propertyCategory: text("property_category"),
	timezone: time("timezone"),
	website: text("website"),
	logoUrl: text("logo_url"),
	cancellationPolicy: text("cancellation_policy"),
	propertyPolicy: text("property_policy"),
	defaultTaxSetId: uuid("default_tax_set_id"),
	profileId: uuid("profile_id"),
});

export const roomType = pgTable("room_type", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	propertyId: uuid("property_id").notNull().references(() => property.id),
	roomTypeName: text("room_type_name"),
});

export const profiles = pgTable("profiles", {
	id: uuid("id").primaryKey().notNull(),
	email: text("email"),
	phone: text("phone"),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});