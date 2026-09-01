import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AWP SAP Central Learning Hub",
  description:
    "Your central SAP training dashboard at Al-Watania Poultry. Browse AWP process categories, deep-dive T-code reference, knowledge quizzes, and role-based learning paths — all in one place.",
};

export default function HubLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
