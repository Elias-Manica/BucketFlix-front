import { useState } from "react";

import { GlobalStyle } from "../assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "./HomeScreen/homeScreen";
import MoviePage from "./MoviePage/moviePage";
import ProfilePage from "./ProfilePage/profilePage";
import LoginPage from "./LoginPage/loginPage";

import TokenAuth from "../context/tokenContext";
import NameAuth from "../context/nameContext";
import ImageAuth from "../context/imageContext";
import IdAuth from "../context/useridContext";
import SeeAllMovies from "./SeeAllMovies/seeAllMovies";
import SeeAllWatchMovies from "./SeeAllWatchMovies/seeAllWatchMovies";
import SeeAllCommentMovies from "./SeeAllComments/seeAllComments";

export default function App() {
  const [token, setToken] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [img, setImg] = useState("");
  const [idUser, setIdUser] = useState("");

  return (
    <>
      <TokenAuth.Provider value={{ token, setToken }}>
        <NameAuth.Provider value={{ nameUser, setNameUser }}>
          <ImageAuth.Provider value={{ img, setImg }}>
            <IdAuth.Provider value={{ idUser, setIdUser }}>
              <GlobalStyle />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<HomeScreen />} />
                  <Route path="/movie/:id" element={<MoviePage />} />
                  <Route path="/user/:id" element={<ProfilePage />} />
                  <Route path="/user/movies/:id" element={<SeeAllMovies />} />
                  <Route
                    path="/user/movies/watch/:id"
                    element={<SeeAllWatchMovies />}
                  />
                  <Route
                    path="/user/movies/comment/:id"
                    element={<SeeAllCommentMovies />}
                  />
                  <Route path="/login" element={<LoginPage />} />
                </Routes>
              </BrowserRouter>
            </IdAuth.Provider>
          </ImageAuth.Provider>
        </NameAuth.Provider>
      </TokenAuth.Provider>
    </>
  );
}
