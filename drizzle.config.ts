import type { Config } from "drizzle-kit";
export default {
  schema: "src/lib/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials : {
    connectionString: process.env.DRIZZLE_DATABASE_URL || "default-value"
    },
  verbose: true,
  strict: true
} satisfies Config;