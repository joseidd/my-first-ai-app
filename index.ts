import Groq from "groq-sdk";
import index from "./index.html";

// Reads GROQ_API_KEY from your .env file automatically
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

Bun.serve({
  port: 3000,
  routes: {
    "/": index,

    "/api/chat": {
      async POST(req) {
        const { history, message } = await req.json();

        try {
          // Build messages array: system prompt + conversation history + new message
          const messages = [
            { role: "system", content: "You are a friendly, helpful AI assistant. Keep your answers clear and concise." },
            ...history,
            { role: "user", content: message },
          ];

          const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile", // Free, fast, very capable model
            messages,
            max_tokens: 1024,
          });

          const reply = completion.choices[0].message.content ?? "";
          return Response.json({ reply });
        } catch (error) {
          const msg = (error as Error).message;
          return Response.json({ error: msg }, { status: 500 });
        }
      },
    },
  },

  development: { hmr: true },
});

console.log("🤖 AI Chat running at http://localhost:3000");
