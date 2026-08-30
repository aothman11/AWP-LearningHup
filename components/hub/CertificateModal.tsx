"use client";

/**
 * CertificateModal — generates and downloads an AWP Certificate of Completion
 * for a fully finished process.
 *
 * Renders a 1400×990 canvas at 2× density (2800×1980 px native), then
 * scales it down in CSS so the preview fits on screen.
 * Download exports the full-resolution PNG.
 *
 * The user's name is stored in localStorage under 'awp-cert-name'.
 */

import { useEffect, useRef, useState } from "react";
import { type Process } from "@/data/processes";

const STORAGE_KEY = "awp-cert-name";
const W = 1400;
const H = 990;
const DPR = 2; // render at 2× for sharp PNG

interface Props {
  process: Process;
  completedDate: string; // ISO string — when the last step was marked done
  lang: "EN" | "AR";
  onClose: () => void;
}

// ─── Drawing helpers ──────────────────────────────────────────────────────────

function drawRoundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
): number {
  const words = text.split(" ");
  let line = "";
  let currentY = y;
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, currentY);
      line = word;
      currentY += lineHeight;
    } else {
      line = test;
    }
  }
  if (line) ctx.fillText(line, x, currentY);
  return currentY;
}

function drawCertificate(
  canvas: HTMLCanvasElement,
  name: string,
  processTitle: string,
  completedDate: string
) {
  const s = DPR; // scale factor
  canvas.width = W * s;
  canvas.height = H * s;
  canvas.style.width = `${W}px`;
  canvas.style.height = `${H}px`;

  const ctx = canvas.getContext("2d")!;
  ctx.scale(s, s);

  // ── Background ──────────────────────────────────────────────────────────────
  ctx.fillStyle = "#FAFAF8";
  ctx.fillRect(0, 0, W, H);

  // ── Outer border (dark green) ───────────────────────────────────────────────
  ctx.strokeStyle = "#1C3A2B";
  ctx.lineWidth = 10;
  drawRoundRect(ctx, 14, 14, W - 28, H - 28, 18);
  ctx.stroke();

  // ── Inner border (gold) ─────────────────────────────────────────────────────
  ctx.strokeStyle = "#C49A1A";
  ctx.lineWidth = 2.5;
  drawRoundRect(ctx, 28, 28, W - 56, H - 56, 12);
  ctx.stroke();

  // ── Header band (dark green) ────────────────────────────────────────────────
  ctx.fillStyle = "#1C3A2B";
  drawRoundRect(ctx, 14, 14, W - 28, 140, 18);
  ctx.fill();
  // flatten bottom corners of header
  ctx.fillRect(14, 100, W - 28, 54);

  // ── AWP wordmark ────────────────────────────────────────────────────────────
  ctx.fillStyle = "#FFFFFF";
  ctx.textAlign = "center";
  ctx.font = "bold 52px Georgia, 'Times New Roman', serif";
  ctx.fillText("AWP", W / 2, 85);
  ctx.font = "16px Georgia, 'Times New Roman', serif";
  ctx.fillStyle = "#A8C4B0";
  ctx.fillText("AL-WATANIA POULTRY", W / 2, 112);

  // ── Gold star / seal emblem (top-right corner) ──────────────────────────────
  const ex = W - 90;
  const ey = 80;
  const er = 44;
  ctx.save();
  ctx.translate(ex, ey);
  // Starburst
  const points = 8;
  ctx.fillStyle = "#C49A1A";
  ctx.beginPath();
  for (let i = 0; i < points * 2; i++) {
    const angle = (i * Math.PI) / points - Math.PI / 2;
    const r = i % 2 === 0 ? er : er * 0.6;
    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
  // Inner circle
  ctx.fillStyle = "#1C3A2B";
  ctx.beginPath();
  ctx.arc(0, 0, er * 0.42, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#C49A1A";
  ctx.font = "bold 13px Georgia, serif";
  ctx.textAlign = "center";
  ctx.fillText("AWP", 0, 4);
  ctx.restore();

  // ── "CERTIFICATE OF COMPLETION" ─────────────────────────────────────────────
  ctx.textAlign = "center";
  ctx.fillStyle = "#1C3A2B";
  ctx.font = "bold 34px Georgia, 'Times New Roman', serif";
  ctx.letterSpacing = "3px";
  ctx.fillText("CERTIFICATE OF COMPLETION", W / 2, 220);
  ctx.letterSpacing = "0px";

  // Gold rule under title
  const ruleW = 560;
  const grad = ctx.createLinearGradient(W / 2 - ruleW / 2, 0, W / 2 + ruleW / 2, 0);
  grad.addColorStop(0, "rgba(196,154,26,0)");
  grad.addColorStop(0.3, "#C49A1A");
  grad.addColorStop(0.7, "#C49A1A");
  grad.addColorStop(1, "rgba(196,154,26,0)");
  ctx.strokeStyle = grad;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(W / 2 - ruleW / 2, 236);
  ctx.lineTo(W / 2 + ruleW / 2, 236);
  ctx.stroke();

  // ── "This Certifies that" ───────────────────────────────────────────────────
  ctx.fillStyle = "#6B7A6F";
  ctx.font = "italic 20px Georgia, 'Times New Roman', serif";
  ctx.fillText("This Certifies that", W / 2, 292);

  // ── Recipient name ──────────────────────────────────────────────────────────
  const displayName = name.trim() || "Employee Name";
  ctx.fillStyle = "#1C3A2B";
  ctx.font = "italic bold 58px Georgia, 'Times New Roman', serif";
  ctx.fillText(displayName, W / 2, 385);

  // Underline beneath name
  const nm = ctx.measureText(displayName);
  const nw = Math.min(nm.width + 40, 700);
  ctx.strokeStyle = "#C49A1A";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(W / 2 - nw / 2, 400);
  ctx.lineTo(W / 2 + nw / 2, 400);
  ctx.stroke();

  // ── Body text ───────────────────────────────────────────────────────────────
  ctx.fillStyle = "#2A2E2B";
  ctx.font = "22px Georgia, 'Times New Roman', serif";
  ctx.fillText("Has Successfully Completed the", W / 2, 460);

  // Process title (bold, possibly long — wrap if needed)
  ctx.fillStyle = "#1C3A2B";
  ctx.font = "bold 30px Georgia, 'Times New Roman', serif";
  const titleMetrics = ctx.measureText(processTitle);
  if (titleMetrics.width > 800) {
    wrapText(ctx, processTitle, W / 2, 508, 820, 38);
  } else {
    ctx.fillText(processTitle, W / 2, 508);
  }

  ctx.fillStyle = "#2A2E2B";
  ctx.font = "22px Georgia, 'Times New Roman', serif";
  ctx.fillText("SAP PP/QM Guided Onboarding Program", W / 2, 560);

  // ── Decorative divider ──────────────────────────────────────────────────────
  ctx.strokeStyle = "#EDE9E1";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(100, 620);
  ctx.lineTo(W - 100, 620);
  ctx.stroke();
  // small diamond in the middle
  ctx.save();
  ctx.translate(W / 2, 620);
  ctx.rotate(Math.PI / 4);
  ctx.fillStyle = "#C49A1A";
  ctx.fillRect(-5, -5, 10, 10);
  ctx.restore();

  // ── Footer columns ──────────────────────────────────────────────────────────
  const footerY = 720;
  const col1x = 220;
  const col2x = W - 220;

  // Left: signature line
  ctx.strokeStyle = "#1C3A2B";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(col1x - 120, footerY);
  ctx.lineTo(col1x + 120, footerY);
  ctx.stroke();
  ctx.fillStyle = "#6B7A6F";
  ctx.font = "14px Georgia, serif";
  ctx.fillText("Authorized Signature", col1x, footerY + 22);

  // Right: date column
  ctx.strokeStyle = "#1C3A2B";
  ctx.beginPath();
  ctx.moveTo(col2x - 120, footerY);
  ctx.lineTo(col2x + 120, footerY);
  ctx.stroke();
  ctx.fillStyle = "#1C3A2B";
  ctx.font = "bold 18px Georgia, serif";
  ctx.fillText(formatDate(completedDate), col2x, footerY - 14);
  ctx.fillStyle = "#6B7A6F";
  ctx.font = "14px Georgia, serif";
  ctx.fillText("Date of Completion", col2x, footerY + 22);

  // ── AWP Program watermark (very faint) ─────────────────────────────────────
  ctx.save();
  ctx.globalAlpha = 0.04;
  ctx.fillStyle = "#1C3A2B";
  ctx.font = "bold 180px Georgia, serif";
  ctx.textAlign = "center";
  ctx.fillText("AWP", W / 2, H / 2 + 70);
  ctx.restore();

  // ── Bottom attribution ──────────────────────────────────────────────────────
  ctx.fillStyle = "#B0A896";
  ctx.font = "13px Georgia, serif";
  ctx.textAlign = "center";
  ctx.fillText("Al-Watania Poultry · SAP Learning Hub · awp-learninghub.vercel.app", W / 2, H - 40);
}

// ─── Component ───────────────────────────────────────────────────────────────

export function CertificateModal({ process: p, completedDate, lang, onClose }: Props) {
  const isAR = lang === "AR";
  const [name, setName] = useState("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Load saved name
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setName(saved);
    } catch {}
  }, []);

  // Re-draw whenever name changes
  useEffect(() => {
    if (!canvasRef.current) return;
    const title = isAR ? p.titleAR : p.titleEN;
    drawCertificate(canvasRef.current, name, title, completedDate);
  }, [name, p, completedDate, isAR]);

  function saveName(n: string) {
    setName(n);
    try { localStorage.setItem(STORAGE_KEY, n); } catch {}
  }

  function download() {
    if (!canvasRef.current) return;
    const title = isAR ? p.titleAR : p.titleEN;
    drawCertificate(canvasRef.current, name, title, completedDate);
    const link = document.createElement("a");
    link.download = `AWP-Certificate-${title.replace(/[\s/]+/g, "-")}.png`;
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl flex flex-col max-w-[min(96vw,720px)] w-full max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#EDE9E1] shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xl">🏆</span>
            <h3 className="text-sm font-semibold text-[#1C3A2B]">
              {isAR ? "شهادة الإتمام" : "Certificate of Completion"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#6B7A6F] hover:text-[#1C3A2B] text-xl leading-none transition-colors"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Name input */}
        <div className="px-5 pt-4 pb-3 shrink-0" dir={isAR ? "rtl" : "ltr"}>
          <label className="block text-xs font-semibold text-[#6B7A6F] uppercase tracking-widest mb-1.5">
            {isAR ? "اسمك الكامل" : "Your Full Name"}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => saveName(e.target.value)}
            placeholder={isAR ? "أدخل اسمك" : "Enter your name"}
            className="w-full text-sm border border-[#D9D4C8] rounded-xl px-3 py-2.5 bg-[#FAFAF8] focus:outline-none focus:border-[#4E7862] focus:ring-1 focus:ring-[#4E7862] transition-colors"
            dir={isAR ? "rtl" : "ltr"}
          />
          <p className="text-[11px] text-[#B0A896] mt-1">
            {isAR ? "يُحفظ تلقائياً لشهاداتك القادمة" : "Saved automatically for your next certificates"}
          </p>
        </div>

        {/* Certificate preview */}
        <div className="px-5 pb-3 overflow-y-auto flex-1 min-h-0">
          <div className="rounded-xl overflow-hidden border border-[#EDE9E1] shadow-sm">
            <canvas
              ref={canvasRef}
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                background: "#FAFAF8",
              }}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="px-5 pb-5 flex items-center gap-3 shrink-0" dir={isAR ? "rtl" : "ltr"}>
          <button
            onClick={download}
            className="flex-1 bg-[#1C3A2B] text-white text-sm font-medium px-5 py-3 rounded-xl hover:bg-[#2D5A42] transition-colors flex items-center justify-center gap-2"
          >
            ⬇ {isAR ? "تنزيل PNG" : "Download PNG"}
          </button>
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl border border-[#D9D4C8] text-sm text-[#6B7A6F] hover:text-[#1C3A2B] hover:border-[#1C3A2B] transition-colors"
          >
            {isAR ? "إغلاق" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}
