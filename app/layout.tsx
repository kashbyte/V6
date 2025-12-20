"use client";

import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";
import './globals.css';
//import Home from "./homepage/page";
import { SessionProvider } from "next-auth/react";

// export const metadata = {
//   title: "SafeSpace",
//   description: "Anonymous mental health check-in platform"
// };

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  const showNavbar = pathname !== "/login"; // hide navbar on login
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", margin: 0, backgroundColor: "#F2F0EF" }}>
        <SessionProvider>
        {/* Crisis Banner */}
        <div
          style={{
            backgroundColor: "#ffe5e5",
            padding: "10px",
            textAlign: "center",
            fontSize: "14px"
          }}
        >
          If you are in immediate danger, contact 995 for SCDF Ambulance and Fire Service.
        </div>

        {/* Navigation */}
        {showNavbar && <Navbar />} {/* Only show if not login */}

        {/* Page Content */}
        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
          {children}
        </main>

        {/* Footer */}
        <footer
          style={{
            padding: "20px",
            textAlign: "center",
            fontSize: "12px",
            color: "#777",
            borderTop: "1px solid #eee"
          }}
        >
          SafeSpace is a support tool and not a replacement for professional medical help.
        </footer>
        </SessionProvider>
      </body>
    </html>
  );
}
