import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";
import { ResearchDrawer } from "@/components/ResearchDrawer";

export const metadata: Metadata = {
  title: "SAP PP/QM Knowledge",
  description:
    "Structured reference guide for SAP Production Planning and Quality Management T-codes — definitions, integration flows, and process context.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LangProvider>{children}</LangProvider>
        <ResearchDrawer />
      </body>
    </html>
  );
}
