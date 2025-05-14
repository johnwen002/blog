import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { drizzle } from "drizzle-orm/d1";
// import { env } from "process";

const db = drizzle("");

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
    usePlural: false,
  }),
  appName: "blog",
  plugins: [],
  rateLimit: {
    window: 10, // time window in seconds
    max: 100, // max requests in the window
  },
});
