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

async function getUserPlaylist(userid) {
  const response = await axios.get(`${BASE_URL}/user?userid=${userid}`);

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

  const response = await axios.post(`${BASE_URL}/comments`, body, config);

  return response;
}

async function removeComment(token, commentid) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(
    `${BASE_URL}/comments?commentid=${commentid}`,
    config
  );

  return response;
}

async function getUser(name) {
  const response = await axios.get(`${BASE_URL}/user/name?username=${name}`);

  return response;
}

async function movieIsWatched(token, movieid) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(
    `${BASE_URL}/add-movie/watched?movieid=${movieid}`,
    config
  );

  return response;
}

async function addwatchmovie(token, movieid, rating) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const body = {
    movieid: Number(movieid),
    rating: rating,
  };

  const response = await axios.post(
    `${BASE_URL}/add-movie/watched?movieid=${movieid}`,
    body,
    config
  );

  return response;
}

async function removewatchmovie(token, movieid) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(
    `${BASE_URL}/add-movie/watched?movieid=${movieid}`,
    config
  );

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
  removeComment,
  getUser,
  movieIsWatched,
  addwatchmovie,
  removewatchmovie,
};
