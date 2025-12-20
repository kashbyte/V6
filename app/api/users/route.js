import { sql } from "@/lib/db";

// Get or create user
export async function POST(request) {
  try {
    const { google_id, email, name, picture } = await request.json();

    // Check if user exists
    const existing = await sql`
      SELECT * FROM users WHERE google_id = ${google_id}
    `;

    if (existing.length > 0) {
      // User exists, return it
      return Response.json(existing[0]);
    }

    // User doesn't exist, create new one
    const result = await sql`
      INSERT INTO users (google_id, email, name, picture)
      VALUES (${google_id}, ${email}, ${name}, ${picture})
      RETURNING *;
    `;

    return Response.json(result[0]);
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Failed to manage user" }, { status: 500 });
  }
}