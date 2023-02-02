import { useNavigate } from "react-router-dom";

import {
  Container,
  ContainerInfos,
  FirstContainer,
  ImageProfile,
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
import { getUserPlaylistPagination } from "../../services/apiService";
import { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ThreeDots } from "react-loader-spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function SeeAllMovies() {
  const { id } = useParams();
  const [urlImg, setUrlImg] = useState("");
  const [name, setName] = useState("");
  const [movieLiked, setMovieLiked] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  const urlProfile = JSON.parse(localStorage.getItem("bucketflix"));

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getUserPlaylistPagination(id, 1);

      setUrlImg(response.data.pictureUrl);
      setName(response.data.username);
      setMovieLiked(response.data.listmovies);
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
      const response = await getUserPlaylistPagination(id, page);

      return response.data.listmovies;
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
        {urlProfile && (
          <>
            <TopProfile>
              <FirstContainer>
                <ImageProfile src={urlImg} />
                {Number(urlProfile.userid) === Number(id) ? (
                  <ContainerInfos>
                    <Text>Minha lista</Text>
                  </ContainerInfos>
                ) : (
                  <ContainerInfos>
                    <Text>{name}</Text>
                  </ContainerInfos>
                )}
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
                endMessage={
                  <TextNotFOund>Sua lista termina aqui :| </TextNotFOund>
                }
              >
                {loading ? (
                  <>
                    <ThreeDots color="white" width={40} height={40} />
                  </>
                ) : movieLiked.length > 0 ? (
                  movieLiked.map((item, index) => (
                    <ContainerMovie
                      key={index}
                      onClick={() => navigate(`/movie/${item.movieid}`)}
                    >
                      <Image
                        src={`https://image.tmdb.org/t/p/w300${item.movies.poster_path}`}
                        alt={item.movies.original_title}
                      />
                    </ContainerMovie>
                  ))
                ) : (
                  <ContainerEmpty>
                    {Number(urlProfile.userid) === Number(id) ? (
                      <TextEmpty>
                        Você não adicionou nenhum filme a sua lista :|{" "}
                      </TextEmpty>
                    ) : (
                      <TextEmpty>
                        Este usuário não tem nenhum filme na lista :|
                      </TextEmpty>
                    )}
                  </ContainerEmpty>
                )}
              </InfiniteScroll>
            </ViewAllMovies>
          </>
        )}
      </Container>
    </>
  );
}
