"use client";

import { useState, FormEvent } from "react";

type Department = "PP" | "QM" | "MM" | "MDG" | "Other";

const DEPARTMENTS: { value: Department; label: string }[] = [
  { value: "PP", label: "PP — Production Planning" },
  { value: "QM", label: "QM — Quality Management" },
  { value: "MM", label: "MM — Materials Management" },
  { value: "MDG", label: "MDG — Master Data Governance" },
  { value: "Other", label: "Other" },
];

const MIN_DESC = 20;

export default function NewSupportTicketPage() {
  const [form, setForm] = useState({
    submitted_by: "",
    department: "" as Department | "",
    subject: "",
    description: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  function validate(): boolean {
    const e: Partial<Record<keyof typeof form, string>> = {};
    if (!form.submitted_by.trim()) e.submitted_by = "Name is required.";
    if (!form.department) e.department = "Please select a department.";
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (form.description.trim().length < MIN_DESC)
      e.description = `Description must be at least ${MIN_DESC} characters.`;
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setServerError("");
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/support/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok) {
        setServerError(json.error ?? "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const descLen = form.description.trim().length;

  if (submitted) {
    return (
      <div style={styles.page}>
        <div style={styles.card}>
          <div style={styles.successIcon}>&#10003;</div>
          <h2 style={styles.successTitle}>Ticket Submitted</h2>
          <p style={styles.successMsg}>
            Your ticket has been submitted. We&rsquo;ll follow up shortly.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <button
              style={styles.btnPrimary}
              onClick={() => {
                setSubmitted(false);
                setForm({ submitted_by: "", department: "", subject: "", description: "" });
              }}
            >
              Submit Another Ticket
            </button>
            <a href="/hub" style={styles.backLink}>
              ← Back to Learning Hub
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Nav bar */}
        <div style={styles.navBar}>
          <a href="/hub" style={styles.navBack}>
            ← Learning Hub
          </a>
        </div>

        <div style={styles.header}>
          <div style={styles.logoBar}>
            <span style={styles.logoText}>AWP Learning Hub</span>
          </div>
          <h1 style={styles.title}>Submit a Support Ticket</h1>
          <p style={styles.subtitle}>
            Report an issue or request assistance with the AWP SAP S/4HANA system.
          </p>
        </div>

        {serverError && <div style={styles.errorBanner}>{serverError}</div>}

        <form onSubmit={handleSubmit} noValidate>
          <Field label="Your Name" error={errors.submitted_by} required>
            <input
              style={{ ...styles.input, ...(errors.submitted_by ? styles.inputError : {}) }}
              type="text"
              placeholder="Enter your full name"
              value={form.submitted_by}
              onChange={(e) => setForm((f) => ({ ...f, submitted_by: e.target.value }))}
            />
          </Field>

          <Field label="Department" error={errors.department} required>
            {/* Wrapper adds the custom dropdown arrow */}
            <div style={styles.selectWrap}>
              <select
                style={{
                  ...styles.input,
                  ...styles.select,
                  ...(errors.department ? styles.inputError : {}),
                }}
                value={form.department}
                onChange={(e) =>
                  setForm((f) => ({ ...f, department: e.target.value as Department }))
                }
              >
                <option value="">Select department…</option>
                {DEPARTMENTS.map((d) => (
                  <option key={d.value} value={d.value}>
                    {d.label}
                  </option>
                ))}
              </select>
              {/* Custom caret */}
              <span style={styles.selectCaret} aria-hidden>▾</span>
            </div>
          </Field>

          <Field label="Subject" error={errors.subject} required>
            <input
              style={{ ...styles.input, ...(errors.subject ? styles.inputError : {}) }}
              type="text"
              placeholder="Brief description of the issue"
              value={form.subject}
              onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
            />
          </Field>

          <Field label="Description" error={errors.description} required>
            <textarea
              style={{
                ...styles.input,
                ...styles.textarea,
                ...(errors.description ? styles.inputError : {}),
              }}
              placeholder="Describe the issue in detail — steps to reproduce, expected vs. actual behaviour, etc."
              rows={5}
              value={form.description}
              onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
            />
            {/* Live character counter */}
            <div style={styles.charCounter}>
              <span style={{ color: descLen >= MIN_DESC ? "#047836" : "#888" }}>
                {descLen}
              </span>
              <span style={{ color: "#888" }}> / {MIN_DESC} min</span>
            </div>
          </Field>

          <button
            type="submit"
            style={{
              ...styles.btnPrimary,
              opacity: submitting ? 0.55 : 1,
              cursor: submitting ? "not-allowed" : "pointer",
            }}
            disabled={submitting}
          >
            {submitting ? "Submitting…" : "Submit Ticket"}
          </button>
        </form>
      </div>
    </div>
  );
}

// ── tiny sub-component ─────────────────────────────────────────────────────────

function Field({
  label,
  children,
  error,
  required,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  required?: boolean;
}) {
  return (
    <div style={styles.field}>
      <label style={styles.label}>
        {label}
        {required && <span style={styles.required}> *</span>}
      </label>
      {children}
      {error && <p style={styles.fieldError}>{error}</p>}
    </div>
  );
}

// ── inline styles ─────────────────────────────────────────────────────────────

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#F7F5F0",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "48px 16px",
    fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
  },
  card: {
    background: "#FFFFFF",
    border: "1px solid #DDD8CC",
    borderRadius: "4px",
    width: "100%",
    maxWidth: "580px",
    padding: "28px 40px 36px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
  },
  navBar: {
    marginBottom: "20px",
    paddingBottom: "16px",
    borderBottom: "1px solid #EDE9E1",
  },
  navBack: {
    fontSize: "13px",
    color: "#047836",
    textDecoration: "none",
    fontWeight: 600,
  },
  header: { marginBottom: "28px" },
  logoBar: { marginBottom: "12px" },
  logoText: {
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "#047836",
  },
  title: {
    fontSize: "22px",
    fontWeight: 700,
    color: "#1A1A1A",
    margin: "0 0 6px",
  },
  subtitle: { fontSize: "14px", color: "#6B6B6B", margin: 0 },
  errorBanner: {
    background: "#FEE2E2",
    border: "1px solid #FECACA",
    color: "#991B1B",
    borderRadius: "3px",
    padding: "10px 14px",
    fontSize: "14px",
    marginBottom: "20px",
  },
  field: { marginBottom: "20px" },
  label: {
    display: "block",
    fontSize: "14px",
    fontWeight: 600,
    color: "#1A1A1A",
    marginBottom: "6px",
  },
  required: { color: "#D24918" },
  input: {
    width: "100%",
    padding: "9px 12px",
    fontSize: "14px",
    border: "1px solid #C8C3BB",
    borderRadius: "3px",
    background: "#FAFAF8",
    color: "#1A1A1A",
    outline: "none",
    boxSizing: "border-box" as const,
  },
  selectWrap: {
    position: "relative" as const,
    display: "block",
  },
  select: {
    appearance: "none" as const,
    paddingRight: "32px",
  },
  selectCaret: {
    position: "absolute" as const,
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none" as const,
    fontSize: "14px",
    color: "#666",
  },
  inputError: { borderColor: "#D24918" },
  textarea: { resize: "vertical" as const, lineHeight: 1.5 },
  charCounter: {
    fontSize: "12px",
    marginTop: "4px",
    textAlign: "right" as const,
  },
  fieldError: { fontSize: "12px", color: "#D24918", margin: "4px 0 0" },
  btnPrimary: {
    display: "block",
    width: "100%",
    padding: "11px 20px",
    background: "#047836",
    color: "#FFFFFF",
    fontSize: "15px",
    fontWeight: 600,
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    marginTop: "8px",
  },
  backLink: {
    display: "block",
    textAlign: "center" as const,
    fontSize: "14px",
    color: "#047836",
    textDecoration: "none",
    fontWeight: 600,
    padding: "8px 0",
  },
  successIcon: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    background: "#047836",
    color: "#FFF",
    fontSize: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 16px",
  },
  successTitle: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#1A1A1A",
    textAlign: "center" as const,
    margin: "0 0 8px",
  },
  successMsg: {
    fontSize: "14px",
    color: "#555",
    textAlign: "center" as const,
    marginBottom: "24px",
  },
};
