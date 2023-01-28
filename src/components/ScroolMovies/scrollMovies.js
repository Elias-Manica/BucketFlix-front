import {
  Container,
  ContainerMovie,
  ContainerRow,
  Image,
  Row,
  Tittle,
} from "./styles";

export default function ScrollMovies({ tittle, list }) {
  return (
    <>
      <Container>
        <Tittle>{tittle}</Tittle>
        <ContainerRow>
          {" "}
          {/*list--area*/}
          <Row>
            {" "}
            {/*list*/}
            {list.results.length > 0
              ? list.results.map((item, index) => (
                  <ContainerMovie key={index}>
                    {" "}
                    {/*list--item*/}
                    <Image
                      src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                      alt={item.original_title}
                    />
                  </ContainerMovie>
                ))
              : null}
          </Row>
        </ContainerRow>
      </Container>
    </>
  );
}
