import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AWP Central Learning Hub — SAP S/4HANA",
  description:
    "Your central training dashboard for SAP S/4HANA at Al-Watania Poultry. Access learning paths, T-code logbook, business process docs, and knowledge quizzes — all in one place.",
};

export default function HubLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
