"use client";

import { useEffect, useState } from "react";
import ProtectedPage from "../../components/ProtectedPage";

export default function StreakPage() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    async function fetchStreak() {
      const res = await fetch("/api/streaks");
      const data = await res.json();
      setStreak(data.streak);
    }

    fetchStreak();
  }, []);

  return (
    <ProtectedPage>
      <div style={{ padding: 24 }}>
        <h1>Your Check-in Streak</h1>
        <p>🔥 You are on a {streak}-day streak</p>
      </div>
    </ProtectedPage>
  );
}
