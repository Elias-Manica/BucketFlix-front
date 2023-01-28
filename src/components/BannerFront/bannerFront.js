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
  console.log(data, " data");
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
              <Button>Ver informações +</Button>
              <ButtonComment>Adicionar comentário</ButtonComment>
            </ContainerButtons>
          </ViewStylesHorizontal>
        </ViewStyles>
      </Container>
    </>
  );
}
