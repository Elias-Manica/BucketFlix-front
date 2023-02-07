import { Container, Text, TextInfos } from "./styles";

export default function InfosContainer({ data }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <Container>
      {data.tagline && <Text>{data.tagline}</Text>}
      {data.budget && (
        <TextInfos>Orçamento: {formatter.format(data.budget)}</TextInfos>
      )}
      {data.release_date && (
        <TextInfos>Data de lançamento: {data.release_date}</TextInfos>
      )}

      {data.popularity && (
        <TextInfos>Nota popular: {data.vote_average.toFixed(1)}</TextInfos>
      )}
    </Container>
  );
}
