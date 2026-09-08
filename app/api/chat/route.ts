export async function POST(req) {
  try {
    const { message } = await req.json();
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
        process.env.GEMINI_API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: message }] }],
        }),
      }
    );
    const data = await response.json();
    if (data.error) {
      console.error("Google API error:", data.error);
      return Response.json(
        { reply: "Error from Google: " + data.error.message },
        { status: 500 }
      );
    }
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Couldn't get a reply, please try again.";
    return Response.json({ reply });
  } catch (err) {
    console.error("Server error:", err);
    return Response.json({ reply: "Internal server error." }, { status: 500 });
  }
}
