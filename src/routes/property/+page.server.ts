import type { PageServerLoad } from './$types.ts';
import * as schema from '$lib/db/schema.js';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DRIZZLE_DATABASE_URL!);
const db = drizzle(sql, { schema: schema });

export const load = (async () => {
    const result = await db.query.property.findMany({
        with: {
            content: {
                with: {
                    photos: true
                }
            },
            price: true
        },
    });
    return { data: result }; // Return a plain object with the result
}) satisfies PageServerLoad;