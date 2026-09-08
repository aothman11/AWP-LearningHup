"use client";

import { useState, useEffect, useCallback } from "react";

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

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

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

  // Per-row editable fields
  const [editNote, setEditNote] = useState<Record<string, string>>({});
  const [editStatus, setEditStatus] = useState<Record<string, Status>>({});
  const [saving, setSaving] = useState<Record<string, boolean>>({});

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

  async function saveTicket(id: string) {
    setSaving((s) => ({ ...s, [id]: true }));
    try {
      const patch: { status?: Status; admin_note?: string } = {};
      if (editStatus[id]) patch.status = editStatus[id];
      if (typeof editNote[id] === "string") patch.admin_note = editNote[id];

      const res = await fetch(`/api/support/tickets/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(patch),
      });
      if (res.ok) {
        await fetchTickets();
        if (selectedTicket?.id === id) setSelectedTicket(null);
      }
    } finally {
      setSaving((s) => ({ ...s, [id]: false }));
    }
  }

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

  // ── Ticket detail modal ───────────────────────────────────────────────────────

  const modal = selectedTicket ? (
    <div style={styles.overlay} onClick={() => setSelectedTicket(null)}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.modalHeader}>
          <span style={styles.modalTitle}>Ticket Detail</span>
          <button style={styles.closeBtn} onClick={() => setSelectedTicket(null)}>
            &#10005;
          </button>
        </div>
        <div style={styles.modalBody}>
          <Row label="Ticket ID">{selectedTicket.id.slice(0, 8).toUpperCase()}</Row>
          <Row label="Submitted By">{selectedTicket.submitted_by}</Row>
          <Row label="Department">{selectedTicket.department}</Row>
          <Row label="Subject">{selectedTicket.subject}</Row>
          <Row label="Status">
            <span style={{ ...styles.badge, ...STATUS_COLORS[selectedTicket.status] }}>
              {STATUS_LABELS[selectedTicket.status]}
            </span>
          </Row>
          <Row label="Created">{formatDate(selectedTicket.created_at)}</Row>
          <div style={styles.descSection}>
            <span style={styles.descLabel}>Description</span>
            <p style={styles.descText}>{selectedTicket.description}</p>
          </div>
          {selectedTicket.admin_note && (
            <div style={styles.descSection}>
              <span style={styles.descLabel}>Admin Note</span>
              <p style={styles.descText}>{selectedTicket.admin_note}</p>
            </div>
          )}
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
          <h1 style={styles.pageTitle}>Support Tickets</h1>
          <button
            style={{ ...styles.btnOutline, fontSize: "13px" }}
            onClick={() => {
              sessionStorage.removeItem("admin_token");
              setToken(null);
            }}
          >
            Sign Out
          </button>
        </div>

        {/* Filter pills */}
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
            </button>
          ))}
          <button style={{ ...styles.btnOutline, marginLeft: "auto" }} onClick={fetchTickets}>
            {loading ? "Refreshing…" : "Refresh"}
          </button>
        </div>

        {/* Table */}
        {filtered.length === 0 ? (
          <p style={styles.empty}>{loading ? "Loading…" : "No tickets found."}</p>
        ) : (
          <div style={styles.tableWrap}>
            <table style={styles.table}>
              <thead>
                <tr>
                  {["ID", "Name", "Dept", "Subject", "Status", "Created", "Actions"].map(
                    (h) => (
                      <th key={h} style={styles.th}>
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {filtered.map((t) => (
                  <tr key={t.id} style={styles.tr}>
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
                      <div style={styles.actions}>
                        <button
                          style={styles.btnSmall}
                          onClick={() => {
                            setSelectedTicket(t);
                            setEditStatus((s) => ({ ...s, [t.id]: t.status }));
                            setEditNote((n) => ({ ...n, [t.id]: t.admin_note ?? "" }));
                          }}
                        >
                          View
                        </button>
                        <select
                          style={styles.selectSmall}
                          value={editStatus[t.id] ?? t.status}
                          onChange={(e) =>
                            setEditStatus((s) => ({
                              ...s,
                              [t.id]: e.target.value as Status,
                            }))
                          }
                        >
                          <option value="open">Open</option>
                          <option value="in_progress">In Progress</option>
                          <option value="closed">Closed</option>
                        </select>
                        <input
                          style={styles.noteInput}
                          type="text"
                          placeholder="Admin note…"
                          value={editNote[t.id] ?? t.admin_note ?? ""}
                          onChange={(e) =>
                            setEditNote((n) => ({ ...n, [t.id]: e.target.value }))
                          }
                        />
                        <button
                          style={{ ...styles.btnSmall, background: "#047836", color: "#FFF" }}
                          onClick={() => saveTicket(t.id)}
                          disabled={saving[t.id]}
                        >
                          {saving[t.id] ? "…" : "Save"}
                        </button>
                      </div>
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
  topBar: { display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" },
  pageTitle: { fontSize: "22px", fontWeight: 700, color: "#1A1A1A", margin: 0, flex: 1 },
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
    padding: "6px 14px",
    fontSize: "13px",
    border: "1px solid #C8C3BB",
    borderRadius: "3px",
    background: "#FFF",
    cursor: "pointer",
    color: "#444",
  },
  filterBtnActive: {
    background: "#047836",
    color: "#FFF",
    borderColor: "#047836",
  },
  tableWrap: { overflowX: "auto" as const, borderRadius: "4px" },
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    background: "#FFF",
    border: "1px solid #DDD8CC",
    fontSize: "13px",
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
  tr: { borderBottom: "1px solid #EDE9E1" },
  td: { padding: "10px 14px", verticalAlign: "top" as const, color: "#1A1A1A" },
  badge: {
    display: "inline-block",
    padding: "2px 8px",
    fontSize: "12px",
    fontWeight: 600,
    borderRadius: "3px",
    whiteSpace: "nowrap" as const,
  },
  actions: { display: "flex", gap: "6px", flexWrap: "wrap" as const, alignItems: "center" },
  btnSmall: {
    padding: "5px 10px",
    fontSize: "12px",
    border: "1px solid #C8C3BB",
    borderRadius: "3px",
    background: "#FFF",
    cursor: "pointer",
    whiteSpace: "nowrap" as const,
    color: "#333",
  },
  selectSmall: {
    padding: "4px 6px",
    fontSize: "12px",
    border: "1px solid #C8C3BB",
    borderRadius: "3px",
    background: "#FFF",
  },
  noteInput: {
    padding: "4px 8px",
    fontSize: "12px",
    border: "1px solid #C8C3BB",
    borderRadius: "3px",
    minWidth: "120px",
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
  overlay: {
    position: "fixed" as const,
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    background: "#FFF",
    border: "1px solid #DDD8CC",
    borderRadius: "4px",
    width: "100%",
    maxWidth: "540px",
    maxHeight: "80vh",
    overflowY: "auto" as const,
    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
  },
  modalHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 20px",
    borderBottom: "1px solid #EDE9E1",
  },
  modalTitle: { fontWeight: 700, fontSize: "16px", color: "#1A1A1A" },
  closeBtn: {
    background: "none",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    color: "#666",
  },
  modalBody: { padding: "20px" },
  descSection: { marginTop: "16px" },
  descLabel: { fontWeight: 600, fontSize: "13px", color: "#555", display: "block", marginBottom: "6px" },
  descText: { fontSize: "14px", color: "#1A1A1A", margin: 0, lineHeight: 1.6 },
};
