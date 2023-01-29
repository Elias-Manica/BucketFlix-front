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

export default function ShowMovie({ data, inputRef }) {
  const navigate = useNavigate();

  const urlProfile = JSON.parse(localStorage.getItem("bucketflix"));

  function addMovie() {
    if (!urlProfile) {
      navigate("/login");
    }
  }

  return (
    <>
      <Container img={data.backdrop_path}>
        <ViewStyles>
          <ViewStylesHorizontal>
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
              <Button onClick={addMovie}>+ Minha lista</Button>
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
