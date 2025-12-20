"use client";

import { useState, useEffect } from "react";
import { signIn, signOut } from "next-auth/react";

export default function LoginPage() {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main
      style={{
        minHeight: "40vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#ffffff",
        borderRadius: "30px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
        gap: "32px",
        position: "relative",
        overflow: "hidden",
        padding: "60px 40px",
      }}
    >
      {/* Animated background gradient orbs */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "-5%",
          width: "250px",
          height: "250px",
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 10s ease-in-out infinite reverse",
          pointerEvents: "none",
        }}
      />

      {/* Title with gradient and animation */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1
          style={{
            fontSize: "56px",
            fontWeight: 700,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(-20px)",
            transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
            letterSpacing: "-1px",
          }}
        >
          SafeSpace
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "#888",
            textAlign: "center",
            marginTop: "8px",
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.8s ease 0.2s",
          }}
        >
          Your secure space, one click away
        </p>
      </div>

      {/* Google Sign In Button with enhanced styling */}
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setPressed(false);
        }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onClick={async () => {
          await signOut({ redirect: false });
          signIn("google", { 
            prompt: "select_account",
            callbackUrl: "/home" 
          });
        }}
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "16px 32px",
          borderRadius: "9999px",
          backgroundColor: "#ffffff",
          border: "2px solid rgba(102, 126, 234, 0.1)",
          cursor: "pointer",
          fontSize: "15px",
          fontWeight: 600,
          color: "#444444",
          zIndex: 1,

          // Enhanced pop effect
          transform: pressed
            ? "translateY(0) scale(0.97)"
            : hovered
            ? "translateY(-3px) scale(1.02)"
            : "translateY(0) scale(1)",

          boxShadow: pressed
            ? "0 4px 12px rgba(102, 126, 234, 0.15)"
            : hovered
            ? "0 12px 32px rgba(102, 126, 234, 0.25), 0 0 0 3px rgba(102, 126, 234, 0.08)"
            : "0 6px 20px rgba(0,0,0,0.08)",

          transition: "all 200ms cubic-bezier(0.34, 1.56, 0.64, 1)",
          opacity: mounted ? 1 : 0,
          animation: mounted ? "fadeInUp 0.8s ease 0.4s both" : "none",
        }}
      >
        {/* Animated gradient background on hover */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "9999px",
            background: "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 300ms ease",
            pointerEvents: "none",
          }}
        />

        {/* Google Logo */}
        <svg width="20" height="20" viewBox="0 0 24 24" style={{ position: "relative", zIndex: 1 }}>
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>

        <span style={{ position: "relative", zIndex: 1 }}>Sign in with Google</span>
      </button>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}