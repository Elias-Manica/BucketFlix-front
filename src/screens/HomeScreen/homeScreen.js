import { useState, useEffect } from "react";

import loadImage from "../../assets/images/loading.gif";

import {
  getAllData,
  getPopularMovies,
  getMovieSpecific,
} from "../../services/movieService";

import { ContainerLOading, ContainerMovies, Image } from "./styles";

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import ScrollMovies from "../../components/ScroolMovies/scrollMovies";
import BannerFront from "../../components/BannerFront/bannerFront";

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [banner, setBanner] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getBanner() {
    setLoading(true);
    try {
      const response = await getPopularMovies();
      let randomindex = Math.floor(
        Math.random() * (response[0].list.results.length - 1)
      );
      let movie = response[0].list.results[randomindex];

      const details = await getMovieSpecific(movie.id);

      setBanner(details.data);
    } catch (error) {}
    setLoading(false);
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
      {loading ? (
        <ContainerLOading>
          <Image src={loadImage} />
        </ContainerLOading>
      ) : (
        <>
          <BannerFront data={banner} />
          <ContainerMovies>
            {data.map((value, index) => (
              <ScrollMovies
                key={index}
                tittle={value.tittle}
                list={value.list}
              />
            ))}
          </ContainerMovies>
          <Footer />
        </>
      )}
    </>
  );
}
