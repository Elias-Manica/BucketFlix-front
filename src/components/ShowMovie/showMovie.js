import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  ButtonComment,
  Container,
  ContainerButtons,
  ContainerIcon,
  ContainerInfos,
  ContainerStar,
  Modal,
  Star,
  StarFilled,
  TextButton,
  TextModal,
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
  addwatchmovie,
  likeMovie,
  movieIsLiked,
  movieIsWatched,
  removeMovie,
  removewatchmovie,
} from "../../services/apiService";

import Swal from "sweetalert2";
import { ThreeDots } from "react-loader-spinner";

import { BiCheckCircle, BiHappyAlt } from "react-icons/bi";

import { IoIosStarOutline, IoIosStar, IoMdSend } from "react-icons/io";

export default function ShowMovie({ data, inputRef }) {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isWatched, setIsWatched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadWat, setLoadWat] = useState(false);
  const [rated, setRated] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [load, setLoad] = useState(true);
  const [loadList, setLoadList] = useState(true);

  const urlProfile = JSON.parse(localStorage.getItem("bucketflix"));

  if (urlProfile) {
    movieIsInLis();
    movieIsWatch();
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
      }
      setLoading(false);
    }
  }

  async function watchMovie() {
    if (!urlProfile) {
      navigate("/login");
      return;
    }
    if (rated === 0) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Escolha a sua nota clicando nas estrelas",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    if (!isWatched) {
      setLoadWat(true);
      try {
        await addwatchmovie(urlProfile.token, data.id, rated);
        setIsWatched(true);
        setShowModal(false);
      } catch (error) {
        if (error.response.data.msg) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: `${error.response.data.msg}`,
            showConfirmButton: false,
            timer: 1500,
          });
          setLoadWat(false);
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
      setLoadWat(false);
    }
  }

  async function removeMovielList() {
    setLoadWat(true);
    try {
      await removewatchmovie(urlProfile.token, data.id);
      setIsWatched(false);
    } catch (error) {
      if (error.response.data.msg) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.response.data.msg}`,
          showConfirmButton: false,
          timer: 1500,
        });
        setLoadWat(false);
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
    setLoadWat(false);
  }

  async function movieIsInLis() {
    try {
      const response = await movieIsLiked(urlProfile.token, data.id);
      setIsLiked(response.data.id);
    } catch (error) {
      setIsLiked(false);
    }
    setLoadList(false);
  }

  async function movieIsWatch() {
    try {
      await movieIsWatched(urlProfile.token, data.id);
      setIsWatched(true);
    } catch (error) {
      setIsWatched(false);
    }
    setLoad(false);
  }

  useEffect(() => {
    if (urlProfile) {
      addMovieInDB(urlProfile.token, data.id);
      return;
    }
    setLoad(false);
    setLoadList(false);
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
                {loadList ? (
                  <ThreeDots color="black" height={20} width={20} />
                ) : isLiked > 0 ? (
                  loading ? (
                    <ThreeDots color="black" height={20} width={20} />
                  ) : (
                    <p>Remover da minha lista</p>
                  )
                ) : loading ? (
                  <ThreeDots color="black" height={20} width={20} />
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
                  if (!isWatched) {
                    setShowModal(!showModal);
                    return;
                  }
                  if (isWatched) {
                    removeMovielList();
                  }
                }}
              >
                {load ? (
                  <ThreeDots color="black" height={20} width={20} />
                ) : isWatched ? (
                  loadWat ? (
                    <ThreeDots color="black" height={20} width={20} />
                  ) : (
                    <>
                      <TextButton>Esse você já assistiu</TextButton>
                      <BiHappyAlt />
                    </>
                  )
                ) : loadWat ? (
                  <ThreeDots color="black" height={20} width={20} />
                ) : (
                  <>
                    <TextButton>Já assistiu?</TextButton>
                    <BiCheckCircle />
                  </>
                )}
              </ButtonComment>
              <Modal isVisible={showModal}>
                <TextModal>Sua avaliação do filme:</TextModal>
                <ContainerStar>
                  {rated === 0 && (
                    <>
                      <Star>
                        <IoIosStarOutline onClick={() => setRated(1)} />
                      </Star>
                      <Star>
                        <IoIosStarOutline onClick={() => setRated(2)} />
                      </Star>
                      <Star>
                        <IoIosStarOutline onClick={() => setRated(3)} />
                      </Star>
                      <Star>
                        <IoIosStarOutline onClick={() => setRated(4)} />
                      </Star>
                      <Star>
                        <IoIosStarOutline onClick={() => setRated(5)} />
                      </Star>
                    </>
                  )}
                  {rated === 1 && (
                    <>
                      <StarFilled>
                        <IoIosStar onClick={() => setRated(1)} />
                      </StarFilled>
                      <Star>
                        <IoIosStarOutline onClick={() => setRated(2)} />
                      </Star>
                      <Star>
                        <IoIosStarOutline onClick={() => setRated(3)} />
                      </Star>
                      <Star>
                        <IoIosStarOutline onClick={() => setRated(4)} />
                      </Star>
                      <Star>
                        <IoIosStarOutline onClick={() => setRated(5)} />
                      </Star>
                    </>
                  )}
                  {rated === 2 && (
                    <>
                      <StarFilled>
                        <IoIosStar onClick={() => setRated(1)} />
                      </StarFilled>
                      <StarFilled>
                        <IoIosStar onClick={() => setRated(2)} />
                      </StarFilled>
                      <Star>
                        <IoIosStarOutline onClick={() => setRated(3)} />
                      </Star>
                      <Star>
                        <IoIosStarOutline onClick={() => setRated(4)} />
                      </Star>
                      <Star>
                        <IoIosStarOutline onClick={() => setRated(5)} />
                      </Star>
                    </>
                  )}
                  {rated === 3 && (
                    <>
                      <StarFilled>
                        <IoIosStar onClick={() => setRated(1)} />
                      </StarFilled>
                      <StarFilled>
                        <IoIosStar onClick={() => setRated(2)} />
                      </StarFilled>
                      <StarFilled>
                        <IoIosStar onClick={() => setRated(3)} />
                      </StarFilled>
                      <Star>
                        <IoIosStarOutline onClick={() => setRated(4)} />
                      </Star>
                      <Star>
                        <IoIosStarOutline onClick={() => setRated(5)} />
                      </Star>
                    </>
                  )}
                  {rated === 4 && (
                    <>
                      <StarFilled>
                        <IoIosStar onClick={() => setRated(1)} />
                      </StarFilled>
                      <StarFilled>
                        <IoIosStar onClick={() => setRated(2)} />
                      </StarFilled>
                      <StarFilled>
                        <IoIosStar onClick={() => setRated(3)} />
                      </StarFilled>
                      <StarFilled>
                        <IoIosStar onClick={() => setRated(4)} />
                      </StarFilled>
                      <Star>
                        <IoIosStarOutline onClick={() => setRated(5)} />
                      </Star>
                    </>
                  )}
                  {rated === 5 && (
                    <>
                      <StarFilled>
                        <IoIosStar onClick={() => setRated(1)} />
                      </StarFilled>
                      <StarFilled>
                        <IoIosStar onClick={() => setRated(2)} />
                      </StarFilled>
                      <StarFilled>
                        <IoIosStar onClick={() => setRated(3)} />
                      </StarFilled>
                      <StarFilled>
                        <IoIosStar onClick={() => setRated(4)} />
                      </StarFilled>
                      <StarFilled>
                        <IoIosStar onClick={() => setRated(5)} />
                      </StarFilled>
                    </>
                  )}
                </ContainerStar>
                <ContainerIcon onClick={watchMovie}>
                  <IoMdSend />
                </ContainerIcon>
              </Modal>
            </ContainerButtons>
          </ViewStylesHorizontal>
        </ViewStyles>
      </Container>
    </>
  );
}
