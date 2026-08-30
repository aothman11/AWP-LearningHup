"use client";

/**
 * CertificateCard — fully HTML/CSS/SVG certificate of completion.
 * Uses only inline styles so outerHTML is portable for PDF (print window).
 * Aspect ratio 297/210 = A4 landscape.
 */

import { forwardRef } from "react";

interface Props {
  recipientName: string;
  courseName: string;
  programName?: string;
  completionDate: string;
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

// ─── Logo: real PNG on dark green pill (white artwork → visible on white bg) ──

function AWPLogo() {
  return (
    <div
      style={{
        background: "#1C3A2B",
        borderRadius: "10px",
        padding: "6px 18px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/alwatania-logo-white.png"
        alt="Al-Watania Poultry"
        style={{
          height: "clamp(36px, 5vw, 52px)",
          width: "auto",
          display: "block",
        }}
      />
    </div>
  );
}

// ─── Corner ornaments (diagonal green band + gold parallel lines) ──────────────

function CornerTopLeft() {
  return (
    <svg
      width="170"
      height="170"
      viewBox="0 0 170 170"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
    >
      {/* Green diagonal triangle */}
      <polygon points="0,0 155,0 0,155" fill="#1C3A2B" />
      {/* 3 gold diagonal lines (parallel, 45°) */}
      <line x1="40" y1="0" x2="0" y2="40" stroke="#C49A1A" strokeWidth="2.5" opacity="0.95" />
      <line x1="72" y1="0" x2="0" y2="72" stroke="#C49A1A" strokeWidth="1.8" opacity="0.75" />
      <line x1="104" y1="0" x2="0" y2="104" stroke="#C49A1A" strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}

function CornerBottomRight() {
  return (
    <svg
      width="170"
      height="170"
      viewBox="0 0 170 170"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", bottom: 0, right: 0, pointerEvents: "none" }}
    >
      {/* Green diagonal triangle (mirrored) */}
      <polygon points="170,170 15,170 170,15" fill="#1C3A2B" />
      {/* 3 gold diagonal lines */}
      <line x1="130" y1="170" x2="170" y2="130" stroke="#C49A1A" strokeWidth="2.5" opacity="0.95" />
      <line x1="98" y1="170" x2="170" y2="98" stroke="#C49A1A" strokeWidth="1.8" opacity="0.75" />
      <line x1="66" y1="170" x2="170" y2="66" stroke="#C49A1A" strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}

// ─── Subtle wave lines on left / right edges ──────────────────────────────────

function LeftEdgeWaves() {
  return (
    <svg
      width="22"
      height="340"
      viewBox="0 0 22 340"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", left: 22, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
    >
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M 11 ${i * 85} Q 2 ${i * 85 + 21} 11 ${i * 85 + 42} Q 20 ${i * 85 + 63} 11 ${i * 85 + 85}`}
          fill="none"
          stroke="#C49A1A"
          strokeWidth="0.9"
          opacity="0.28"
        />
      ))}
    </svg>
  );
}

function RightEdgeWaves() {
  return (
    <svg
      width="22"
      height="340"
      viewBox="0 0 22 340"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", right: 22, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
    >
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M 11 ${i * 85} Q 20 ${i * 85 + 21} 11 ${i * 85 + 42} Q 2 ${i * 85 + 63} 11 ${i * 85 + 85}`}
          fill="none"
          stroke="#C49A1A"
          strokeWidth="0.9"
          opacity="0.28"
        />
      ))}
    </svg>
  );
}

// ─── Divider badge (checkmark in circle) ─────────────────────────────────────

function DividerBadge() {
  return (
    <div
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        background: "#1C3A2B",
        border: "2.5px solid #C49A1A",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        margin: "0 14px",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <polyline
          points="2.5,7.5 5.5,10.5 11.5,3.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export const CertificateCard = forwardRef<HTMLDivElement, Props>(
  function CertificateCard({ recipientName, courseName, programName, completionDate }, ref) {
    const displayName = recipientName.trim() || "Employee Name";
    const formattedDate = formatDate(completionDate);
    const prog = programName || "SAP PP/QM Guided Onboarding Program";

    return (
      <div
        ref={ref}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "297 / 210",
          background: "#FFFFFF",
          overflow: "hidden",
          border: "2px solid #C49A1A",
          borderRadius: "10px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Corner ornaments — absolute, clipped by overflow:hidden */}
        <CornerTopLeft />
        <CornerBottomRight />

        {/* Edge waves */}
        <LeftEdgeWaves />
        <RightEdgeWaves />

        {/* ─── Main content ─── */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            padding: "0 10%",
            boxSizing: "border-box",
          }}
        >
          {/* Logo */}
          <div style={{ marginBottom: "0.8%" }}>
            <AWPLogo />
          </div>

          {/* Organisation tag line */}
          <div
            style={{
              fontSize: "clamp(7px, 0.95vw, 10px)",
              letterSpacing: "3.5px",
              color: "#6B7A6F",
              textTransform: "uppercase",
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              marginBottom: "2.2%",
            }}
          >
            AL-WATANIA POULTRY &nbsp;|&nbsp; SAP LEARNING HUB
          </div>

          {/* CERTIFICATE */}
          <div
            style={{
              fontSize: "clamp(30px, 4.8vw, 56px)",
              fontWeight: "700",
              color: "#1C3A2B",
              letterSpacing: "clamp(4px, 0.9vw, 10px)",
              textTransform: "uppercase",
              lineHeight: 1,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              marginBottom: "0.4%",
            }}
          >
            CERTIFICATE
          </div>

          {/* OF COMPLETION with gold rules + circle endpoints */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "2.8%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#C49A1A",
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  width: "clamp(50px, 6vw, 90px)",
                  height: "1.5px",
                  background: "#C49A1A",
                }}
              />
            </div>

            <span
              style={{
                fontSize: "clamp(8px, 1.1vw, 12px)",
                letterSpacing: "4px",
                color: "#1C3A2B",
                textTransform: "uppercase",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontWeight: "600",
                whiteSpace: "nowrap",
              }}
            >
              OF COMPLETION
            </span>

            <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <div
                style={{
                  width: "clamp(50px, 6vw, 90px)",
                  height: "1.5px",
                  background: "#C49A1A",
                }}
              />
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#C49A1A",
                  flexShrink: 0,
                }}
              />
            </div>
          </div>

