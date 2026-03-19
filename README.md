# 🤖 AI Chat App

A fast, free AI chat app built with [Bun](https://bun.sh), [Groq](https://groq.com), and vanilla JavaScript. Runs Llama 3.3 70B — one of the most capable open-source models — completely free.

![AI Chat App](https://img.shields.io/badge/Powered%20by-Groq-orange?style=flat-square) ![Model](https://img.shields.io/badge/Model-Llama%203.3%2070B-blue?style=flat-square) ![Runtime](https://img.shields.io/badge/Runtime-Bun-black?style=flat-square)

## Features

- 💬 Multi-turn conversations with full memory
- 🌙 Dark / light mode toggle (saved across sessions)
- ⚡ Blazing fast responses via Groq's inference API
- 🎨 Clean, professional chat UI with avatars and timestamps
- 💡 Suggestion chips to get started quickly
- 🔒 API key stays on the server — never exposed to the browser

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/joseidd/my-first-ai-app
cd my-first-ai-app
```

### 2. Install dependencies

```bash
bun install
```

### 3. Add your free API key

Get a free Groq API key at [console.groq.com](https://console.groq.com/keys) — no credit card required.

```bash
cp .env.example .env
```

Open `.env` and add your key:

```
GROQ_API_KEY=your-groq-api-key-here
```

### 4. Run the app

```bash
bun run index.ts
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
my-first-ai-app/
├── index.ts        # Bun server + Groq API route
├── index.html      # Chat UI (HTML + CSS + JS)
├── .env            # Your API key (never committed)
├── .env.example    # Template for new users
└── package.json
```

## Tech Stack

| Layer    | Technology |
|----------|-----------|
| Runtime  | [Bun](https://bun.sh) |
| AI Model | Llama 3.3 70B via [Groq](https://groq.com) |
| Frontend | Vanilla HTML / CSS / JS |
| Server   | `Bun.serve()` |

## Customization

To change the AI's personality, edit the `systemInstruction` in `index.ts`:

```ts
{ role: "system", content: "You are a ..." }
```

To swap the model, change the `model` field to any supported [Groq model](https://console.groq.com/docs/models).
