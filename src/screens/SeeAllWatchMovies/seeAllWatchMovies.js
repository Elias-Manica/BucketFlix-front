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
} from "./styles";

import Header from "../../components/Header/header";
import { useParams } from "react-router-dom";
import { getUserPlaylist, getwatchmovie } from "../../services/apiService";
import { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function SeeAllWatchMovies() {
  const { id } = useParams();
  const [urlImg, setUrlImg] = useState("");
  const [name, setName] = useState("");
  const [watchMovies, setWatchMovies] = useState([]);

  const navigate = useNavigate();

  const urlProfile = JSON.parse(localStorage.getItem("bucketflix"));

  const getData = useCallback(async () => {
    try {
      const response = await getUserPlaylist(id);

      setUrlImg(response.data.pictureUrl);
      setName(response.data.username);
    } catch (error) {
      console.log(error);
      if (error.response.data.msg) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.response.data.msg}`,
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Algo de errado aconteceu, tente novamente mais tarde",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [id]);

  const getWatch = useCallback(async () => {
    try {
      const response = await getwatchmovie(id);

      setWatchMovies(response.data);
    } catch (error) {
      if (error.response.data.msg) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.response.data.msg}`,
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Algo de errado aconteceu, tente novamente mais tarde",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [id]);

  useEffect(() => {
    getData();
    getWatch();
  }, [id, getData, getWatch]);

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
                    <Text>Meu perfil</Text>
                  </ContainerInfos>
                ) : (
                  <ContainerInfos>
                    <Text>{name}</Text>
                  </ContainerInfos>
                )}
              </FirstContainer>
            </TopProfile>
            <ViewAllMovies>
              {watchMovies.length > 0 ? (
                watchMovies.map((item, index) => (
                  <ContainerMovie
                    key={index}
                    onClick={() => navigate(`/movie/${item.movieid}`)}
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/w300${item.movie.poster_path}`}
                      alt={item.movie.original_title}
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
            </ViewAllMovies>
          </>
        )}
      </Container>
    </>
  );
}
