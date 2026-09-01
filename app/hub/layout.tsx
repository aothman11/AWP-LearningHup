import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Hub — AWP SAP PP/QM",
  description:
    "Your central training dashboard for SAP PP/QM at Al-Watania Poultry. Access learning paths, T-code logbook, business process docs, and knowledge quizzes — all in one place.",
};

export default function HubLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
