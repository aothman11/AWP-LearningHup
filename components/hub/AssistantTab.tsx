"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const STARTER_PROMPTS = [
  "How do I create a production order for broiler growing?",
  "What is the process for corrective maintenance in PM?",
  "How do I post a goods receipt in MIGO?",
  "What T-code is used for MRP run?",
  "كيف أقوم بإنشاء أمر إنتاج للدواجن؟",
];

function isArabic(text: string): boolean {
  return /[؀-ۿ]/.test(text);
}

function InlineText({ text }: { text: string }) {
  const parts = text.split(/(`[^`]+`)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("`") && part.endsWith("`") ? (
          <code
            key={i}
            className="bg-[#1C3A2B]/10 text-[#1C3A2B] px-1 py-0.5 rounded text-sm font-mono"
          >
            {part.slice(1, -1)}
          </code>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

function MarkdownContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const result: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("### ")) {
      result.push(
        <h3 key={i} className="text-sm font-semibold text-[#1C3A2B] mt-3 mb-1">
          <InlineText text={line.slice(4)} />
        </h3>
      );
    } else if (line.startsWith("## ")) {
      result.push(
        <h2 key={i} className="text-base font-bold text-[#1C3A2B] mt-4 mb-1">
          <InlineText text={line.slice(3)} />
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
      result.push(
        <p key={i} className="font-semibold text-sm text-[#1C3A2B] mt-2">
          <InlineText text={line.slice(2, -2)} />
        </p>
      );
    } else if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      result.push(
        <ol key={`ol-${i}`} className="list-decimal list-inside space-y-1 my-2 text-sm">
          {items.map((item, j) => (
            <li key={j} className="text-gray-700">
              <InlineText text={item} />
            </li>
          ))}
        </ol>
      );
      continue;
    } else if (line.startsWith("- ") || line.startsWith("• ")) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].startsWith("- ") || lines[i].startsWith("• "))) {
        items.push(lines[i].slice(2));
        i++;
      }
      result.push(
        <ul key={`ul-${i}`} className="list-disc list-inside space-y-1 my-2 text-sm">
          {items.map((item, j) => (
            <li key={j} className="text-gray-700">
              <InlineText text={item} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.trim() === "") {
      result.push(<div key={i} className="h-2" />);
    } else {
      result.push(
        <p key={i} className="text-sm text-gray-700 leading-relaxed">
          <InlineText text={line} />
        </p>
      );
    }

    i++;
  }

  return <div className="space-y-0.5">{result}</div>;
}

export default function AssistantTab() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(text: string) {
    if (!text.trim() || streaming) return;

    const userMessage: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setStreaming(true);

    const assistantMessage: Message = { role: "assistant", content: "" };
    setMessages([...newMessages, assistantMessage]);

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text.trim(),
          history: messages,
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No reader");

      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: accumulated,
          };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content:
            "Sorry, I encountered an error. Please try again.",
        };
        return updated;
      });
    } finally {
      setStreaming(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  const showWelcome = messages.length === 0;

  return (
    <div className="flex flex-col h-full bg-[#F7F5F0]">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {showWelcome ? (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-4xl mb-3">🤖</div>
              <h2 className="text-xl font-bold text-[#1C3A2B] mb-2">
                AWP SAP Reference Assistant
              </h2>
              <p className="text-sm text-gray-500">
                Ask anything about SAP processes, T-codes, and business
                workflows — backed by the AWP Business Blueprint.
              </p>
            </div>
            <div className="grid gap-2">
              {STARTER_PROMPTS.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(prompt)}
                  dir={isArabic(prompt) ? "rtl" : "ltr"}
                  className="text-left px-4 py-3 rounded-xl border border-[#1C3A2B]/20 bg-white hover:bg-[#1C3A2B]/5 hover:border-[#1C3A2B]/40 transition-colors text-sm text-gray-700"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full bg-[#1C3A2B] flex items-center justify-center text-white text-xs mr-2 mt-1 shrink-0">
                    🤖
                  </div>
                )}
                <div
                  dir={isArabic(msg.content) ? "rtl" : "ltr"}
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    msg.role === "user"
                      ? "bg-[#1C3A2B] text-white text-sm"
                      : "bg-white border border-gray-200 text-gray-800"
                  }`}
                >
                  {msg.role === "user" ? (
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  ) : msg.content === "" ? (
                    <div className="flex gap-1 items-center py-1">
                      <span className="w-2 h-2 bg-[#4E7862] rounded-full animate-bounce [animation-delay:0ms]" />
                      <span className="w-2 h-2 bg-[#4E7862] rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="w-2 h-2 bg-[#4E7862] rounded-full animate-bounce [animation-delay:300ms]" />
                    </div>
                  ) : (
                    <MarkdownContent content={msg.content} />
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="border-t border-gray-200 bg-white px-4 py-3">
        <div className="max-w-2xl mx-auto flex gap-2 items-end">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about SAP processes, T-codes, or workflows…"
            rows={1}
            disabled={streaming}
            className="flex-1 resize-none rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#4E7862] focus:ring-1 focus:ring-[#4E7862] disabled:opacity-50 max-h-32 overflow-y-auto"
            style={{ minHeight: "44px" }}
            onInput={(e) => {
              const el = e.currentTarget;
              el.style.height = "auto";
              el.style.height = Math.min(el.scrollHeight, 128) + "px";
            }}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={streaming || !input.trim()}
            className="shrink-0 w-10 h-10 rounded-xl bg-[#1C3A2B] text-white flex items-center justify-center hover:bg-[#4E7862] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.269 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
        <p className="text-center text-xs text-gray-400 mt-2">
          Answers sourced from AWP Business Blueprint documents · SAP S/4HANA
        </p>
      </div>
    </div>
  );
}
