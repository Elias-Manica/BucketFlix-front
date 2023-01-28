import { useState, useEffect } from "react";

import {
  getAllData,
  getPopularMovies,
  getMovieSpecific,
} from "../../services/movieService";

import ScrollMovies from "../../components/ScroolMovies/scrollMovies";
import BannerFront from "../../components/BannerFront/bannerFront";
import { ContainerMovies } from "./styles";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [banner, setBanner] = useState([]);
  const [loadingBanner, setLoadingBanner] = useState(false);

  async function getBanner() {
    setLoadingBanner(true);
    try {
      const response = await getPopularMovies();
      let randomindex = Math.floor(
        Math.random() * (response[0].list.results.length - 1)
      );
      let movie = response[0].list.results[randomindex];

      const details = await getMovieSpecific(movie.id);

      setBanner(details.data);
    } catch (error) {}
    setLoadingBanner(false);
  }

  async function getData() {
    try {
      const response = await getAllData();

      setData(response);
    } catch (error) {
      //TODO - FAZER NOTIFICAÇÃO ERRO
      console.log(error);
    }
  }

  useEffect(() => {
    getBanner();
    getData();
  }, []);

  return (
    <>
      <Header />
      {loadingBanner ? null : <BannerFront data={banner} />}
      <ContainerMovies>
        {data.map((value, index) => (
          <ScrollMovies key={index} tittle={value.tittle} list={value.list} />
        ))}
      </ContainerMovies>
      <Footer />
    </>
  );
}
