"use client";

/**
 * CertificateModal — generates and downloads an AWP Certificate of Completion
 * for a fully finished process.
 *
 * Renders a 1400×990 canvas at 2× density (2800×1980 px native).
 * Download exports as PDF (via browser print dialog → Save as PDF).
 * The user's name is stored in localStorage under 'awp-cert-name'.
 */

import { useEffect, useRef, useState } from "react";
import { type Process } from "@/data/processes";

const STORAGE_KEY = "awp-cert-name";
const W = 1400;
const H = 990;
const DPR = 2;

// Brand colours
const GREEN_DARK  = "#1C3A2B";
const GREEN_MID   = "#2D5A42";
const GREEN_LIGHT = "#4E7862";
const GOLD        = "#C49A1A";
const GOLD_LIGHT  = "#E2C060";
const CREAM       = "#FAFAF8";
const MUTED       = "#6B7A6F";
const BODY        = "#2A2E2B";

interface Props {
  process: Process;
  completedDate: string;
  lang: "EN" | "AR";
  onClose: () => void;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Cross-browser rounded rect path (ctx.roundRect not available in older Safari/FF) */
function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number,
  r: number | [number, number, number, number]
) {
  const [tl, tr, br, bl] = Array.isArray(r)
    ? r
    : [r, r, r, r];
  ctx.beginPath();
  ctx.moveTo(x + tl, y);
  ctx.lineTo(x + w - tr, y);
  ctx.quadraticCurveTo(x + w, y,       x + w, y + tr);
  ctx.lineTo(x + w, y + h - br);
  ctx.quadraticCurveTo(x + w, y + h,   x + w - br, y + h);
  ctx.lineTo(x + bl, y + h);
  ctx.quadraticCurveTo(x, y + h,       x, y + h - bl);
  ctx.lineTo(x, y + tl);
  ctx.quadraticCurveTo(x, y,           x + tl, y);
  ctx.closePath();
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "numeric", month: "long", year: "numeric",
    });
  } catch { return iso; }
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string, x: number, y: number,
  maxWidth: number, lineHeight: number
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
    } else { line = test; }
  }
  if (line) ctx.fillText(line, x, currentY);
  return currentY;
}

function goldRule(ctx: CanvasRenderingContext2D, cx: number, y: number, halfW: number) {
  const g = ctx.createLinearGradient(cx - halfW, 0, cx + halfW, 0);
  g.addColorStop(0, "rgba(196,154,26,0)");
  g.addColorStop(0.25, GOLD);
  g.addColorStop(0.75, GOLD);
  g.addColorStop(1, "rgba(196,154,26,0)");
  ctx.save();
  ctx.strokeStyle = g;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(cx - halfW, y);
  ctx.lineTo(cx + halfW, y);
  ctx.stroke();
  ctx.restore();
}

/** Small rotated diamond centered at (cx, cy) */
function diamond(ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number, color: string) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.translate(cx, cy);
  ctx.rotate(Math.PI / 4);
  ctx.fillRect(-size / 2, -size / 2, size, size);
  ctx.restore();
}

/** Corner filigree ornament — four thin lines + diamond tip */
function cornerOrnament(
  ctx: CanvasRenderingContext2D,
  x: number, y: number,
  dirX: 1 | -1, dirY: 1 | -1
) {
  ctx.save();
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = 1.2;
  ctx.globalAlpha = 0.85;

  const arm = 48;
  const gap = 7;

  // Horizontal bar
  ctx.beginPath();
  ctx.moveTo(x + dirX * gap, y);
  ctx.lineTo(x + dirX * (gap + arm), y);
  ctx.stroke();

  // Vertical bar
  ctx.beginPath();
  ctx.moveTo(x, y + dirY * gap);
  ctx.lineTo(x, y + dirY * (gap + arm));
  ctx.stroke();

  // Short inner cross
  ctx.lineWidth = 0.8;
  ctx.beginPath();
  ctx.moveTo(x + dirX * (gap + arm * 0.55), y - 12);
  ctx.lineTo(x + dirX * (gap + arm * 0.55), y + 12);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x - 12, y + dirY * (gap + arm * 0.55));
  ctx.lineTo(x + 12, y + dirY * (gap + arm * 0.55));
  ctx.stroke();

  // Corner dot
  diamond(ctx, x + dirX * gap / 2, y + dirY * gap / 2, 5, GOLD);

  ctx.restore();
}

