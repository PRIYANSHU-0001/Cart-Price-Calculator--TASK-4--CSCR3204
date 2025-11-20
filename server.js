const express = require("express");
const app = express();

app.use(express.json());

// POST Route
app.post("/cart/total", (req, res) => {
  const items = req.body.items;

  if (!items || !Array.isArray(items)) {
    return res.status(400).json({ error: "Items array required" });
  }

  let total = 0;

  for (let item of items) {
    total += item.price * item.qty;
  }

  res.json({ total });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
