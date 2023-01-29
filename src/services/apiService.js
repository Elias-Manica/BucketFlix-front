import axios from "axios";

const BASE_URL = "http://localhost:4000";

async function login(body) {
  const response = await axios.post(`${BASE_URL}/sign-in`, body);

  return response;
}

export { login };
