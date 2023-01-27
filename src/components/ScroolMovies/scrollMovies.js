import { Container, ContainerRow, Image, Tittle } from "./styles";

export default function ScrollMovies({ tittle, list }) {
  console.log(list.results);
  return (
    <>
      <Container>
        <Tittle>{tittle}</Tittle>
        <ContainerRow>
          {list.results.length > 0
            ? list.results.map((item) => (
                <Image
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              ))
            : null}
        </ContainerRow>
      </Container>
    </>
  );
}
