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

export default function BannerFront({ data }) {
  const navigate = useNavigate();

  const urlProfile = JSON.parse(localStorage.getItem("bucketflix"));

  let description = data.overview;
  if (description) {
    if (description.length > 200) {
      description = description.substring(0, 200) + "...";
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
            <ViewDescription>{description}</ViewDescription>
            <ContainerButtons>
              <Button
                onClick={() => {
                  navigate(`/movie/${data.id}`);
                }}
              >
                Ver informações +
              </Button>
              <ButtonComment
                onClick={() => {
                  if (!urlProfile) {
                    navigate("/login");
                  }
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
