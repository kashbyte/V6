"use client";

import { useEffect, useState } from "react";
import CheckInForm, {
  MoodEntry as MoodEntryType,
} from "../../components/CheckInForm";

export default function CheckInPage() {
  const [moods, setMoods] = useState<MoodEntryType[]>([]);

  useEffect(() => {
    const loadMoods = async () => {
      const res = await fetch("/api/moods");
      const data = await res.json();
      setMoods(data);
    };
    loadMoods();
  }, []);

  async function handleSave(data: MoodEntryType) {
    const res = await fetch("/api/moods", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const saved = await res.json();
    setMoods([saved, ...moods]);
  }

  return (
    <main
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "28px",
          color: "#111111",
          marginBottom: "20px",
        }}
      >
        Daily Check-in
      </h1>

      <CheckInForm onSaved={handleSave} />

      {moods.length > 0 && (
        <>
          <h2
            style={{
              marginTop: "40px",
              marginBottom: "20px",
              color: "#334155",
            }}
          >
            Recent Check-ins
          </h2>

          {moods.map((mood) => (
            <div
              key={mood.id}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "16px",
                marginBottom: "16px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <div style={{ fontSize: "24px" }}>{mood.mood}</div>
              {mood.note && (
                <div style={{ color: "#334155", fontSize: "14px" }}>
                  {mood.note}
                </div>
              )}
              <div style={{ fontSize: "12px", color: "#888" }}>
                {new Date(mood.time).toLocaleString()}
              </div>
            </div>
          ))}
        </>
      )}
    </main>
  );
}
