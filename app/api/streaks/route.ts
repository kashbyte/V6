import { sql } from "@/lib/db";

export async function GET() {
  try {
    const rows = await sql`
      SELECT time
      FROM moods
      ORDER BY time DESC;
    `;

    if (rows.length === 0) {
      return Response.json({ streak: 0 });
    }

    const days = rows.map((row) => new Date(row.time).toDateString());

    const uniqueDays = [...new Set(days)];

    let streak = 1;

    for (let i = 0; i < uniqueDays.length - 1; i++) {
      const today = new Date(uniqueDays[i]);
      const previous = new Date(uniqueDays[i + 1]);

      const diff =
        (today.getTime() - previous.getTime()) / (1000 * 60 * 60 * 24);

      if (diff === 1) {
        streak++;
      } else {
        break;
      }
    }

    return Response.json({ streak });
  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "Failed to calculate streak" },
      { status: 500 }
    );
  }
}