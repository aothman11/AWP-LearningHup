"use client";

import { useState, useEffect, useCallback } from "react";
import { formatDate } from "@/lib/format";

type Status = "open" | "in_progress" | "closed";

interface Ticket {
  id: string;
  created_at: string;
  submitted_by: string;
  department: string;
  subject: string;
  description: string;
  status: Status;
  admin_note: string | null;
  updated_at: string;
}

const STATUS_LABELS: Record<Status, string> = {
  open: "Open",
  in_progress: "In Progress",
  closed: "Closed",
};

const STATUS_COLORS: Record<Status, React.CSSProperties> = {
  open: { background: "#FEE2E2", color: "#991B1B", border: "1px solid #FECACA" },
  in_progress: { background: "#FEF9EB", color: "#92400E", border: "1px solid #C49A1A" },
  closed: { background: "#DCFCE7", color: "#14532D", border: "1px solid #86EFAC" },
};

const EMPTY_MESSAGES: Record<Status | "all", string> = {
  all: "No tickets have been submitted yet.",
  open: "No open tickets. All caught up!",
  in_progress: "No tickets are currently in progress.",
  closed: "No closed tickets yet.",
};


// ── Admin Auth ─────────────────────────────────────────────────────────────────

function useAdminAuth() {
  const [token, setToken] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem("admin_token");
    setToken(stored);
    setChecking(false);
  }, []);

  return { token, setToken, checking };
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function AdminTicketsPage() {
  const { token, setToken, checking } = useAdminAuth();
  const [secretInput, setSecretInput] = useState("");
  const [loginError, setLoginError] = useState("");

  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState<Status | "all">("all");
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  // Modal edit state
  const [editNote, setEditNote] = useState("");
  const [editStatus, setEditStatus] = useState<Status>("open");
  const [saving, setSaving] = useState(false);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!secretInput.trim()) {
      setLoginError("Please enter the admin secret.");
      return;
    }
    sessionStorage.setItem("admin_token", secretInput.trim());
    setToken(secretInput.trim());
    setLoginError("");
  }

  const fetchTickets = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    try {
      const res = await fetch("/api/admin/tickets", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) {
        setToken(null);
        sessionStorage.removeItem("admin_token");
        return;
      }
      const json = await res.json();
      setTickets(json.tickets ?? []);
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  }, [token, setToken]);

  useEffect(() => {
    if (token) fetchTickets();
  }, [token, fetchTickets]);

  function openModal(ticket: Ticket) {
    setSelectedTicket(ticket);
    setEditStatus(ticket.status);
    setEditNote(ticket.admin_note ?? "");
  }

  function closeModal() {
    setSelectedTicket(null);
  }

  async function saveTicket() {
    if (!selectedTicket) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/support/tickets/${selectedTicket.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: editStatus, admin_note: editNote }),
      });
      if (res.ok) {
        await fetchTickets();
        closeModal();
      }
    } finally {
      setSaving(false);
    }
  }

  // ── Counts ──────────────────────────────────────────────────────────────────
  const counts: Record<Status | "all", number> = {
    all: tickets.length,
    open: tickets.filter((t) => t.status === "open").length,
    in_progress: tickets.filter((t) => t.status === "in_progress").length,
    closed: tickets.filter((t) => t.status === "closed").length,
  };

  // ── Login screen ─────────────────────────────────────────────────────────────

  if (checking) return null;

  if (!token) {
    return (
      <div style={styles.page}>
        <div style={styles.loginCard}>
          <h1 style={styles.loginTitle}>Admin — AWP Learning Hub</h1>
          <p style={styles.loginSub}>Enter the admin secret to continue.</p>
          {loginError && <p style={styles.fieldError}>{loginError}</p>}
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Admin secret"
              value={secretInput}
              onChange={(e) => setSecretInput(e.target.value)}
              style={styles.input}
              autoFocus
            />
            <button type="submit" style={styles.btnPrimary}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── Ticket detail + edit modal ────────────────────────────────────────────────

  const modal = selectedTicket ? (
    <div style={styles.overlay} onClick={closeModal}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.modalHeader}>
          <span style={styles.modalTitle}>Ticket Detail</span>
          <button style={styles.closeBtn} onClick={closeModal} aria-label="Close">
            ✕
          </button>
        </div>
        <div style={styles.modalBody}>
          <Row label="Ticket ID">{selectedTicket.id.slice(0, 8).toUpperCase()}</Row>
          <Row label="Submitted By">{selectedTicket.submitted_by}</Row>
          <Row label="Department">{selectedTicket.department}</Row>
          <Row label="Subject">{selectedTicket.subject}</Row>
          <Row label="Created">{formatDate(selectedTicket.created_at)}</Row>
          <div style={styles.descSection}>
            <span style={styles.descLabel}>Description</span>
            <p style={styles.descText}>{selectedTicket.description}</p>
          </div>

          {/* ── Edit section ── */}
          <div style={styles.editSection}>
            <span style={styles.descLabel}>Update Ticket</span>

            <div style={styles.editRow}>
              <label style={styles.editLabel}>Status</label>
              <div style={styles.selectWrap}>
                <select
                  style={{ ...styles.editInput, ...styles.editSelect }}
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value as Status)}
                >
                  <option value="open">Open</option>
                  <option value="in_progress">In Progress</option>
                  <option value="closed">Closed</option>
                </select>
                <span style={styles.selectCaret} aria-hidden>▾</span>
              </div>
            </div>

            <div style={styles.editRow}>
              <label style={styles.editLabel}>Admin Note</label>
              <textarea
                style={{ ...styles.editInput, ...styles.editTextarea }}
                placeholder="Optional note visible to admins…"
                rows={3}
                value={editNote}
                onChange={(e) => setEditNote(e.target.value)}
              />
            </div>

            <button
              style={{
                ...styles.btnSave,
                opacity: saving ? 0.55 : 1,
                cursor: saving ? "not-allowed" : "pointer",
              }}
              onClick={saveTicket}
              disabled={saving}
            >
              {saving ? "Saving…" : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  // ── Filtered tickets ──────────────────────────────────────────────────────────

  const filtered =
    filterStatus === "all" ? tickets : tickets.filter((t) => t.status === filterStatus);

  return (
    <div style={styles.page}>
      {modal}
      <div style={styles.container}>
        <div style={styles.topBar}>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "2px" }}>
            <h1 style={styles.pageTitle}>Support Tickets</h1>
            <a href="/hub" style={styles.backLink}>← Back to Learning Hub</a>
          </div>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <button style={styles.btnOutline} onClick={fetchTickets}>
              {loading ? "Refreshing…" : "Refresh"}
            </button>
            <button
              style={styles.btnOutline}
              onClick={() => {
                sessionStorage.removeItem("admin_token");
                setToken(null);
              }}
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Filter pills with counts */}
        <div style={styles.filters}>
          {(["all", "open", "in_progress", "closed"] as const).map((s) => (
            <button
              key={s}
              style={{
                ...styles.filterBtn,
                ...(filterStatus === s ? styles.filterBtnActive : {}),
              }}
              onClick={() => setFilterStatus(s)}
            >
              {s === "all" ? "All" : STATUS_LABELS[s]}
              <span
                style={{
                  ...styles.filterCount,
                  ...(filterStatus === s ? styles.filterCountActive : {}),
                }}
              >
                {counts[s]}
              </span>
            </button>
          ))}
        </div>

        {/* Table or empty state */}
        {loading && tickets.length === 0 ? (
          <p style={styles.empty}>Loading…</p>
        ) : filtered.length === 0 ? (
          <div style={styles.emptyBox}>
            <div style={styles.emptyIcon}>
              {filterStatus === "open" ? "✅" : filterStatus === "closed" ? "📁" : "📋"}
            </div>
            <p style={styles.emptyText}>{EMPTY_MESSAGES[filterStatus]}</p>
          </div>
        ) : (
          <div style={styles.tableWrap}>
            <table style={styles.table}>
              <thead>
                <tr>
                  {["ID", "Name", "Dept", "Subject", "Status", "Created", ""].map((h, i) => (
                    <th key={i} style={styles.th}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((t) => (
                  <tr
                    key={t.id}
                    style={styles.tr}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLTableRowElement).style.background = "#FAFAF8")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLTableRowElement).style.background = "")
                    }
                  >
                    <td style={styles.td}>
                      <code style={{ fontSize: "12px" }}>{t.id.slice(0, 8).toUpperCase()}</code>
                    </td>
                    <td style={styles.td}>{t.submitted_by}</td>
                    <td style={styles.td}>{t.department}</td>
                    <td style={{ ...styles.td, maxWidth: "200px" }}>
                      <span
                        style={{
                          display: "block",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                        title={t.subject}
                      >
                        {t.subject}
                      </span>
                    </td>
                    <td style={styles.td}>
                      <span style={{ ...styles.badge, ...STATUS_COLORS[t.status] }}>
                        {STATUS_LABELS[t.status]}
                      </span>
                    </td>
                    <td style={{ ...styles.td, whiteSpace: "nowrap" as const }}>
                      {formatDate(t.created_at)}
                    </td>
                    <td style={styles.td}>
                      <button style={styles.btnView} onClick={() => openModal(t)}>
                        View / Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

// ── helpers ───────────────────────────────────────────────────────────────────

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: "12px", marginBottom: "10px", fontSize: "14px" }}>
      <span style={{ fontWeight: 600, minWidth: "120px", color: "#555" }}>{label}</span>
      <span style={{ color: "#1A1A1A" }}>{children}</span>
    </div>
  );
}

