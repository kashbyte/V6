import Navbar from "../components/Navbar";
import "./globals.css";
//import Home from "./homepage/page";

export const metadata = {
  title: "SafeSpace",
  description: "Anonymous mental health check-in platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "sans-serif",
          margin: 0,
          backgroundColor: "#f7ebdb",
        }}
      >
        {/* Crisis Banner */}
        <div
          style={{
            backgroundColor: "#ffe5e5",
            padding: "10px",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          If you are in immediate danger, contact 995 for SCDF Ambulance and
          Fire Service.
        </div>

        {/* Navigation */}
        <Navbar />

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
            borderTop: "1px solid #eee",
          }}
        >
          SafeSpace is a support tool and not a replacement for professional
          medical help.
        </footer>
      </body>
    </html>
  );
}
