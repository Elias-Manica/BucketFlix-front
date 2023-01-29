import { GlobalStyle } from "../assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "./HomeScreen/homeScreen";
import MoviePage from "./MoviePage/moviePage";
import ProfilePage from "./ProfilePage/profilePage";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/user/:id" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
