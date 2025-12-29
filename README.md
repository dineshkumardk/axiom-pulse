🟣 Axiom Pulse – Token Discovery Dashboard

A pixel-clean, high-performance token discovery dashboard inspired by axiom.trade/pulse, built using Next.js 14, TypeScript, and a Node.js REST + WebSocket backend.

🚀 Live Demo
🔹 Frontend (Vercel)

👉 https://axiom-pulse-ksdk-g669b5thd-dineshkumars-projects-9d3fd9d0.vercel.app/pulse

🔹 Backend (Render)

👉 https://axiom-pulse.onrender.com

📦 GitHub Repository

👉 https://github.com/dineshkumardk/axiom-pulse

✨ Features
Core Features

Token discovery table (All / New Pairs / Final Stretch / Migrated)

Sorting by:

Price

24h %

Volume

Liquidity

Market Cap

Live price updates (WebSocket mock)

Skeleton loading & shimmer states

Responsive layout (down to 320px)

Smooth hover & interaction effects

UI / UX

Color-coded price changes (green/red)

Tooltips for financial metrics

Clean, minimal, trading-style UI

No layout shifts (CLS-safe)

🛠️ Tech Stack
Frontend

Next.js 14 (App Router)

TypeScript (strict)

Tailwind CSS

Redux Toolkit (state management)

React Query (data fetching)

Atomic Design Architecture

Backend

Node.js

Express

REST API

WebSocket (ws) for live price updates

Deployment

Frontend: Vercel

Backend: Render

🧱 Project Structure
axiom-pulse/
├── src/
│   ├── app/                # Next.js App Router
│   ├── components/         # Atomic UI (molecules / organisms / ui)
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # API helpers
│   ├── store/              # Redux Toolkit store
│   └── types/              # TypeScript types
├── server/                 # REST + WebSocket backend
└── README.md

🔄 API Details
REST API
GET /api/tokens


Returns token list used in the table.

WebSocket
wss://axiom-pulse.onrender.com


Sends live token price updates every few seconds

Used to simulate real-time market behavior

⚙️ Environment Variables
Frontend (.env.local)
NEXT_PUBLIC_API_URL=https://axiom-pulse.onrender.com

▶️ Local Development
Frontend
npm install
npm run dev

Backend
cd server
npm install
node index.js

📈 Performance

Lighthouse score ≥ 90 (mobile & desktop)

Memoized components

Optimized re-renders

No blocking layouts

Atomic architecture for maximum reusability

React Query + Redux separation for async vs shared state

Mock WebSocket updates to simulate real-time trading data

Strict TypeScript for safer scaling

👤 Author
Dineshkumar D
Frontend / Full-Stack Developer
GitHub: https://github.com/dineshkumardk