// ── styles ────────────────────────────────────────────────────────────────────

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#F7F5F0",
    padding: "32px 16px",
    fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
  },
  container: { maxWidth: "1200px", margin: "0 auto" },
  topBar: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "16px",
    marginBottom: "24px",
    flexWrap: "wrap" as const,
  },
  pageTitle: { fontSize: "22px", fontWeight: 700, color: "#1A1A1A", margin: 0 },
  backLink: {
    fontSize: "13px",
    color: "#047836",
    textDecoration: "none",
    fontWeight: 600,
  },
  loginCard: {
    background: "#FFF",
    border: "1px solid #DDD8CC",
    borderRadius: "4px",
    padding: "36px 40px",
    maxWidth: "400px",
    margin: "80px auto 0",
    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
  },
  loginTitle: { fontSize: "20px", fontWeight: 700, margin: "0 0 6px", color: "#1A1A1A" },
  loginSub: { fontSize: "14px", color: "#666", marginBottom: "20px" },
  filters: { display: "flex", flexWrap: "wrap" as const, gap: "8px", marginBottom: "20px" },
  filterBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "6px 14px",
    fontSize: "13px",
    border: "1px solid #C8C3BB",
    borderRadius: "20px",
    background: "#FFF",
    cursor: "pointer",
    color: "#444",
  },
  filterBtnActive: {
    background: "#047836",
    color: "#FFF",
    borderColor: "#047836",
  },
  filterCount: {
    fontSize: "11px",
    fontWeight: 700,
    background: "#EDE9E1",
    color: "#555",
    borderRadius: "10px",
    padding: "1px 6px",
  },
  filterCountActive: {
    background: "rgba(255,255,255,0.25)",
    color: "#FFF",
  },
  tableWrap: {
    overflowX: "auto" as const,
    borderRadius: "4px",
    border: "1px solid #DDD8CC",
    WebkitOverflowScrolling: "touch" as unknown as undefined,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    background: "#FFF",
    fontSize: "13px",
    minWidth: "640px",
  },
  th: {
    padding: "10px 14px",
    textAlign: "left" as const,
    fontWeight: 600,
    color: "#555",
    background: "#F3F0EB",
    borderBottom: "1px solid #DDD8CC",
    whiteSpace: "nowrap" as const,
  },
  tr: { borderBottom: "1px solid #EDE9E1", transition: "background 0.1s" },
  td: { padding: "10px 14px", verticalAlign: "middle" as const, color: "#1A1A1A" },
  badge: {
    display: "inline-block",
    padding: "2px 8px",
    fontSize: "12px",
    fontWeight: 600,
    borderRadius: "3px",
    whiteSpace: "nowrap" as const,
  },
  btnView: {
    padding: "5px 12px",
    fontSize: "12px",
    fontWeight: 600,
    border: "1px solid #047836",
    borderRadius: "3px",
    background: "#FFF",
    color: "#047836",
    cursor: "pointer",
    whiteSpace: "nowrap" as const,
  },
  input: {
    width: "100%",
    padding: "9px 12px",
    fontSize: "14px",
    border: "1px solid #C8C3BB",
    borderRadius: "3px",
    background: "#FAFAF8",
    color: "#1A1A1A",
    boxSizing: "border-box" as const,
    marginBottom: "12px",
  },
  btnPrimary: {
    display: "block",
    width: "100%",
    padding: "10px 20px",
    background: "#047836",
    color: "#FFF",
    fontSize: "15px",
    fontWeight: 600,
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  },
  btnOutline: {
    padding: "7px 14px",
    fontSize: "13px",
    border: "1px solid #C8C3BB",
    borderRadius: "3px",
    background: "#FFF",
    cursor: "pointer",
    color: "#444",
    whiteSpace: "nowrap" as const,
  },
  fieldError: { color: "#D24918", fontSize: "13px", marginBottom: "10px" },
  empty: { padding: "32px", textAlign: "center" as const, color: "#888" },
  emptyBox: {
    background: "#FFF",
    border: "1px solid #DDD8CC",
    borderRadius: "4px",
    padding: "48px 32px",
    textAlign: "center" as const,
  },
  emptyIcon: { fontSize: "36px", marginBottom: "12px" },
  emptyText: { fontSize: "15px", color: "#666", margin: 0 },
  overlay: {
    position: "fixed" as const,
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "16px",
  },
  modal: {
    background: "#FFF",
    border: "1px solid #DDD8CC",
    borderRadius: "6px",
    width: "100%",
    maxWidth: "560px",
    maxHeight: "90vh",
    overflowY: "auto" as const,
    boxShadow: "0 12px 32px rgba(0,0,0,0.18)",
  },
  modalHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 20px",
    borderBottom: "1px solid #EDE9E1",
    position: "sticky" as const,
    top: 0,
    background: "#FFF",
    zIndex: 1,
  },
  modalTitle: { fontWeight: 700, fontSize: "16px", color: "#1A1A1A" },
  closeBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
    background: "#F3F0EB",
    border: "1px solid #DDD8CC",
    borderRadius: "50%",
    fontSize: "14px",
    cursor: "pointer",
    color: "#444",
    fontWeight: 700,
    flexShrink: 0,
  },
  modalBody: { padding: "20px" },
  descSection: { marginTop: "16px", marginBottom: "4px" },
  descLabel: {
    fontWeight: 600,
    fontSize: "13px",
    color: "#555",
    display: "block",
    marginBottom: "6px",
  },
  descText: { fontSize: "14px", color: "#1A1A1A", margin: 0, lineHeight: 1.6 },
  editSection: {
    marginTop: "20px",
    paddingTop: "20px",
    borderTop: "1px solid #EDE9E1",
  },
  editRow: { marginBottom: "14px" },
  editLabel: {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    color: "#444",
    marginBottom: "6px",
  },
  editInput: {
    width: "100%",
    padding: "8px 12px",
    fontSize: "14px",
    border: "1px solid #C8C3BB",
    borderRadius: "3px",
    background: "#FAFAF8",
    color: "#1A1A1A",
    boxSizing: "border-box" as const,
  },
  editSelect: {
    appearance: "none" as const,
    paddingRight: "32px",
  },
  editTextarea: {
    resize: "vertical" as const,
    lineHeight: 1.5,
  },
  selectWrap: {
    position: "relative" as const,
    display: "block",
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
  btnSave: {
    display: "block",
    width: "100%",
    padding: "10px 20px",
    background: "#047836",
    color: "#FFF",
    fontSize: "14px",
    fontWeight: 600,
    border: "none",
    borderRadius: "3px",
    marginTop: "4px",
  },
};