/** Programmatic AWP leaf logo (fallback when image is unavailable) */
function drawAWPLogo(ctx: CanvasRenderingContext2D, cx: number, cy: number) {
  ctx.save();
  ctx.translate(cx, cy);

  ctx.fillStyle = "#2E9637";
  ctx.beginPath();
  ctx.moveTo(-130, 20); ctx.bezierCurveTo(-120, -55, 0, -70, 100, -30);
  ctx.bezierCurveTo(140, -10, 140, 50, 100, 60);
  ctx.bezierCurveTo(40, 80, -60, 75, -130, 20);
  ctx.closePath(); ctx.fill();

  ctx.fillStyle = "#45B550";
  ctx.beginPath();
  ctx.moveTo(-90, 10); ctx.bezierCurveTo(-80, -35, 20, -50, 80, -20);
  ctx.bezierCurveTo(110, -5, 100, 30, 60, 42);
  ctx.bezierCurveTo(10, 55, -50, 48, -90, 10);
  ctx.closePath(); ctx.fill();

  ctx.fillStyle = GOLD;
  ctx.beginPath();
  ctx.moveTo(-130, 20); ctx.bezierCurveTo(-120, 55, -60, 75, 0, 70);
  ctx.bezierCurveTo(-20, 60, -80, 50, -130, 20);
  ctx.closePath(); ctx.fill();

  ctx.fillStyle = "#1C6B28";
  ctx.beginPath();
  ctx.moveTo(100, 60); ctx.bezierCurveTo(120, 50, 150, 30, 140, -10);
  ctx.bezierCurveTo(155, 10, 145, 55, 100, 60);
  ctx.closePath(); ctx.fill();

  ctx.fillStyle = "rgba(255,255,255,0.92)";
  ctx.textAlign = "center";
  ctx.font = "bold 18px Arial, sans-serif";
  ctx.fillText("دواجن", -10, -8);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 36px Arial, sans-serif";
  ctx.fillText("الوطنية", -10, 35);
  ctx.restore();
}

// ─── Main draw function (async — loads logo image) ────────────────────────────

