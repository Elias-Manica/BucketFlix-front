import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import {
  Container,
  ContainerMovie,
  ContainerRow,
  Image,
  Row,
  TextSeeMore,
  Tittle,
  ViewLeft,
  ViewRight,
} from "./styles";

export default function ScrollMovies({ tittle, list }) {
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
        <TextSeeMore
          onClick={() => {
            if (tittle === "Romance") {
              navigate(`/genres/10749`);
              return;
            }
            if (tittle === "Terror") {
              navigate(`/genres/27`);
              return;
            }
            if (tittle === "Comédia") {
              navigate(`/genres/35`);
              return;
            }
            if (tittle === "Ação") {
              navigate(`/genres/28`);
              return;
            }
            if (tittle === "Melhores avaliados") {
              navigate(`/genres/Melhores-avaliados`);
              return;
            }
            navigate(`/genres/mais-populares`);
          }}
        >
          VER MAIS
        </TextSeeMore>
        <ContainerRow>
          <Row pass={margin} size={list.results.length * 150}>
            {list.results.length > 0
              ? list.results.map((item, index) => (
                  <ContainerMovie
                    key={index}
                    onClick={() => navigate(`/movie/${item.id}`)}
                  >
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
