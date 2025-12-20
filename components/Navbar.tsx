"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Don't render navbar on login page
  if (pathname === "/login") return null;

  const links = [
    { href: "/", label: "Home" },
    { href: "/checkin", label: "Check-in" },
    { href: "/community", label: "Community" },
    { href: "/resources", label: "Resources" }
  ];

  return (
    <nav
      style={{
        padding: "16px 20px",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        position: "relative"
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
            transition: "all 0.25s ease",
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

      {/* Login / User */}
      {session ? (
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{
              padding: "8px 18px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              backgroundColor: "#f1f8e9",
              color: "#2e7d32",
              transition: "all 0.2s",
            }}
          >
            {session.user?.name}
          </button>

          {dropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "120%",
                right: 0,
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                minWidth: "120px",
                zIndex: 10,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <a
                href="/profile"
                style={{
                  padding: "10px",
                  textDecoration: "none",
                  color: "#333",
                  fontSize: "14px",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e8f5e9")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                onClick={() => setDropdownOpen(false)}
              >
                Profile
              </a>
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                style={{
                  padding: "10px",
                  textAlign: "left",
                  border: "none",
                  background: "transparent",
                  fontSize: "14px",
                  cursor: "pointer",
                  color: "#333",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e8f5e9")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <a
          href="/login"
          style={{
            padding: "8px 18px",
            borderRadius: "999px",
            backgroundColor: "#f1f8e9",
            color: "#2e7d32",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Login
        </a>
      )}
    </nav>
  );
}