async function drawCertificate(
  canvas: HTMLCanvasElement,
  name: string,
  processTitle: string,
  completedDate: string
) {
  const s = DPR;
  canvas.width  = W * s;
  canvas.height = H * s;
  canvas.style.width  = "100%";
  canvas.style.height = "auto";

  const ctx = canvas.getContext("2d")!;
  ctx.scale(s, s);

  // ── Try to load the real logo ─────────────────────────────────────────────
  const logo = await new Promise<HTMLImageElement | null>((resolve) => {
    const img = new Image();
    img.onload  = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = "/alwatania-logo-white.png";
  });

  // ── 1. Background ────────────────────────────────────────────────────────
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, W, H);

  // ── 2. Outer border (dark green) ─────────────────────────────────────────
  ctx.save();
  ctx.strokeStyle = GREEN_DARK;
  ctx.lineWidth = 10;
  roundRect(ctx, 12, 12, W - 24, H - 24, 20);
  ctx.stroke();
  ctx.restore();

  // ── 3. Inner border (gold) ───────────────────────────────────────────────
  ctx.save();
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = 2;
  roundRect(ctx, 26, 26, W - 52, H - 52, 14);
  ctx.stroke();
  ctx.restore();

  // ── 4. Second inner border (thin cream) ──────────────────────────────────
  ctx.save();
  ctx.strokeStyle = "rgba(196,154,26,0.3)";
  ctx.lineWidth = 1;
  roundRect(ctx, 34, 34, W - 68, H - 68, 10);
  ctx.stroke();
  ctx.restore();

  // ── 5. Corner ornaments ──────────────────────────────────────────────────
  cornerOrnament(ctx, 50, 50,   1,  1);   // top-left
  cornerOrnament(ctx, W - 50, 50,   -1,  1);   // top-right
  cornerOrnament(ctx, 50, H - 50,  1, -1);   // bottom-left
  cornerOrnament(ctx, W - 50, H - 50, -1, -1);   // bottom-right

  // ── 6. Header band ───────────────────────────────────────────────────────
  const headerH = 180;
  ctx.save();
  // Gradient: slightly lighter at centre
  const hg = ctx.createLinearGradient(0, 0, W, 0);
  hg.addColorStop(0,   GREEN_DARK);
  hg.addColorStop(0.5, GREEN_MID);
  hg.addColorStop(1,   GREEN_DARK);
  ctx.fillStyle = hg;
  roundRect(ctx, 12, 12, W - 24, headerH, [20, 20, 0, 0]);
  ctx.fill();
  ctx.restore();

  // Header gold bottom line
  ctx.save();
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(26, 12 + headerH);
  ctx.lineTo(W - 26, 12 + headerH);
  ctx.stroke();
  // thin cream line just above gold
  ctx.strokeStyle = "rgba(255,255,255,0.15)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(26, 12 + headerH - 4);
  ctx.lineTo(W - 26, 12 + headerH - 4);
  ctx.stroke();
  ctx.restore();

  // ── 7. Logo in header ────────────────────────────────────────────────────
  const logoCY = 12 + headerH / 2 - 14;   // vertical centre of logo area
  if (logo) {
    const logoH = 100;
    const logoW = logo.naturalWidth * (logoH / logo.naturalHeight);
    ctx.drawImage(logo, W / 2 - logoW / 2, logoCY - logoH / 2, logoW, logoH);
  } else {
    drawAWPLogo(ctx, W / 2, logoCY);
  }

  // Org name below logo inside header
  ctx.save();
  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(255,255,255,0.65)";
  ctx.font = "600 13px 'Helvetica Neue', Arial, sans-serif";
  ctx.letterSpacing = "3px";
  ctx.fillText("AL-WATANIA POULTRY  ·  SAP LEARNING HUB", W / 2, 12 + headerH - 18);
  ctx.letterSpacing = "0px";
  ctx.restore();

  // ── 8. "CERTIFICATE OF COMPLETION" ───────────────────────────────────────
  const CX = W / 2;
  ctx.save();
  ctx.textAlign = "center";
  ctx.fillStyle = GREEN_DARK;
  ctx.font = "bold 36px 'Palatino Linotype', Palatino, 'Book Antiqua', Georgia, serif";
  ctx.letterSpacing = "5px";
  ctx.fillText("CERTIFICATE OF COMPLETION", CX, 245);
  ctx.letterSpacing = "0px";
  ctx.restore();

  // Gold accent rules flanking title
  goldRule(ctx, CX, 260, 340);

  // Small gold diamonds on rule
  diamond(ctx, CX, 260, 7, GOLD);
  diamond(ctx, CX - 340, 260, 4, GOLD_LIGHT);
  diamond(ctx, CX + 340, 260, 4, GOLD_LIGHT);

  // ── 9. "This is to certify that" ─────────────────────────────────────────
  ctx.save();
  ctx.textAlign = "center";
  ctx.fillStyle = MUTED;
  ctx.font = "italic 20px 'Palatino Linotype', Palatino, Georgia, serif";
  ctx.fillText("This is to certify that", CX, 316);
  ctx.restore();

  // ── 10. Recipient name ───────────────────────────────────────────────────
  const displayName = name.trim() || "Employee Name";
  ctx.save();
  ctx.textAlign = "center";

  // Subtle name glow
  ctx.shadowColor = "rgba(28,58,43,0.08)";
  ctx.shadowBlur = 12;

  ctx.fillStyle = GREEN_DARK;
  ctx.font = "italic 62px 'Palatino Linotype', Palatino, 'Book Antiqua', Georgia, serif";
  ctx.fillText(displayName, CX, 408);
  ctx.shadowBlur = 0;
  ctx.restore();

  // Underline below name
  const nm = ctx.measureText(displayName);
  ctx.font = "italic 62px 'Palatino Linotype', Palatino, 'Book Antiqua', Georgia, serif";
  ctx.textAlign = "center";
  const nw = Math.min(nm.width + 60, 720);
  const ng = ctx.createLinearGradient(CX - nw / 2, 0, CX + nw / 2, 0);
  ng.addColorStop(0,   "rgba(196,154,26,0)");
  ng.addColorStop(0.2, GOLD);
  ng.addColorStop(0.8, GOLD);
  ng.addColorStop(1,   "rgba(196,154,26,0)");
  ctx.save();
  ctx.strokeStyle = ng;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(CX - nw / 2, 425);
  ctx.lineTo(CX + nw / 2, 425);
  ctx.stroke();
  ctx.restore();

  // ── 11. Body text ─────────────────────────────────────────────────────────
  ctx.save();
  ctx.textAlign = "center";
  ctx.fillStyle = BODY;
  ctx.font = "20px 'Palatino Linotype', Palatino, Georgia, serif";
  ctx.fillText("has successfully completed", CX, 480);
  ctx.restore();

  // Process title
  ctx.save();
  ctx.textAlign = "center";
  ctx.fillStyle = GREEN_DARK;
  ctx.font = "bold 30px 'Palatino Linotype', Palatino, Georgia, serif";
  const titleW = ctx.measureText(processTitle).width;
  const lastTitleY = titleW > 820
    ? wrapText(ctx, processTitle, CX, 528, 840, 40)
    : (ctx.fillText(processTitle, CX, 528), 528);
  ctx.restore();

  // Program label
  ctx.save();
  ctx.textAlign = "center";
  ctx.fillStyle = GREEN_LIGHT;
  ctx.font = "italic 19px 'Palatino Linotype', Palatino, Georgia, serif";
  ctx.fillText("as part of the SAP PP/QM Guided Onboarding Program", CX, lastTitleY + 58);
  ctx.restore();

  // ── 12. Divider ornament ──────────────────────────────────────────────────
  const divY = lastTitleY + 108;
  ctx.save();
  ctx.strokeStyle = "#EDE9E1";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(80, divY);
  ctx.lineTo(W - 80, divY);
  ctx.stroke();
  ctx.restore();

  // Three diamonds along divider
  diamond(ctx, CX,        divY, 8, GOLD);
  diamond(ctx, CX - 26,   divY, 4, GOLD_LIGHT);
  diamond(ctx, CX + 26,   divY, 4, GOLD_LIGHT);

  // ── 13. Footer (3 columns) ────────────────────────────────────────────────
  const footerY = divY + 100;
  const col1x = 210;
  const col3x = W - 210;

  // Column helper
  function footerCol(x: number, value: string, label: string, bold = false) {
    ctx.save();
    ctx.textAlign = "center";
    // Signature line
    ctx.strokeStyle = GREEN_DARK;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x - 110, footerY);
    ctx.lineTo(x + 110, footerY);
    ctx.stroke();
    // Value above line
    ctx.fillStyle = bold ? GREEN_DARK : BODY;
    ctx.font = bold
      ? `bold 18px 'Palatino Linotype', Palatino, Georgia, serif`
      : `italic 18px 'Palatino Linotype', Palatino, Georgia, serif`;
    ctx.fillText(value, x, footerY - 14);
    // Label below line
    ctx.fillStyle = MUTED;
    ctx.font = "13px 'Helvetica Neue', Arial, sans-serif";
    ctx.fillText(label, x, footerY + 22);
    ctx.restore();
  }

  footerCol(col1x, "SAP PP/QM Program", "Authorized Signature", false);
  footerCol(col3x, formatDate(completedDate), "Date of Completion", true);

  // Centre column — small seal / programme badge
  ctx.save();
  ctx.translate(CX, footerY - 10);

  // Outer ring
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(0, 0, 44, 0, Math.PI * 2);
  ctx.stroke();

  // Inner fill
  const sf = ctx.createRadialGradient(0, 0, 10, 0, 0, 44);
  sf.addColorStop(0, GREEN_MID);
  sf.addColorStop(1, GREEN_DARK);
  ctx.fillStyle = sf;
  ctx.beginPath();
  ctx.arc(0, 0, 42, 0, Math.PI * 2);
  ctx.fill();

  // Tick
  ctx.strokeStyle = GOLD_LIGHT;
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(-16, 2);
  ctx.lineTo(-5,  14);
  ctx.lineTo(18, -14);
  ctx.stroke();

  ctx.restore();

  // ── 14. Watermark ─────────────────────────────────────────────────────────
  ctx.save();
  ctx.globalAlpha = 0.035;
  ctx.translate(CX, H / 2 + 30);
  ctx.rotate(-0.06);
  ctx.fillStyle = GREEN_DARK;
  ctx.textAlign = "center";

  ctx.font = `bold 110px 'Palatino Linotype', Palatino, Georgia, serif`;
  ctx.fillText("Al-Watania Poultry", 0, -20);

  ctx.font = `bold 72px Arial, sans-serif`;
  ctx.fillText("الوطنية للدواجن", 0, 76);
  ctx.restore();

  // ── 15. Bottom attribution ────────────────────────────────────────────────
  ctx.save();
  ctx.textAlign = "center";
  ctx.fillStyle = "#B0A896";
  ctx.font = "12px 'Helvetica Neue', Arial, sans-serif";
  ctx.fillText(
    "Al-Watania Poultry  ·  SAP PP/QM Learning Hub  ·  awp-learninghub.vercel.app",
    CX, H - 36
  );
  ctx.restore();
}

