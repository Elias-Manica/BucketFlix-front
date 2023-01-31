import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import {
  Container,
  ContainerMovie,
  ContainerRow,
  Image,
  Row,
  Tittle,
  ViewLeft,
  ViewRight,
} from "./styles";

export default function ScrollMyMovies({ tittle, list }) {
  const [margin, setMargin] = useState(0);
  const navigate = useNavigate();

  function passToTheLeft() {
    let sizeWalk = margin + Math.round(window.innerWidth / 2); //verifico quanto posso andar para o lado (metade da tela do usuário)
    if (sizeWalk > 0) {
      //se já cheguei na esquerda deixo o scroll no inicio (0)
      sizeWalk = 0;
    }
    setMargin(sizeWalk);
  }

  function passToTheRight() {
    let sizeWalk = margin - Math.round(window.innerWidth / 2); //verifico quanto posso andar para o lado (metade da tela do usuário)
    let lengthList = list.length * 150; //largura lista (150 é o tamanho da imagem + padding);
    if (window.innerWidth - lengthList > sizeWalk) {
      sizeWalk = window.innerWidth - lengthList - 60;
    }
    setMargin(sizeWalk);
  }
  //TODO - QUANDO TENHO POUCOS FILMES A LISTA SE MEXE PRA DIREITA MESMO ASSIM
  return (
    <>
      <Container>
        <Tittle>{tittle}</Tittle>

        <ViewLeft onClick={passToTheLeft}>
          <AiOutlineArrowLeft />
        </ViewLeft>
        <ViewRight onClick={passToTheRight}>
          <AiOutlineArrowRight />
        </ViewRight>
        <ContainerRow>
          <Row pass={margin} size={list.length * 150}>
            {list.length > 0
              ? list.map((item, index) => (
                  <ContainerMovie
                    key={index}
                    onClick={() => navigate(`/movie/${item.movieid}`)}
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/w300${item.movies.poster_path}`}
                      alt={item.movies.original_title}
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
