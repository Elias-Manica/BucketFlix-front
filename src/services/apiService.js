import axios from "axios";

const BASE_URL = "http://localhost:4000";

async function login(body) {
  const response = await axios.post(`${BASE_URL}/sign-in`, body);

  return response;
}

async function logout(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${BASE_URL}/logout`, {}, config);

  return response;
}

async function getUserPlaylist(token, userid) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${BASE_URL}/user?userid=${userid}`, config);

  return response;
}

export { login, logout, getUserPlaylist };
