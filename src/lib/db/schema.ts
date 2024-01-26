import { relations } from 'drizzle-orm';
import { boolean, timestamp, integer, pgEnum, pgTable, serial, text, uniqueIndex, uuid, varchar } from 'drizzle-orm/pg-core';

export const tzEnum = pgEnum('timezone', ['Asia/Jakarta']);


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
  property_type: text('property_type'),
  property_category: text('property_category'),
  timezone: tzEnum('timezone'),
  website: text('website'),
  logo_url: text('logo_url'),
  default_cancellation_policy_id: uuid('default_cancellation_policy_id'),
  hotel_policy_id: uuid('hotel_policy_id'),
  default_tax_set_id: uuid('default_tax_set_id'),
  profile_id: uuid('profile_id'),
  created_at: timestamp('created_at', { precision: 6, withTimezone: true }).defaultNow(),
});

export const contentRelations = relations(property, ({ one }) => ({
  content: one(content,{
    fields: [property.id],
    references: [content.property_id]
  })
}))

export const content = pgTable('content', {
  id: uuid('id').primaryKey().defaultRandom(),
  property_id: uuid('property_id').references(() => property.id).notNull(),
  description: text('description'),
  created_at: timestamp('created_at', { precision: 6, withTimezone: true }).defaultNow(),
});

export const photoRelations = relations(content, ({ many }) => ({
  photos: many(photos),
}))


export const photos = pgTable('photos', {
  id: uuid('id').primaryKey().defaultRandom(),
  content_id: uuid('content_id').references(() => content.id).notNull(),
  url: text('url'),
  created_at: timestamp('created_at', { precision: 6, withTimezone: true }).defaultNow(),
})

export const photoRelations2 = relations(photos, ({ one }) => ({
  content: one(content,{
    fields: [photos.content_id],
    references: [content.id]
  })
}))


export const price = pgTable('price', {
  id: uuid('id').primaryKey().defaultRandom(),
  property_id: uuid('property_id').references(() => property.id).notNull(),
  price: integer('price'),
})


export const priceRelation = relations(property, ({ one }) => ({
  price: one(price,{
    fields: [property.id],
    references: [price.property_id]
  })
}))

