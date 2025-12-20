"use client";

import { useState } from "react";
import ProtectedPage from "../../components/ProtectedPage";

type Resource = {
  id: string;
  category: string;
  title: string;
  link: string;
};

export default function ResourcesPage() {
  const [resources] = useState<Resource[]>([
    {
      id: "1",
      category: "Anxiety",
      title: "Breathing Exercises",
      link: "https://www.healthline.com/health/breathing-exercise"
    },
    {
      id: "2",
      category: "Anxiety",
      title: "Meditation Guide",
      link: "https://www.mindful.org/how-to-meditate/"
    },
    {
      id: "3",
      category: "Depression",
      title: "Coping Strategies",
      link: "https://www.verywellmind.com/forty-healthy-coping-skills-4586742"
    },
    {
      id: "4",
      category: "Stress",
      title: "Stress Management Tips",
      link: "https://www.healthhub.sg/programmes/mindsg/caring-for-ourselves/coping-with-stress-adults"
    }
  ]);

  const categories = Array.from(new Set(resources.map((r) => r.category)));

  return (
    <ProtectedPage>
    <main style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#111111" }}>Resources</h1>
      <p style={{ textAlign: "center", marginBottom: "40px", color: "#555" }}>
        Find helpful resources based on your current feeling
      </p>

      {categories.map((cat) => (
        <section key={cat} style={{ marginBottom: "40px" }}>
          <h2
            style={{
              backgroundColor: "#e8f5e9",
              color: "#111111",
              padding: "10px 15px",
              borderRadius: "8px",
              display: "inline-block",
              marginBottom: "15px"
            }}
          >
            {cat}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px"
            }}
          >
            {resources
              .filter((r) => r.category === cat)
              .map((r) => (
                <a
                  key={r.id}
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    padding: "20px",
                    borderRadius: "10px",
                    backgroundColor: "#f1f8e9",
                    color: "#111111",
                    textDecoration: "none",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    transition: "transform 0.2s, box-shadow 0.2s"
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-5px)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 8px 16px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "none";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 4px 8px rgba(0,0,0,0.1)";
                  }}
                >
                  {r.title}
                </a>
              ))}
          </div>
        </section>
      ))}
    </main>
    </ProtectedPage>  
  );
}
