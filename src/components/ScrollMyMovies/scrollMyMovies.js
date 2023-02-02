import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";

import {
  Container,
  ContainerMovie,
  ContainerRow,
  Image,
  Row,
  Star,
  StarFilled,
  TextSeeMore,
  TextSeeMoreTop,
  Tittle,
  ViewLeft,
  ViewRight,
  ViewStar,
} from "./styles";

export default function ScrollMyMovies({ tittle, list, isWatch }) {
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

    if (lengthList + 30 <= Math.round(window.innerWidth)) {
      return;
    }
    if (window.innerWidth - lengthList > sizeWalk) {
      sizeWalk = window.innerWidth - lengthList - 200; //-100 é pra esquerda
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
        {list.length >= 10 && (
          <TextSeeMoreTop
            onClick={() => {
              isWatch
                ? navigate(`/user/movies/watch/${list[0].userid}`)
                : navigate(`/user/movies/${list[0].userid}`);
            }}
          >
            VER TODOS
          </TextSeeMoreTop>
        )}

        <ContainerRow>
          {isWatch ? (
            <Row pass={margin} size={list.length * 150}>
              {list.length > 0
                ? list.map((item, index) => (
                    <ContainerMovie
                      key={index}
                      onClick={() => navigate(`/movie/${item.movieid}`)}
                    >
                      <ViewStar>
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
                      </ViewStar>
                      <Image
                        src={`https://image.tmdb.org/t/p/w300${item.movie.poster_path}`}
                        alt={item.movie.original_title}
                      />
                    </ContainerMovie>
                  ))
                : null}
              {list.length >= 10 && (
                <TextSeeMore
                  onClick={() =>
                    navigate(`/user/movies/watch/${list[0].userid}`)
                  }
                >
                  VER MAIS
                </TextSeeMore>
              )}
            </Row>
          ) : (
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
              {list.length >= 10 && (
                <TextSeeMore
                  onClick={() => navigate(`/user/movies/${list[0].userid}`)}
                >
                  VER MAIS
                </TextSeeMore>
              )}
            </Row>
          )}
        </ContainerRow>
      </Container>
    </>
  );
}
