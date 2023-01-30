import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  ButtonComment,
  Container,
  ContainerButtons,
  ContainerInfos,
  Tittle,
  ViewDate,
  ViewDescription,
  ViewGrade,
  ViewStyles,
  ViewStylesHorizontal,
  ViewTime,
} from "./styles";

import {
  addMovieInDB,
  likeMovie,
  movieIsLiked,
  removeMovie,
} from "../../services/apiService";

import Swal from "sweetalert2";
import { ThreeDots } from "react-loader-spinner";

export default function ShowMovie({ data, inputRef }) {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  const urlProfile = JSON.parse(localStorage.getItem("bucketflix"));

  if (urlProfile) {
    movieIsInLis();
  }

  async function addMovie() {
    if (!urlProfile) {
      navigate("/login");
      return;
    }
    if (!isLiked) {
      setLoading(true);
      try {
        await likeMovie(urlProfile.token, data.id);
        setIsLiked(true);
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
      setLoading(false);
    } else {
      setLoading(true);
      try {
        await removeMovie(urlProfile.token, isLiked);
        setIsLiked(false);
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
      setLoading(false);
    }
  }

  async function movieIsInLis() {
    try {
      const response = await movieIsLiked(urlProfile.token, data.id);
      setIsLiked(response.data.id);
    } catch (error) {
      setIsLiked(false);
    }
  }

  useEffect(() => {
    if (urlProfile) {
      addMovieInDB(urlProfile.token, data.id);
      return;
    }
  }, [urlProfile, data.id]);

  return (
    <>
      <Container img={data.backdrop_path}>
        <ViewStyles>
          <ViewStylesHorizontal
            isBig={
              data.overview
                ? data.overview.length > 550
                  ? true
                  : false
                : false
            }
          >
            <Tittle>{data.title}</Tittle>
            <ContainerInfos>
              <ViewGrade>
                {data.vote_average
                  ? data.vote_average.toFixed(2)
                  : data.vote_average}{" "}
                pontos
              </ViewGrade>
              <ViewDate>
                {data.release_date
                  ? new Date(data.release_date).getFullYear()
                  : data.release_date}
              </ViewDate>
              <ViewTime>{data.runtime} minutos</ViewTime>
            </ContainerInfos>
            <ViewDescription>{data.overview}</ViewDescription>
            <ContainerButtons>
              <Button onClick={addMovie}>
                {isLiked > 0 ? (
                  loading ? (
                    <ThreeDots color="black" height={40} width={40} />
                  ) : (
                    <p>Remover da minha lista</p>
                  )
                ) : loading ? (
                  <ThreeDots color="black" height={40} width={40} />
                ) : (
                  <p>Adicionar na minha lista</p>
                )}
              </Button>
              <ButtonComment
                onClick={() => {
                  if (!urlProfile) {
                    navigate("/login");
                    return;
                  }
                  inputRef.current.focus();
                }}
              >
                Adicionar comentário
              </ButtonComment>
            </ContainerButtons>
          </ViewStylesHorizontal>
        </ViewStyles>
      </Container>
    </>
  );
}
