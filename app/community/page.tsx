"use client";

import { useState } from "react";

type Post = {
  id: string;
  mood: string;
  note: string;
  session_id: string;
  time: number;
};

export default function CommunityPage() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      mood: "😀",
      note: "Feeling great today!",
      session_id: "anon-123",
      time: Date.now() - 1000000
    },
    {
      id: "2",
      mood: "😟",
      note: "A bit anxious about exams.",
      session_id: "anon-456",
      time: Date.now() - 500000
    }
  ]);

  return (
    <main
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "28px", color: "#111111", marginBottom: "10px" }}>
        Community Board
      </h1>
      <p style={{ textAlign: "center", marginBottom: "30px", color: "#555" }}>
        Read anonymous posts from others or share your own.
      </p>

      {posts.length === 0 && (
        <p style={{ textAlign: "center", color: "#888" }}>No posts yet.</p>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              padding: "16px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              gap: "6px"
            }}
          >
            <div style={{ fontSize: "24px" }}>{post.mood}</div>
            {post.note && <div style={{ color: "#334155", fontSize: "14px" }}>{post.note}</div>}
            <div style={{ fontSize: "12px", color: "#888888ff" }}>
              Posted by {post.session_id} at {new Date(post.time).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
