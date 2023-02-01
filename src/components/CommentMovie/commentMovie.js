import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";

import {
  Container,
  ContainerInfos,
  ContainerMovie,
  ContainerRow,
  ContainerText,
  ContainerTitle,
  Image,
  Row,
  Star,
  StarFilled,
  TextComment,
  Tittle,
  TittleMovie,
  ViewInfos,
  ViewLeft,
  ViewRight,
} from "./styles";

export default function CommentMovie({ tittle, list }) {
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
    let lengthList = list.length * 300; //largura lista (300 é o tamanho da imagem + padding);
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
          <Row pass={margin} size={list.length * 300}>
            {list.length > 0
              ? list.map((item, index) => (
                  <ContainerMovie
                    key={index}
                    onClick={() => navigate(`/movie/${item.movieid}`)}
                  >
                    <ViewInfos>
                      <Image
                        src={`https://image.tmdb.org/t/p/w300${item.movies.poster_path}`}
                        alt={item.movies.original_title}
                      />
                      <ContainerInfos>
                        <TittleMovie>{item.movies.title}</TittleMovie>
                        <ContainerTitle>
                          {item.rating === 0 && (
                            <>
                              <Star>
                                <IoIosStarOutline />
                              </Star>
                              <Star>
                                <IoIosStarOutline />
                              </Star>
                              <Star>
                                <IoIosStarOutline />
                              </Star>
                              <Star>
                                <IoIosStarOutline />
                              </Star>
                              <Star>
                                <IoIosStarOutline />
                              </Star>
                            </>
                          )}
                          {item.rating === 1 && (
                            <>
                              <StarFilled>
                                <IoIosStar />
                              </StarFilled>
                              <Star>
                                <IoIosStarOutline />
                              </Star>
                              <Star>
                                <IoIosStarOutline />
                              </Star>
                              <Star>
                                <IoIosStarOutline />
                              </Star>
                              <Star>
                                <IoIosStarOutline />
                              </Star>
                            </>
                          )}
                          {item.rating === 2 && (
                            <>
                              <StarFilled>
                                <IoIosStar />
                              </StarFilled>
                              <StarFilled>
                                <IoIosStar />
                              </StarFilled>
                              <Star>
                                <IoIosStarOutline />
                              </Star>
                              <Star>
                                <IoIosStarOutline />
                              </Star>
                              <Star>
                                <IoIosStarOutline />
                              </Star>
                            </>
                          )}
                          {item.rating === 3 && (
                            <>
                              <StarFilled>
                                <IoIosStar />
                              </StarFilled>
                              <StarFilled>
                                <IoIosStar />
                              </StarFilled>
                              <StarFilled>
                                <IoIosStar />
                              </StarFilled>
                              <Star>
                                <IoIosStarOutline />
                              </Star>
                              <Star>
                                <IoIosStarOutline />
                              </Star>
                            </>
                          )}
                          {item.rating === 4 && (
                            <>
                              <StarFilled>
                                <IoIosStar />
                              </StarFilled>
                              <StarFilled>
                                <IoIosStar />
                              </StarFilled>
                              <StarFilled>
                                <IoIosStar />
                              </StarFilled>
                              <StarFilled>
                                <IoIosStar />
                              </StarFilled>
                              <Star>
                                <IoIosStarOutline />
                              </Star>
                            </>
                          )}
                          {item.rating === 5 && (
                            <>
                              <StarFilled>
                                <IoIosStar />
                              </StarFilled>
                              <StarFilled>
                                <IoIosStar />
                              </StarFilled>
                              <StarFilled>
                                <IoIosStar />
                              </StarFilled>
                              <StarFilled>
                                <IoIosStar />
                              </StarFilled>
                              <StarFilled>
                                <IoIosStar />
                              </StarFilled>
                            </>
                          )}
                        </ContainerTitle>
                        <ContainerText>
                          <TextComment>{item.comment}</TextComment>
                        </ContainerText>
                      </ContainerInfos>
                    </ViewInfos>
                  </ContainerMovie>
                ))
              : null}
          </Row>
        </ContainerRow>
      </Container>
    </>
  );
}
