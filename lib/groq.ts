/** Shared Groq API configuration and fetch wrapper. */

export const GROQ_MODEL = "llama-3.3-70b-versatile";
export const GROQ_MAX_TOKENS = 1000;
export const GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions";

export type ChatMessage = { role: string; content: string };

export interface GroqResult {
  reply: string;
  ok: true;
}

export interface GroqError {
  ok: false;
  status: number;
  message: string;
}

/**
 * Sends a chat-completion request to Groq.
 * Returns { ok: true, reply } on success or { ok: false, status, message } on failure.
 * Never throws — all errors are captured and returned.
 */
export async function groqChat(
  apiKey: string,
  messages: ChatMessage[],
): Promise<GroqResult | GroqError> {
  try {
    const res = await fetch(GROQ_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        max_tokens: GROQ_MAX_TOKENS,
        messages,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        ok: false,
        status: res.status,
        message: data.error?.message ?? "Groq API error.",
      };
    }

    const reply: string =
      data.choices?.[0]?.message?.content ?? "No response generated.";
    return { ok: true, reply };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { ok: false, status: 500, message };
  }
}
