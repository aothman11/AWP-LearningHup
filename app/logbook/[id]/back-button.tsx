"use client";

import { useRouter } from "next/navigation";

interface BackButtonProps {
  fallbackHref: string;
  label: string;
  className?: string;
}

/**
 * Smart back button: uses router.back() so the user returns to wherever
 * they came from (Hub deep-dive, Logbook list, etc.), and falls back to
 * `fallbackHref` if there is no browser history entry (e.g. direct URL).
 */
export function BackButton({ fallbackHref, label, className = "" }: BackButtonProps) {
  const router = useRouter();

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  }

  return (
    <a href={fallbackHref} onClick={handleClick} className={className}>
      {label}
    </a>
  );
}
