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
	latitude: text('latitude'),
	longitude: text('longitude'),
	google_maps_url: text('google_maps_url'),
	property_type: text('property_type'),
	property_category: text('property_category'),
	timezone: tzEnum('timezone'),
	cancellation_policy: text('cancellation_policy'),
	property_policy: text('property_policy'),
	profile_id: uuid('profile_id'),
	create_at: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});

export const content = pgTable('content', {
	id: uuid('id').primaryKey().defaultRandom(),
	property_id: uuid('property_id').references(() => property.id).notNull(),
	description: text('description'),
	create_at: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});

export const photos = pgTable('photos', {
	id: uuid('id').primaryKey().defaultRandom(),
	content_id: uuid('content_id').references(() => content.id).notNull(),
	url: text('url'),
	create_at: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
})

export const room_type = pgTable('room_type', {
	id: uuid('id').primaryKey().defaultRandom(),
	property_id: uuid('property_id').references(() => property.id).notNull(),
	room_type_name: text('room_type_name'),
	create_at: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),

})

export const rate_plans = pgTable('rate_plans', {
	id: uuid('id').primaryKey().defaultRandom(),
	room_type_id: uuid('room_type_id').references(() => room_type.id).notNull(),
	rate_plan_name: text('rate_plan_name'),
	price: integer('price'),
	create_at: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),

})

export const facilities = pgTable('facilities', {
	id: uuid('id').primaryKey().defaultRandom(),
	content_id: uuid('content_id').references(() => content.id).notNull(),
	facilities_name: text('facilities_name'),
	create_at: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),

})

export const profiles = pgTable("profiles", {
	id: uuid("id").primaryKey().notNull(),
	email: text("email"),
	phone: text("phone"),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});


export const userRoles = pgTable("user_roles", {
	id: uuid("id"),
	groupName: text("group_name"),
	role: text("role"),
	email: varchar("email", { length: 255 }),
	groupId: uuid("group_id"),
	userId: uuid("user_id"),
});

export const groupUsers = pgTable("group_users", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	groupId: uuid("group_id").notNull().references(() => groups.id),
	userId: uuid("user_id").notNull(),
	role: text("role").default('').notNull(),
	create_at: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});

export const groups = pgTable("groups", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	name: text("name").default('').notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});

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


export const propertyRoomTypeRelation = relations(property, ({ many }) => ({
	room_type: many(room_type)
}))

export const propertyRoomTypeRelation2 = relations(room_type, ({ one }) => ({
	property: one(property, {
		fields: [room_type.property_id],
		references: [property.id]
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

