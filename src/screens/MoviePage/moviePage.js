import { useEffect, useState, useRef } from "react";

import { useParams } from "react-router-dom";

import Header from "../../components/Header/header";

import { getMovieSpecific } from "../../services/movieService";

import {
  Container,
  ContainerComment,
  ContainerInfos,
  DontLoginText,
  View,
} from "./styles";

import Swal from "sweetalert2";

import ShowMovie from "../../components/ShowMovie/showMovie";
import InfosContainer from "../../components/InfosContainer/infosContainer";
import Comments from "../../components/Comments/comments";

export default function MoviePage() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const inputRef = useRef(null);

  const urlProfile = JSON.parse(localStorage.getItem("bucketflix"));

  async function getData() {
    try {
      const response = await getMovieSpecific(id);

      setData(response.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Erro ao carregar dados!",
      });
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <ShowMovie data={data} inputRef={inputRef} />
        <View>
          <ContainerComment>
            {!urlProfile ? (
              <DontLoginText>Faça login para ver os comentários</DontLoginText>
            ) : (
              <Comments inputRef={inputRef} />
            )}
          </ContainerComment>
          <ContainerInfos>
            <InfosContainer data={data} />
          </ContainerInfos>
        </View>
      </Container>
    </>
  );
}
