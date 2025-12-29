const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const tokens = [
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

app.get("/api/tokens", (req, res) => {
  res.json(tokens);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`REST API running at http://localhost:${PORT}`);
});