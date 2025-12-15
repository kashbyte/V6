import { neon } from "@neondatabase/serverless";

const DATABASE_URL =
  "postgresql://neondb_owner:npg_fzq6C1IThykZ@ep-muddy-waterfall-a1k8g5cu-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

const sql = neon(DATABASE_URL);

async function testConnection() {
  try {
    const result = await sql`SELECT NOW()`;
    console.log("✅ Database connection successful!");
    console.log("Current time from DB:", result);
  } catch (error) {
    console.error("❌ Database connection failed!");
    console.error(error);
  }
}

testConnection();
