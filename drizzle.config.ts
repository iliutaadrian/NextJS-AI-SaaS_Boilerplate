import type { Config } from "drizzle-kit";
export default {
  driver: "pg",
  schema: "./lib/db/index.ts",
  out: "./drizzle",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL_NON_POOLING!,
  },
} satisfies Config;
