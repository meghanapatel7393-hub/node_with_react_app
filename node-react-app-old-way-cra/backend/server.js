const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send(
    "Hello from Node.js Backend! THIS PROJECT CREATE OLD WAY USING CRA(create-react-app) TOOL. Now a day use Vite instead."
  );
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
