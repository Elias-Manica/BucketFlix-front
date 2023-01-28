import { useState } from "react";

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

export default function ScrollMovies({ tittle, list }) {
  const [margin, setMargin] = useState(0);

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
    let lengthList = list.results.length * 150; //largura lista (150 é o tamanho da imagem + padding);
    if (window.innerWidth - lengthList > sizeWalk) {
      sizeWalk = window.innerWidth - lengthList - 60;
    }
    setMargin(sizeWalk);
  }

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
          {" "}
          {/*list--area*/}
          <Row pass={margin} size={list.results.length * 150}>
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
