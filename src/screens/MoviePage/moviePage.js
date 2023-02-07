import { useEffect, useState, useRef, useCallback } from "react";

import { useParams } from "react-router-dom";

import Header from "../../components/Header/header";

import loadImage from "../../assets/images/loading.gif";

import {
  getMovieRecommended,
  getMovieSpecific,
} from "../../services/movieService";

import {
  Container,
  ContainerComment,
  ContainerCommentTwo,
  ContainerInfos,
  COntainerLoading,
  DontLoginText,
  Image,
  View,
} from "./styles";

import Swal from "sweetalert2";

import ShowMovie from "../../components/ShowMovie/showMovie";
import InfosContainer from "../../components/InfosContainer/infosContainer";
import Comments from "../../components/Comments/comments";
import { getCommentsMovie } from "../../services/apiService";
import ScrollMovies from "../../components/ScroolMovies/scrollMovies";

export default function MoviePage() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadPage, setLoadPage] = useState(false);
  const [listReccomend, setListReccomend] = useState([]);
  const inputRef = useRef(null);

  const urlProfile = JSON.parse(localStorage.getItem("bucketflix"));

  const getData = useCallback(async () => {
    setLoadPage(true);
    try {
      const response = await getMovieSpecific(id);

      setData(response.data);
      const reccomended = await getMovieRecommended(id);
      console.log(
        { list: reccomended.data, tittle: "Recomendados" },
        " recommende"
      );
      setListReccomend([{ list: reccomended.data, tittle: "Recomendados" }]);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Erro ao carregar dados!",
      });
    }
    setLoadPage(false);
  }, [id]);

  const getComment = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getCommentsMovie(urlProfile.token, id);

      setComment(response.data);
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
  }, [id]);

  useEffect(() => {
    getData();
    if (urlProfile) {
      getComment();
    }
  }, [id, getData, getComment]);

  return (
    <>
      <Container>
        <Header />
        {loadPage ? (
          <COntainerLoading>
            <Image src={loadImage} />
          </COntainerLoading>
        ) : (
          <>
            <ShowMovie data={data} inputRef={inputRef} />
            <View>
              <ContainerComment>
                {!urlProfile ? (
                  <DontLoginText>
                    Faça login para ver os comentários
                  </DontLoginText>
                ) : (
                  <Comments
                    inputRef={inputRef}
                    data={comment}
                    loading={loading}
                    getComment={getComment}
                    movieid={id}
                  />
                )}
              </ContainerComment>
              <ContainerInfos>
                <InfosContainer data={data} />
                {listReccomend.map((value, index) => (
                  <ScrollMovies
                    key={index}
                    tittle={value.tittle}
                    list={value.list}
                  />
                ))}
              </ContainerInfos>
              <ContainerCommentTwo>
                {!urlProfile ? (
                  <DontLoginText>
                    Faça login para ver os comentários
                  </DontLoginText>
                ) : (
                  <Comments
                    inputRef={inputRef}
                    data={comment}
                    loading={loading}
                    getComment={getComment}
                    movieid={id}
                  />
                )}
              </ContainerCommentTwo>
            </View>
          </>
        )}
      </Container>
    </>
  );
}
