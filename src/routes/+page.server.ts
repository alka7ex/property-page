import type { PageServerLoad } from './$types.ts';
import * as schema from '$lib/db/schema.js';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { PUBLIC_DRIZZLE_DATABASE_URL } from '$env/static/public';

const sql = postgres(PUBLIC_DRIZZLE_DATABASE_URL!);
const db = drizzle(sql, { schema: schema });

export const load = (async ({params}) => {
    const slug = params.propertyId;
    const result = await db.query.property.findFirst({
        with: {
            content: {
                with: {
                    photos: true,
                    facilities: true
                }
            },
            room_type: {
                with: {
                    rate_plans: true
                }
            },
        },
        where: (property, { eq }) => eq(property.slug, 'yvonne-flatley'),
    });
    return { data: result }; // Return a plain object with the result
}) satisfies PageServerLoad;