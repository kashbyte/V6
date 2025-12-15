import { neon } from "@neondatabase/serverless";

export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL);

    const result = await sql`SELECT NOW()`;

    return Response.json(result);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Database error" }, { status: 500 });
  }
}
