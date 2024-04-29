import type { Config } from "drizzle-kit";
const dotenv = require("dotenv");

dotenv.config({ path: `.env` });
dotenv.config({ path: `.env.${process.env.ENV}` });
export default {
  driver: "pg",
  schema: "./lib/db/index.ts",
  out: "./drizzle",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL_NON_POOLING!,
  },
} satisfies Config;
