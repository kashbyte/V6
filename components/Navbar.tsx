"use client";

export default function Navbar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/checkin", label: "Check-in" },
    { href: "/community", label: "Community" },
    { href: "/resources", label: "Resources" },
    { href: "/login", label: "Login" }
  ];

  return (
    <nav
      style={{
        padding: "16px 20px",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        gap: "20px"
      }}
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          style={{
            textDecoration: "none",
            color: "#333",
            fontSize: "15px",
            fontWeight: 600,
            padding: "8px 18px",
            borderRadius: "999px",
            transition: "all 0.25s ease"
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.backgroundColor = "#e8f5e9";
            el.style.color = "#2e7d32";
            el.style.transform = "translateY(-1px)";
            el.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.backgroundColor = "transparent";
            el.style.color = "#333";
            el.style.transform = "translateY(0)";
            el.style.boxShadow = "none";
          }}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
