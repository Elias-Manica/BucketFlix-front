import axios from "axios";

const API_KEY = "api_key=282f0a136717fde5f2065214b2d08a25";
const API_BASE = "https://api.themoviedb.org/3";
const LANGUAGE = "language=pt-BR";

async function getTopRated() {
  const response = await axios.get(
    `${API_BASE}/movie/top_rated?${API_KEY}&${LANGUAGE}&sort_by=vote_count.desc`
  );

  const body = {
    tittle: "Melhores avaliados",
    list: response.data,
  };
  return [body];
}

async function getPopularMovies() {
  const response = await axios.get(
    `${API_BASE}/movie/popular?${API_KEY}&${LANGUAGE}&sort_by=vote_count.desc`
  );

  const body = {
    tittle: "Mais populares",
    list: response.data,
  };
  return [body];
}

async function getActionMovies() {
  const response = await axios.get(
    `${API_BASE}/discover/movie?with_genres=28&${API_KEY}&${LANGUAGE}&sort_by=vote_count.desc`
  );

  const body = {
    tittle: "Ação",
    list: response.data,
  };
  return [body];
}

async function getComedyMovies() {
  const response = await axios.get(
    `${API_BASE}/discover/movie?with_genres=35&${API_KEY}&${LANGUAGE}&sort_by=vote_count.desc`
  );

  const body = {
    tittle: "Comédia",
    list: response.data,
  };
  return [body];
}

async function getHorrorMovies() {
  const response = await axios.get(
    `${API_BASE}/discover/movie?with_genres=27&${API_KEY}&${LANGUAGE}&sort_by=vote_count.desc`
  );

  const body = {
    tittle: "Terror",
    list: response.data,
  };
  return [body];
}

async function getRomanceMovies() {
  const response = await axios.get(
    `${API_BASE}/discover/movie?with_genres=10749&${API_KEY}&${LANGUAGE}&include_adult=false&sort_by=vote_count.desc`
  );

  const body = {
    tittle: "Romance",
    list: response.data,
  };
  return [body];
}

async function getMovieSpecific(movieid) {
  const response = await axios.get(
    `${API_BASE}/movie/${movieid}?${API_KEY}&${LANGUAGE}`
  );

  return response;
}

async function getMovieByName(name) {
  const response = await axios.get(
    `${API_BASE}/search/movie?query=${name}&${API_KEY}&${LANGUAGE}`
  );

  return response;
}

async function getAllData() {
  const top = await getTopRated();
  const popular = await getPopularMovies();
  const action = await getActionMovies();
  const comedy = await getComedyMovies();
  const horror = await getHorrorMovies();
  const romance = await getRomanceMovies();

  const response = [
    ...top,
    ...popular,
    ...action,
    ...comedy,
    ...romance,
    ...horror,
  ];

  return response;
}

export {
  getAllData,
  getTopRated,
  getPopularMovies,
  getActionMovies,
  getComedyMovies,
  getHorrorMovies,
  getRomanceMovies,
  getMovieSpecific,
  getMovieByName,
};
