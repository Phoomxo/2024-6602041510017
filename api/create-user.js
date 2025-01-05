const axios = require("axios");

const API_URL = "http://localhost:1336/api/auth/local/register";
const AUTH_TOKEN = "Bearer 50e71b9ad30e4a517c68e02fa3e08c46c505c129722ea644d774ee5179c9794f541c3a63a37e1e0ce49ca1ad2c463491dbd8a6a88cea6b10bd3ee7ef3feb7dfbee82fe5b5d6d23a3afa0cd1b6b29826df833f78425c47a9c3022b6fe075c0050c1150ac8478b389a6fee1e6245073ef62a031690c30362a29a82d19b81078d81";

const createUser = async (username, email, password) => {
  try {
    const response = await axios.post(
      API_URL,
      { username, email, password },
      { headers: { Authorization: AUTH_TOKEN } }
    );
    
    const { user, jwt } = response.data;
    console.log("User profile:", user);
    console.log("User token:", jwt);
  } catch (error) {
    console.error("An error occurred:", error.response?.data || error.message);
  }
};

createUser("Kapman1", "test@test1.com", "Password1");
