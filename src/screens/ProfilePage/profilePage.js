import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../../components/Header/header";

import {
  ButtonComment,
  Container,
  ContainerEmpty,
  ContainerMovie,
  FirstContainer,
  ImageProfile,
  Text,
  TextEmpty,
  TopProfile,
  ViewTop,
} from "./styles";

import { getUserPlaylist, getwatchmovie } from "../../services/apiService";

import Swal from "sweetalert2";
import ScrollMyMovies from "../../components/ScrollMyMovies/scrollMyMovies";

export default function ProfilePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [urlImg, setUrlImg] = useState("");
  const [name, setName] = useState("");
  const [exist, setExist] = useState(false);
  const [movieLiked, setMovieLiked] = useState([]);
  const [watchMovies, setWatchMovies] = useState([]);

  const urlProfile = JSON.parse(localStorage.getItem("bucketflix"));

  const getData = useCallback(async () => {
    try {
      const response = await getUserPlaylist(id);

      setUrlImg(response.data.pictureUrl);
      setName(response.data.username);
      setMovieLiked(response.data.listmovies);
    } catch (error) {
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
      setExist(true);
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
      <Container>
        <Header />
        <ViewTop>
          {exist ? (
            <Text>Nenhum usuário encontrado</Text>
          ) : (
            <>
              {urlProfile && (
                <>
                  <TopProfile>
                    <FirstContainer>
                      <ImageProfile src={urlImg} />
                      {Number(urlProfile.userid) === Number(id) ? (
                        <Text>Meu perfil</Text>
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
                      <ScrollMyMovies tittle="Minha lista" list={movieLiked} />
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
                    {watchMovies.length > 0 ? (
                      <ScrollMyMovies
                        tittle="Assistidos"
                        list={watchMovies}
                        isWatch={true}
                      />
                    ) : (
                      <ContainerEmpty>
                        {Number(urlProfile.userid) === Number(id) ? (
                          <TextEmpty>
                            Você não adicionou nenhum filme a sua lista de
                            assistidos :|{" "}
                          </TextEmpty>
                        ) : (
                          <TextEmpty>
                            Este usuário não tem nenhum filme assistido :|
                          </TextEmpty>
                        )}
                      </ContainerEmpty>
                    )}
                  </ContainerMovie>
                </>
              )}
            </>
          )}
        </ViewTop>
      </Container>
    </>
  );
}
