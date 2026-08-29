"use client";

/**
 * ProcessChat — slide-in AI chat drawer for the Processes tab.
 * Desktop: fixed panel on the right (400px wide).
 * Mobile: full-width bottom sheet.
 * Sends messages to /api/process-assistant (server-side Anthropic call).
 * API key never exposed client-side.
 */

import { useState, useRef, useEffect } from "react";
import { useT } from "@/lib/i18n";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface Props {
  processId?: string;
  lang: "en" | "ar";
  onClose: () => void;
}

export function ProcessChat({ processId, lang, onClose }: Props) {
  const t = useT();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  // Keep last 10 messages
  const MAX_MESSAGES = 10;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    setInput("");
    setError(null);
    const newMsg: ChatMessage = { role: "user", content: text };
    setMessages((prev) => [...prev.slice(-(MAX_MESSAGES - 1)), newMsg]);
    setLoading(true);

    try {
      const res = await fetch("/api/process-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, processId, language: lang }),
      });

      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      const reply: ChatMessage = { role: "assistant", content: data.reply };
      setMessages((prev) => [...prev.slice(-(MAX_MESSAGES - 1)), reply]);
    } catch {
      setError(t("proc.chat.error"));
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  const isAR = lang === "ar";

  return (
    <>
      {/* Backdrop (mobile) */}
      <div
        className="fixed inset-0 bg-black/30 z-40 sm:hidden"
        onClick={onClose}
        aria-hidden
      />

      {/* Panel */}
      <div
        className={`
          fixed z-50 flex flex-col bg-[#FAFAF8] shadow-2xl
          /* Mobile: bottom sheet */
          bottom-0 left-0 right-0 rounded-t-2xl max-h-[80vh]
          /* Desktop: right side panel */
          sm:top-0 sm:right-0 sm:bottom-0 sm:left-auto sm:rounded-none sm:w-[400px] sm:max-h-none
          border-l border-[#D9D4C8]
        `}
        dir={isAR ? "rtl" : "ltr"}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3.5 border-b border-[#D9D4C8] shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-lg">💬</span>
            <h3 className="text-sm font-semibold text-[#1C3A2B]">{t("proc.chat.title")}</h3>
          </div>
          <div className="flex items-center gap-2">
            {messages.length > 0 && (
              <button
                onClick={() => { setMessages([]); setError(null); }}
                className="text-xs text-[#6B7A6F] hover:text-[#1C3A2B] transition-colors"
              >
                {t("proc.chat.clear")}
              </button>
            )}
            <button
              onClick={onClose}
              className="text-[#6B7A6F] hover:text-[#1C3A2B] text-xl leading-none transition-colors"
              aria-label={t("proc.chat.close")}
            >
              ×
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {messages.length === 0 && !loading && !error && (
            <div className="text-center text-sm text-[#6B7A6F] py-8 leading-relaxed">
              {isAR
                ? "اسألني أي شيء عن هذه العملية أو رموز T-Code المرتبطة بها."
                : "Ask me anything about this process or its T-codes."}
            </div>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? (isAR ? "justify-start" : "justify-end") : (isAR ? "justify-end" : "justify-start")}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-[#1C3A2B] text-white"
                    : "bg-white border border-[#D9D4C8] text-[#2A2E2B]"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {/* Loading indicator */}
          {loading && (
            <div className={`flex ${isAR ? "justify-end" : "justify-start"}`}>
              <div className="bg-white border border-[#D9D4C8] rounded-2xl px-4 py-3 flex gap-1.5 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4E7862] animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#4E7862] animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#4E7862] animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="text-xs text-[#9B3030] bg-[#FCDEDE] border border-[#f5b8b8] rounded-xl px-3 py-2">
              {error}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="px-4 py-3 border-t border-[#D9D4C8] shrink-0">
          <div className="flex gap-2 items-end">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t("proc.chat.placeholder")}
              rows={1}
              dir={isAR ? "rtl" : "ltr"}
              className="flex-1 resize-none text-sm border border-[#D9D4C8] rounded-xl px-3 py-2.5 bg-white focus:outline-none focus:border-[#4E7862] focus:ring-1 focus:ring-[#4E7862] transition-colors"
              style={{ maxHeight: "120px" }}
              onInput={(e) => {
                const ta = e.currentTarget;
                ta.style.height = "auto";
                ta.style.height = `${Math.min(ta.scrollHeight, 120)}px`;
              }}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="shrink-0 bg-[#1C3A2B] text-white text-sm font-medium px-3 py-2.5 rounded-xl hover:bg-[#2D5A42] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              {t("proc.chat.send")}
            </button>
          </div>
          <p className="text-[10px] text-[#D9D4C8] mt-1.5 text-center">
            {isAR ? "Enter للإرسال · Shift+Enter لسطر جديد" : "Enter to send · Shift+Enter for new line"}
          </p>
        </div>
      </div>
    </>
  );
}
