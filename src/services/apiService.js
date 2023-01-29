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

async function addMovieInDB(token, movieid) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const body = {
    movieid: movieid,
  };
  const response = await axios.post(`${BASE_URL}/add-movie`, body, config);

  return response;
}

async function likeMovie(token, movieid) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const body = {
    movieid: movieid,
  };
  const response = await axios.post(
    `${BASE_URL}/add-movie/favorite`,
    body,
    config
  );

  return response;
}

async function movieIsLiked(token, movieid) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const body = {
    movieid: movieid,
  };
  console.log(config, body);
  const response = await axios.post(
    `${BASE_URL}/add-movie/isfavorite`,
    body,
    config
  );

  return response;
}

async function removeMovie(token, movieid) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(
    `${BASE_URL}/add-movie/favorite?favoriteid=${movieid}`,
    config
  );

  return response;
}

async function getCommentsMovie(token, movieid) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(
    `${BASE_URL}/comments?movieid=${movieid}`,
    config
  );

  return response;
}

async function postCommentsMovie(token, movieid, rating, comment) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const body = {
    movieid: Number(movieid),
    comment: comment,
    rating: rating,
  };

  console.log(body, "body");

  const response = await axios.post(`${BASE_URL}/comments`, body, config);

  return response;
}

export {
  login,
  logout,
  getUserPlaylist,
  addMovieInDB,
  movieIsLiked,
  likeMovie,
  removeMovie,
  getCommentsMovie,
  postCommentsMovie,
};
