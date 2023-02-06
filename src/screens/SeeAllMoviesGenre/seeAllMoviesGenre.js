import { useNavigate } from "react-router-dom";

import {
  Container,
  ContainerInfos,
  FirstContainer,
  TopProfile,
  Text,
  ViewAllMovies,
  ContainerEmpty,
  TextEmpty,
  Image,
  ContainerMovie,
  ContainerLoading,
  TextNotFOund,
} from "./styles";

import Header from "../../components/Header/header";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ThreeDots } from "react-loader-spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  getMoviesPagination,
  getPopularMoviesPagination,
  getTopRatedPagination,
} from "../../services/movieService";

export default function SeeAllMoviesGenre() {
  const { id } = useParams();
  const [movieLiked, setMovieLiked] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      if (!Number(id)) {
        if (id === "Melhores-avaliados") {
          const response = await getTopRatedPagination(1);
          setMovieLiked(response[0].list.results);
          setLoading(false);
          return;
        } else {
          const response = await getPopularMoviesPagination(1);
          setMovieLiked(response[0].list.results);
          setLoading(false);
          return;
        }
      }
      const response = await getMoviesPagination(id, 1);

      setMovieLiked(response[0].list.results);
      setLoading(false);
    } catch (error) {
      if (error.response.data.msg) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.response.data.msg}`,
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
        return;
      }
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Algo de errado aconteceu, tente novamente mais tarde",
        showConfirmButton: false,
        timer: 1500,
      });
      setLoading(false);
    }
  }, [id]);

  async function getMovies() {
    try {
      if (!Number(id)) {
        if (id === "Melhores-avaliados") {
          const response = await getTopRatedPagination(page);
          return response[0].list.results;
        } else {
          const response = await getPopularMoviesPagination(page);
          return response[0].list.results;
        }
      }
      const response = await getMoviesPagination(id, page);

      return response[0].list.results;
    } catch (error) {}
  }

  const fetchData = async () => {
    const response = await getMovies();

    setMovieLiked([...movieLiked, ...response]);

    if (response.length === 0 || response.length < 10) {
      setHasMore(false);
    }

    setPage(page + 1);
  };

  useEffect(() => {
    getData();
    getMovies();
  }, [id, getData]);

  return (
    <>
      <Header />
      <Container>
        <>
          <TopProfile>
            <FirstContainer>
              <ContainerInfos>
                <Text></Text>
              </ContainerInfos>
            </FirstContainer>
          </TopProfile>
          <ViewAllMovies>
            <InfiniteScroll
              dataLength={movieLiked.length}
              next={fetchData}
              hasMore={hasMore}
              loader={
                movieLiked.length === 0 ? null : (
                  <ContainerLoading>
                    <ThreeDots color="white" width={40} height={40} />
                  </ContainerLoading>
                )
              }
              endMessage={<TextNotFOund>A lista termina aqui :| </TextNotFOund>}
            >
              {loading ? (
                <>
                  <ThreeDots color="white" width={40} height={40} />
                </>
              ) : movieLiked.length > 0 ? (
                movieLiked.map((item, index) => (
                  <ContainerMovie
                    key={index}
                    onClick={() => navigate(`/movie/${item.id}`)}
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                      alt={item.original_title}
                    />
                  </ContainerMovie>
                ))
              ) : (
                <ContainerEmpty>
                  <TextEmpty>Nenhum filme na lista foi encontrado :|</TextEmpty>
                </ContainerEmpty>
              )}
            </InfiniteScroll>
          </ViewAllMovies>
        </>
      </Container>
    </>
  );
}
