import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../../components/Header/header";

import {
  ButtonComment,
  Container,
  ContainerEmpty,
  ContainerMovie,
  FirstContainer,
  ImageMovie,
  ImageProfile,
  Text,
  TextEmpty,
  TopProfile,
  ViewTop,
} from "./styles";

import { getUserPlaylist } from "../../services/apiService";

import Swal from "sweetalert2";

export default function ProfilePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [urlImg, setUrlImg] = useState("");
  const [name, setName] = useState("");
  const [exist, setExist] = useState(false);
  const [movieLiked, setMovieLiked] = useState([]);

  const urlProfile = JSON.parse(localStorage.getItem("bucketflix"));

  async function getData() {
    try {
      const response = await getUserPlaylist(urlProfile.token, id);

      setUrlImg(response.data.pictureUrl);
      setName(response.data.username);
      setMovieLiked(response.data.listmovies);
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
        setExist(true);
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
  }

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <>
      <Container>
        <Header />
        <ViewTop>
          {exist ? (
            <Text>Nenhum usuário encontrado</Text>
          ) : (
            <>
              <TopProfile>
                <FirstContainer>
                  <ImageProfile src={urlImg} />
                  {Number(urlProfile.userid) === Number(id) ? (
                    <Text>Minha lista</Text>
                  ) : (
                    <Text>{name}</Text>
                  )}
                </FirstContainer>
                {Number(urlProfile.userid) === Number(id) && (
                  <ButtonComment onClick={() => navigate("/")}>
                    Adicionar mais filmes
                  </ButtonComment>
                )}
              </TopProfile>
              <ContainerMovie>
                {movieLiked.length > 0 ? (
                  movieLiked.map((item, index) => (
                    <ImageMovie
                      key={index}
                      src={`https://image.tmdb.org/t/p/w300${item.movies.poster_path}`}
                      onClick={() => navigate(`/movie/${item.movies.movieid}`)}
                    />
                  ))
                ) : (
                  <ContainerEmpty>
                    <TextEmpty>
                      Você não adicionou nenhum filme a sua lista :|{" "}
                    </TextEmpty>
                  </ContainerEmpty>
                )}
              </ContainerMovie>
            </>
          )}
        </ViewTop>
      </Container>
    </>
  );
}