// ─── Component ────────────────────────────────────────────────────────────────

export function CertificateModal({ process: p, completedDate, lang, onClose }: Props) {
  const isAR = lang === "AR";
  const [name, setName] = useState("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setName(saved);
    } catch {}
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    const title = isAR ? p.titleAR : p.titleEN;
    void drawCertificate(canvasRef.current, name, title, completedDate);
  }, [name, p, completedDate, isAR]);

  function saveName(n: string) {
    setName(n);
    try { localStorage.setItem(STORAGE_KEY, n); } catch {}
  }

  async function downloadPDF() {
    if (!canvasRef.current) return;
    const title = isAR ? p.titleAR : p.titleEN;
    await drawCertificate(canvasRef.current, name, title, completedDate);
    const dataURL = canvasRef.current.toDataURL("image/png");

    const win = window.open("", "_blank");
    if (!win) return;
    win.document.write(`<!DOCTYPE html>
<html><head>
<title>Al-Watania Poultry Certificate – ${title}</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body {
    width: 100%; height: 100%;
    overflow: hidden;
    background: #fff;
  }
  img {
    display: block;
    width: 100vw;
    height: 100vh;
    object-fit: contain;
  }
  @page { size: A4 landscape; margin: 0; }
  @media print {
    html, body { width: 100%; height: 100%; overflow: hidden; }
    img {
      width: 100%;
      height: 100vh;
      max-height: 100vh;
      object-fit: contain;
      page-break-after: avoid;
      page-break-before: avoid;
      page-break-inside: avoid;
    }
  }
</style>
</head><body>
<img src="${dataURL}" alt="Al-Watania Poultry Certificate" />
<script>window.addEventListener('load', () => { setTimeout(() => { window.print(); }, 400); });<\/script>
</body></html>`);
    win.document.close();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl flex flex-col max-w-[min(96vw,820px)] w-full max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Modal header ── */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#EDE9E1] sticky top-0 bg-white z-10">
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

        {/* ── Name input ── */}
        <div className="px-5 pt-4 pb-3 shrink-0 bg-[#FAFAF8] border-b border-[#EDE9E1]" dir={isAR ? "rtl" : "ltr"}>
          <label className="block text-xs font-semibold text-[#6B7A6F] uppercase tracking-widest mb-1.5">
            {isAR ? "اسمك الكامل" : "Your Full Name"}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => saveName(e.target.value)}
            placeholder={isAR ? "أدخل اسمك كما سيظهر في الشهادة" : "Enter your name as it should appear on the certificate"}
            className="w-full text-sm border border-[#D9D4C8] rounded-xl px-3 py-2.5 bg-white focus:outline-none focus:border-[#4E7862] focus:ring-1 focus:ring-[#4E7862] transition-colors"
            dir={isAR ? "rtl" : "ltr"}
          />
          <p className="text-[11px] text-[#B0A896] mt-1.5">
            {isAR ? "يُحفظ تلقائياً لشهاداتك القادمة" : "Saved automatically for your next certificates"}
          </p>
        </div>

        {/* ── Certificate preview ── */}
        <div className="px-5 py-4 bg-[#F0EDE6]">
          <div className="rounded-xl overflow-hidden shadow-lg border border-[#D9D4C8]">
            <canvas
              ref={canvasRef}
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* ── Actions ── */}
        <div
          className="px-5 pb-5 pt-3 flex items-center gap-3 sticky bottom-0 bg-white border-t border-[#EDE9E1]"
          dir={isAR ? "rtl" : "ltr"}
        >
          <button
            onClick={downloadPDF}
            className="flex-1 bg-[#1C3A2B] text-white text-sm font-medium px-5 py-3 rounded-xl hover:bg-[#2D5A42] transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            📄 {isAR ? "تنزيل PDF" : "Download PDF"}
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
