const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

// Use CORS
app.use(cors());
app.use(express.json()); // For parsing application/json



// Combined route to fetch user info and similar users
app.get("/user-info/:nickname", async (req, res) => {
  console.log(
    `Hello from /user-info profile!!`
  );
});
// images
app.get("/test-endpoint", async (req, res) => {
  res.send(`Hello From The Backend, It works alhamdullah`);
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
