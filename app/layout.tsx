import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAP PP/QM Knowledge",
  description:
    "Structured reference guide for SAP Production Planning and Quality Management T-codes — definitions, integration flows, and process context.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
