"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Lang = "EN" | "AR";

interface LangContextValue {
  lang: Lang;
  toggle: () => void;
}

const LangContext = createContext<LangContextValue>({ lang: "EN", toggle: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      return (localStorage.getItem("pp-qm-lang") as Lang) || "EN";
    } catch { return "EN"; }
  });

  useEffect(() => {
    try { localStorage.setItem("pp-qm-lang", lang); } catch {}
    document.documentElement.setAttribute("dir", lang === "AR" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", lang === "AR" ? "ar" : "en");
  }, [lang]);

  function toggle() {
    setLang((l) => (l === "EN" ? "AR" : "EN"));
  }

  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
