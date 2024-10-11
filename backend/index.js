const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const cors = require("cors");
const { IgApiClient } = require("instagram-private-api");

dotenv.config();
const app = express();

// Use CORS
app.use(cors());
app.use(express.json()); // For parsing application/json

// Instagram login
const ig = new IgApiClient();
const loginToInstagram = async (username, password) => {
  ig.state.generateDevice(username);
  try {
    await ig.account.login(username, password);
    console.log("Logged into Instagram successfully.");
  } catch (error) {
    throw new Error(`Failed to log in: ${error.message}`);
  }
};

// Use the provided Instagram cookie
const instagramCookie = `ig_did=D77430CA-59FF-4B82-B2F7-C820E11669FC; ig_nrcb=1; mid=ZsQjiAAEAAHtKEJP2briyAwN-GNF; datr=iCPEZlFvE2vnyfnlBZ88r9tV; ps_l=1; ps_n=1; shbid="15080\x2C61933666476\x2C1759735324:01f7d38c6e40b771400dc1a7ede4fddb1f56ed5df24ef0c51cc9f6b95bf2436b1d69b99e"; shbts="1728199324\x2C61933666476\x2C1759735324:01f79bf929d0151b5672e09e5c5b8a633d2ea793f820ad3a327f8ece62a03c7414a67ad8"; dpr=1; csrftoken=VO74vXZfBJWS91CirIS9GrxGyHZOuTMY; ds_user_id=61933666476; locale=en_US; sessionid=61933666476%3AvNkYWDwFHfDZTI%3A6%3AAYeCdgNjTNNN81YhdMnlZyWSbmbQUDy5OGNsnVTQrg; wd=1540x453; rur="LDC\x2C61933666476\x2C1760088242:01f7dd0b82b3fc34b1cc65c4c70f0ed93d3000d2d4d62d00db92c829bd198b2555ab2213"`;

// Combined route to fetch user info and similar users
app.get("/user-info/:nickname", async (req, res) => {
  console.log(
    `Thanks!!! just I don't wanna HARAM money or something, so no need for the code that would be against their TOS(instagram...)`
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
