"use client";

/**
 * CertificateModal — shows a print-ready CertificateCard for a completed process.
 * The card is pure HTML/CSS/SVG (no canvas), exported via window.print().
 * The user's name is stored in localStorage under 'awp-cert-name'.
 */

import { useRef, useState, useEffect } from "react";
import { type Process } from "@/data/processes";
import { CertificateCard } from "./CertificateCard";

const STORAGE_KEY = "awp-cert-name";

interface Props {
  process: Process;
  completedDate: string;
  lang: "EN" | "AR";
  onClose: () => void;
}

function formatDateDisplay(iso: string): string {
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

export function CertificateModal({ process: p, completedDate, lang, onClose }: Props) {
  const isAR = lang === "AR";
  const [name, setName] = useState("");
  const cardRef = useRef<HTMLDivElement>(null);

  // ── Load saved name ───────────────────────────────────────────────────────
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setName(saved);
    } catch {}
  }, []);

  function saveName(n: string) {
    setName(n);
    try {
      localStorage.setItem(STORAGE_KEY, n);
    } catch {}
  }

  // ── PDF download via print dialog ─────────────────────────────────────────
  function downloadPDF() {
    if (!cardRef.current) return;

    const certHTML = cardRef.current.outerHTML;
    const title = isAR ? p.titleAR : p.titleEN;

    const win = window.open("", "_blank");
    if (!win) return;

    win.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Al-Watania Poultry Certificate – ${title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: 100%; height: 100%;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .cert-wrapper {
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
    }
    /* Force the certificate card to fill the print area exactly */
    .cert-wrapper > div {
      width: 100% !important;
      height: 100% !important;
      aspect-ratio: unset !important;
      border-radius: 0 !important;
      border: none !important;
    }
    @page {
      size: A4 landscape;
      margin: 0;
    }
    @media print {
      html, body {
        width: 297mm;
        height: 210mm;
        overflow: hidden;
      }
      .cert-wrapper {
        width: 297mm;
        height: 210mm;
      }
      .cert-wrapper > div {
        width: 297mm !important;
        height: 210mm !important;
      }
    }
  </style>
</head>
<body>
  <div class="cert-wrapper">${certHTML}</div>
  <script>
    window.addEventListener('load', function () {
      setTimeout(function () { window.print(); }, 600);
    });
  <\/script>
</body>
</html>`);
    win.document.close();
  }

  const processTitle = isAR ? p.titleAR : p.titleEN;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl flex flex-col max-w-[min(96vw,860px)] w-full max-h-[92vh] overflow-y-auto"
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
        <div
          className="px-5 pt-4 pb-3 shrink-0 bg-[#FAFAF8] border-b border-[#EDE9E1]"
          dir={isAR ? "rtl" : "ltr"}
        >
          <label className="block text-xs font-semibold text-[#6B7A6F] uppercase tracking-widest mb-1.5">
            {isAR ? "اسمك الكامل" : "Your Full Name"}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => saveName(e.target.value)}
            placeholder={
              isAR
                ? "أدخل اسمك كما سيظهر في الشهادة"
                : "Enter your name as it should appear on the certificate"
            }
            className="w-full text-sm border border-[#D9D4C8] rounded-xl px-3 py-2.5 bg-white focus:outline-none focus:border-[#4E7862] focus:ring-1 focus:ring-[#4E7862] transition-colors"
            dir={isAR ? "rtl" : "ltr"}
          />
          <p className="text-[11px] text-[#B0A896] mt-1.5">
            {isAR
              ? "يُحفظ تلقائياً لشهاداتك القادمة"
              : "Saved automatically for your next certificates"}
          </p>
        </div>

        {/* ── Certificate preview ── */}
        <div className="px-5 py-4 bg-[#F0EDE6]">
          <div className="rounded-xl overflow-hidden shadow-lg border border-[#D9D4C8]">
            <CertificateCard
              ref={cardRef}
              recipientName={name}
              courseName={processTitle}
              completionDate={completedDate}
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