          {/* This is to certify that */}
          <div
            style={{
              fontSize: "clamp(9px, 1.3vw, 14px)",
              fontStyle: "italic",
              color: "#6B7A6F",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              marginBottom: "0.6%",
            }}
          >
            This is to certify that
          </div>

          {/* Recipient name */}
          <div
            style={{
              fontSize: "clamp(28px, 4.5vw, 52px)",
              fontStyle: "italic",
              color: "#1C3A2B",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              lineHeight: 1.1,
              marginBottom: "0.5%",
              textAlign: "center",
            }}
          >
            {displayName}
          </div>

          {/* Gold underline beneath name */}
          <div
            style={{
              width: "clamp(140px, 34%, 380px)",
              height: "1.5px",
              background:
                "linear-gradient(to right, transparent, #C49A1A 25%, #C49A1A 75%, transparent)",
              marginBottom: "1.8%",
            }}
          />

          {/* has successfully completed */}
          <div
            style={{
              fontSize: "clamp(8px, 1.15vw, 13px)",
              color: "#2A2E2B",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              marginBottom: "0.6%",
            }}
          >
            has successfully completed
          </div>

          {/* Course title */}
          <div
            style={{
              fontSize: "clamp(12px, 1.8vw, 20px)",
              fontWeight: "700",
              color: "#1C3A2B",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              textAlign: "center",
              marginBottom: "0.4%",
            }}
          >
            {courseName}
          </div>

          {/* Program label */}
          <div
            style={{
              fontSize: "clamp(7px, 1vw, 11px)",
              fontStyle: "italic",
              color: "#4E7862",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              marginBottom: "2.4%",
              textAlign: "center",
            }}
          >
            as part of the {prog}
          </div>

          {/* Divider with centre badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "78%",
              marginBottom: "2.6%",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "#D9D4C8",
              }}
            />
            <DividerBadge />
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "#D9D4C8",
              }}
            />
          </div>

          {/* Footer columns */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "68%",
            }}
          >
            {/* Left — Signature */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(8px, 1.1vw, 12px)",
                  fontStyle: "italic",
                  color: "#2A2E2B",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  marginBottom: "5px",
                  whiteSpace: "nowrap",
                }}
              >
                SAP PP/QM Program
              </div>
              <div
                style={{
                  width: "clamp(90px, 13vw, 160px)",
                  height: "1px",
                  background: "#1C3A2B",
                  margin: "0 auto 5px",
                }}
              />
              <div
                style={{
                  fontSize: "clamp(6px, 0.85vw, 9px)",
                  color: "#6B7A6F",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                }}
              >
                Authorized Signature
              </div>
            </div>

            {/* Right — Date */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(8px, 1.1vw, 12px)",
                  fontWeight: "700",
                  color: "#1C3A2B",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  marginBottom: "5px",
                  whiteSpace: "nowrap",
                }}
              >
                {formattedDate}
              </div>
              <div
                style={{
                  width: "clamp(90px, 13vw, 160px)",
                  height: "1px",
                  background: "#1C3A2B",
                  margin: "0 auto 5px",
                }}
              />
              <div
                style={{
                  fontSize: "clamp(6px, 0.85vw, 9px)",
                  color: "#6B7A6F",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                }}
              >
                Date of Completion
              </div>
            </div>
          </div>
        </div>

        {/* Bottom attribution line */}
        <div
          style={{
            position: "absolute",
            bottom: "2.2%",
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {/* Leaf icon */}
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 10 C1 5, 5.5 1, 10 3 C12.5 4.2, 12.5 8, 10 9.5 C7 11.5, 2.5 11, 2 10Z"
              fill="#4E7862"
            />
            <line x1="2" y1="10" x2="8" y2="5" stroke="#1C3A2B" strokeWidth="0.7" opacity="0.6" />
          </svg>
          <span
            style={{
              fontSize: "clamp(5.5px, 0.75vw, 8px)",
              color: "#B0A896",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
            }}
          >
            AL-WATANIA POULTRY &nbsp;|&nbsp; SAP PP/QM LEARNING HUB
          </span>
        </div>
      </div>
    );
  }
);
