import { relations } from 'drizzle-orm';
import { boolean, timestamp, integer, pgEnum, pgTable, serial, text, uniqueIndex, uuid, varchar } from 'drizzle-orm/pg-core';

export const tzEnum = pgEnum('timezone', ['Asia/Jakarta']);

// table

export const property = pgTable('property', {
	id: uuid('id').primaryKey().defaultRandom(),
	property_name: text('property_name'),
	slug: text('slug'),
	address: text('address'),
	currency: text('currency'),
	city: text('city'),
	state: text('state'),
	country: text('country'),
	zip_code: text('zip_code'),
	email: text('email'),
	phone: text('phone'),
	is_active: boolean('is_active'),
	min_stay_type: text('min_stay_type'),
	acc_channels_count: text('acc_channels_count'),
	latitude: text('latitude'),
	longitude: text('longitude'),
	location_precision: text('location_precision'),
	google_maps_url: text('google_maps_url'),
	property_type: text('property_type'),
	property_category: text('property_category'),
	timezone: tzEnum('timezone'),
	website: text('website'),
	logo_url: text('logo_url'),
	cancellation_policy: text('cancellation_policy'),
	property_policy: text('property_policy'),
	default_tax_set_id: uuid('default_tax_set_id'),
	profile_id: uuid('profile_id'),
	// created_at: timestamp('created_at', { precision: 6, withTimezone: true })
});

export const content = pgTable('content', {
	id: uuid('id').primaryKey().defaultRandom(),
	property_id: uuid('property_id').references(() => property.id).notNull(),
	description: text('description'),
	// created_at: timestamp('created_at', { precision: 6, withTimezone: true })
});

export const photos = pgTable('photos', {
	id: uuid('id').primaryKey().defaultRandom(),
	content_id: uuid('content_id').references(() => content.id).notNull(),
	url: text('url'),
	// created_at: timestamp('created_at', { precision: 6, withTimezone: true })
})

export const room_type = pgTable('room_type', {
	id: uuid('id').primaryKey().defaultRandom(),
	property_id: uuid('property_id').references(() => property.id).notNull(),
	room_type_name: text('room_type_name'),
})

export const rate_plans = pgTable('rate_plans', {
	id: uuid('id').primaryKey().defaultRandom(),
	room_type_id: uuid('room_type_id').references(() => room_type.id).notNull(),
	rate_plan_name: text('rate_plan_name'),
	price: integer('price'),
})

export const facilities = pgTable('facilities', {
	id: uuid('id').primaryKey().defaultRandom(),
	content_id: uuid('content_id').references(() => content.id).notNull(),
	facilities_name: text('facilities_name'),
})

// relations

export const contentRelations = relations(property, ({ one }) => ({
	content: one(content, {
		fields: [property.id],
		references: [content.property_id]
	})
}))

export const photoRelations = relations(content, ({ many }) => ({
	photos: many(photos),
}))

export const photoRelations2 = relations(photos, ({ one }) => ({
	content: one(content, {
		fields: [photos.content_id],
		references: [content.id]
	})
}))


export const propertyRoomTypeRelation = relations(property, ({ one }) => ({
	room_type: one(room_type, {
		fields: [property.id],
		references: [room_type.property_id]
	})
}))

export const ratePlanRoomTypeRelation = relations(room_type, ({ many }) => ({
	rate_plans: many(rate_plans),
}))

export const ratePlanRoomTypeRelation2 = relations(rate_plans, ({ one }) => ({
	room_type: one(room_type, {
		fields: [rate_plans.room_type_id],
		references: [room_type.id]
	})
}))

export const contentFacilitiesRelation2 = relations(content, ({ many }) => ({
	facilities: many(facilities),
}))

export const contentFacilitiesRelation = relations(facilities, ({ one }) => ({
	content: one(content, {
		fields: [facilities.content_id],
		references: [content.id]
	})
}))

