const express = require("express");
const cors = require("cors");
const http = require("http");
const { WebSocketServer } = require("ws");

const app = express();

/* ===== Middleware ===== */
app.use(
  cors({
    origin: "*", // OK for assignment
  })
);
app.use(express.json());

/* ===== Mock Token Data ===== */
let tokens = [
  {
    id: "1",
    name: "Axiom",
    symbol: "AXM",
    price: 1.23,
    priceChange: 2.1,
    volume: 120000,
    liquidity: 500000,
    marketCap: 1000000,
    age: "2m",
    category: "new",
  },
  {
    id: "2",
    name: "Pulse",
    symbol: "PLS",
    price: 0.45,
    priceChange: -1.4,
    volume: 98000,
    liquidity: 420000,
    marketCap: 780000,
    age: "5m",
    category: "final",
  },
];

/* ===== REST API ===== */
app.get("/api/tokens", (req, res) => {
  res.json(tokens);
});

/* ===== HTTP + WebSocket ===== */
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("WebSocket client connected");

  const interval = setInterval(() => {
    // mock live price update
    tokens = tokens.map((token) => {
      const change = (Math.random() - 0.5) * 0.5;
      const newPrice = +(token.price + change).toFixed(2);

      return {
        ...token,
        price: newPrice,
        priceChange: +((change / token.price) * 100).toFixed(2),
      };
    });

    ws.send(JSON.stringify(tokens));
  }, 3000);

  ws.on("close", () => {
    clearInterval(interval);
    console.log("WebSocket client disconnected");
  });
});

/* ===== START SERVER ===== */
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});