import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";
import { ResearchDrawer } from "@/components/ResearchDrawer";

export const metadata: Metadata = {
  title: "AWP Central Learning Hub",
  description:
    "AWP-aligned learning hub for SAP PP/QM — role-based learning paths, T-code reference, progress tracking, and process flows for Advanced Work Packaging.",
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
