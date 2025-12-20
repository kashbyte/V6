"use client";

import { useEffect, useState } from "react";

type Mood = {
  id: number;
  mood: string;
  note: string | null;
  time: string;
};

export default function StreakPage() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    async function fetchStreak() {
      const res = await fetch("/api/moods");
      const data: Mood[] = await res.json();

      if (!data.length) {
        setStreak(0);
        return;
      }

      // Convert timestamps to local dates
      const dates = data
        .map((m) => new Date(m.time).toDateString())
        .filter((v, i, a) => a.indexOf(v) === i);

      let currentStreak = 0;
      let day = new Date();

      for (const date of dates) {
        if (new Date(date).toDateString() === day.toDateString()) {
          currentStreak++;
          day.setDate(day.getDate() - 1);
        } else {
          break;
        }
      }

      setStreak(currentStreak);
    }

    fetchStreak();
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Your Check-in Streak</h1>
      <p>🔥 You are on a {streak}-day streak</p>
    </div>
  );
}
