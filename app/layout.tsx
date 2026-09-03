import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";
import { ResearchDrawer } from "@/components/ResearchDrawer";

export const metadata: Metadata = {
  title: {
    default: "AWP Central Learning Hub",
    template: "%s",
  },
  description:
    "AWP Central Learning Hub — role-based learning paths, T-code reference, progress tracking, and process guides for Al-Watania Poultry SAP S/4HANA.",
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
