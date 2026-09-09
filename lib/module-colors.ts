import type { ProcessModule } from "@/data/processes";

/**
 * Single source of truth for AWP module badge / card colours.
 *
 * bg     — pill / card background
 * text   — label text
 * border — ring / border
 * accent — solid fill for dark-background badges
 */
export interface ModuleColor {
  bg: string;
  text: string;
  border: string;
  accent: string;
}

export const MODULE_COLORS: Record<ProcessModule, ModuleColor> = {
  PP:   { bg: "#E8F0E4", text: "#1C3A2B", border: "#C8DFC5", accent: "#1C3A2B" },
  QM:   { bg: "#FEF9E7", text: "#7A5E0A", border: "#E8D585", accent: "#C49A1A" },
  MM:   { bg: "#E0EAF5", text: "#1E3A5F", border: "#B0CCE8", accent: "#2563EB" },
  PM:   { bg: "#EDE0F5", text: "#4A1F6B", border: "#CAA8E8", accent: "#7C3AED" },
  SD:   { bg: "#E0F4F8", text: "#0C4A6E", border: "#7DD3FC", accent: "#0284C7" },
  HCM:  { bg: "#FDE8E0", text: "#7A2C1A", border: "#F5B8A4", accent: "#DC2626" },
  FICO: { bg: "#E0F5EC", text: "#14532D", border: "#86EFAC", accent: "#16A34A" },
  TM:   { bg: "#FFF7E0", text: "#7A4A0A", border: "#F5C87A", accent: "#D97706" },
  EHS:  { bg: "#F0E0E8", text: "#6B1F40", border: "#E8A4C0", accent: "#BE185D" },
};

/** Fallback for modules not in the canonical list (e.g. "PP/QM" combined). */
export const MODULE_COLOR_FALLBACK: ModuleColor = {
  bg: "#EDE9E1",
  text: "#4A5568",
  border: "#D9D4C8",
  accent: "#6B7280",
};

export function getModuleColor(module: string): ModuleColor {
  return (MODULE_COLORS as Record<string, ModuleColor>)[module] ?? MODULE_COLOR_FALLBACK;
}
