import { sql } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get moods for this user only
    const result = await sql`
      SELECT * FROM moods 
      WHERE user_id = ${session.user.id}
      ORDER BY time DESC 
      LIMIT 50;
    `;
    
    return Response.json(result);
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Failed to fetch moods" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { mood, note } = body;

    const result = await sql`
      INSERT INTO moods (user_id, mood, note)
      VALUES (${session.user.id}, ${mood}, ${note || null})
      RETURNING *;
    `;
    
    return Response.json(result[0]);
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Failed to save mood" }, { status: 500 });
  }
}