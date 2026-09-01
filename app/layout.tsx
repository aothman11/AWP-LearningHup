import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";
import { ResearchDrawer } from "@/components/ResearchDrawer";

export const metadata: Metadata = {
  title: "AWP SAP Central Learning Hub",
  description:
    "AWP SAP Central Learning Hub — structured SAP PP/QM training for Al-Watania Poultry. Category-based process guides, T-code reference, knowledge quizzes, and role-based learning paths.",
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
