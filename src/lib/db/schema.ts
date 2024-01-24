import { integer, pgEnum, pgTable, serial, text, uniqueIndex, varchar } from 'drizzle-orm/pg-core';

export const property = pgTable('property', {
  id: serial('id').primaryKey(),
  property_name: varchar('property_name', { length: 256 }),
  address: varchar('address', { length: 256 }),
  state: varchar('state', { length: 256 }),
});