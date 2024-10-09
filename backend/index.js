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
//  getting similar users:

// Login to Instagram before handling requests
const ig = new IgApiClient();

// Function to log in to Instagram
const loginToInstagram = async (username, password) => {
  ig.state.generateDevice(username);
  try {
    await ig.account.login(username, password);
    console.log("Logged into Instagram successfully.");
  } catch (error) {
    throw new Error(`Failed to log in: ${error.message}`);
  }
};

// Endpoint to get user data
app.get("/user-info", async (req, res) => {
  // Instagram login credentials - you can use it...
  const username = "webmind1s"; // Replace with your Instagram username
  const password = "asdf2qwrASDF234@@#$@$@!$"; // Replace with your Instagram password

  // Login to Instagram
  try {
    await loginToInstagram(username, password);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: error.message });
  }

  // Fetch user data
  try {
    const nickname = "simply_sander";
    const userId = await ig.user.getIdByUsername(nickname);
 
    // Use the ig.user method to get user info
    const userInfo = await ig.user.info(userId);

    // Send the user info as a response
    res.json(userInfo);
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    res.status(500).send("Error fetching user data");
  }
});
// // https://www.instagram.com/graphql/query/?query_id=17845312237175864&variables={"id":"210412485"}
// // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36

// Use the provided Instagram cookie
const instagramCookie = `ig_nrcb=1; datr=sxUBZxNp0EPhkFnYLBY0-gFt; ig_did=2C42E4C3-0ABF-448B-91B1-30F1A004D2D0; mid=ZwEVtQAEAAEL8Bzv3K0zW9KT8Lrj; dpr=1; csrftoken=RLFcXjjaMgrli2Zp2IYdclFqXPx0xvKD; ds_user_id=61933666476; ps_l=1; ps_n=1; shbid="15080\x2C61933666476\x2C1759864412:01f72461f836edbb066734973f0e64891102ee25d889ffd4bb8e5a83cc9b116f83d36dbc"; shbts="1728328412\x2C61933666476\x2C1759864412:01f7fe1f80a35acd8a1435edcb532f5622c0a09337be2320a7257281ae98af4cd120592a"; sessionid=61933666476%3AxbCORvcaUdeJiq%3A17%3AAYch2SMr_w6Hajpf49qtB-El1ulTJf4dMu8ekDeFig; wd=1391x496; rur="LDC\x2C61933666476\x2C1760039126:01f76677487692af10d70d6a73c2351d8f6db4e195a7c40083b3cbe9d7685f70e747b3ad"`;

// Endpoint to get similar users
app.get("/similar-users", async (req, res) => {
  const queryParams = {
    query_id: "17845312237175864", // Query ID for similar users
    variables: JSON.stringify({ id: "210412485" }), // User ID for fetching similar users
  };

  const headers = {
    Accept: "application/json",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
    Cookie: instagramCookie, // Use the provided static cookie
  };

  try {
    const response = await axios.get(
      `https://www.instagram.com/graphql/query/`,
      {
        params: queryParams,
        headers: headers,
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching similar users:", error.message);
    res.status(500).send("Error fetching similar users");
  }
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
