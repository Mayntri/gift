import { drizzle } from "drizzle-orm/planetscale-serverless";

const db = drizzle({ connection: process.env.DATABASE_URL || '' });
