"use client"
import Banner from "../components/Banner";


export default function Home() {
  const buttonStyle: React.CSSProperties = {
    display: "inline-block",
    padding: "18px 28px",
    borderRadius: "10px",
    backgroundColor: "#f1f8e9",
    color: "#2e7d32",
    textDecoration: "none",
    fontWeight: 600,
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
    marginRight: "15px"
  };

  const handleHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    el.style.transform = "translateY(-5px)";
    el.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
  };

  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    el.style.transform = "none";
    el.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
  };

  return (
    <main style={{ padding: "40px", textAlign: "center", fontFamily: "font-edu text-2xl" }}>
      <h1 style={{ color: "#111111" }}>SafeSpace</h1>

      <p style={{ color: "#555", marginBottom: "30px" }}>
        A safe, anonymous place to check in with your feelings.
      </p>
      
    {/* Banner*/}
      <Banner imageSrc="slides/Banner.jpg" altText="SafeSpace mental health banner" />

      <div style={{ marginTop: "30px" }}>
        <a
          href="/checkin"
          style={buttonStyle}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          Go to Check-in
        </a>

        <a
          href="/community"
          style={buttonStyle}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          Visit Community
        </a>

        <a
          href="/resources"
          style={{ ...buttonStyle, marginRight: 0 }}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          View Resources
        </a>
      </div>
    </main>
  );
}
