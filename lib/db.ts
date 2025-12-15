import { neon } from "@neondatabase/serverless";

console.log("=== ENVIRONMENT DEBUG ===");
console.log("DATABASE_URL exists:", !!process.env.DATABASE_URL);
console.log("DATABASE_URL length:", process.env.DATABASE_URL?.length);
console.log(
  "DATABASE_URL first 20 chars:",
  process.env.DATABASE_URL?.substring(0, 20)
);
console.log(
  "DATABASE_URL last 20 chars:",
  process.env.DATABASE_URL?.substring(process.env.DATABASE_URL.length - 20)
);
console.log("Full DATABASE_URL:", process.env.DATABASE_URL); // This will show the actual value
console.log("========================");

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not defined");
}

export const sql = neon(connectionString);
