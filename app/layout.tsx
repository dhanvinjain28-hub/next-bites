// app/layout.tsx
import React from "react";

export const metadata = {
  title: "NextBites",
  description: "Recipe Discovery App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        <nav
          style={{
            padding: "1rem 2rem",
            backgroundColor: "#1a1a1a",
            color: "#ffffff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0 }}>NextBites 🍕</h2>
        </nav>
        {children}
      </body>
    </html>
  );
}