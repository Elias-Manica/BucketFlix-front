import { useNavigate } from "react-router-dom";

import {
  Container,
  ContainerInfos,
  FirstContainer,
  ImageProfile,
  TopProfile,
  Text,
  ViewAllMovies,
  ContainerEmpty,
  TextEmpty,
  Image,
  ContainerMovie,
  ContainerLoading,
  TextNotFOund,
  Star,
  StarFilled,
  ViewInfos,
  TittleMovie,
  ContainerTitle,
  ContainerText,
  TextComment,
} from "./styles";

import Header from "../../components/Header/header";
import { useParams } from "react-router-dom";
import {
  getCommentsOfUserPagination,
  getUserPlaylist,
} from "../../services/apiService";
import { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import InfiniteScroll from "react-infinite-scroll-component";
import { ThreeDots } from "react-loader-spinner";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";

export default function SeeAllCommentMovies() {
  const { id } = useParams();
  const [urlImg, setUrlImg] = useState("");
  const [name, setName] = useState("");
  const [listComment, setListComment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);

  const navigate = useNavigate();

  const urlProfile = JSON.parse(localStorage.getItem("bucketflix"));

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getUserPlaylist(id);

      setUrlImg(response.data.pictureUrl);
      setName(response.data.username);
      setLoading(false);
    } catch (error) {
      if (error.response.data.msg) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.response.data.msg}`,
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
        return;
      }
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Algo de errado aconteceu, tente novamente mais tarde",
        showConfirmButton: false,
        timer: 1500,
      });
      setLoading(false);
    }
  }, [id]);

  const getComment = useCallback(async () => {
    try {
      const response = await getCommentsOfUserPagination(id, 1);

      setListComment(response.data);
    } catch (error) {
      if (error.response.data.msg) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.response.data.msg}`,
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Algo de errado aconteceu, tente novamente mais tarde",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [id]);

  async function getCommentFecht() {
    try {
      const response = await getCommentsOfUserPagination(id, page);

      return response.data;
    } catch (error) {}
  }

  const fetchData = async () => {
    const response = await getCommentFecht();

    setListComment([...listComment, ...response]);

    if (response.length === 0 || response.length < 10) {
      setHasMore(false);
    }

    setPage(page + 1);
  };

  useEffect(() => {
    getData();
    getComment();
  }, [id, getData, getComment]);

  return (
    <>
      <Header />
      <Container>
        {urlProfile && (
          <>
            <TopProfile>
              <FirstContainer>
                <ImageProfile src={urlImg} />
                {Number(urlProfile.userid) === Number(id) ? (
                  <ContainerInfos>
                    <Text>Meus comentários</Text>
                  </ContainerInfos>
                ) : (
                  <ContainerInfos>
                    <Text>{name}</Text>
                  </ContainerInfos>
                )}
              </FirstContainer>
            </TopProfile>
            <ViewAllMovies>
              <InfiniteScroll
                dataLength={listComment.length}
                next={fetchData}
                hasMore={hasMore}
                loader={
                  listComment.length === 0 ? null : (
                    <ContainerLoading>
                      <ThreeDots color="white" width={40} height={40} />
                    </ContainerLoading>
                  )
                }
                endMessage={
                  <TextNotFOund>Sua lista termina aqui :| </TextNotFOund>
                }
              >
                {loading ? (
                  <ContainerLoading>
                    <ThreeDots color="white" width={40} height={40} />
                  </ContainerLoading>
                ) : listComment.length > 0 ? (
                  listComment.map((item, index) => (
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
                ) : (
                  <ContainerEmpty>
                    {Number(urlProfile.userid) === Number(id) ? (
                      <TextEmpty>
                        Você não adicionou nenhum filme a sua lista :|{" "}
                      </TextEmpty>
                    ) : (
                      <TextEmpty>
                        Este usuário não tem nenhum filme na lista :|
                      </TextEmpty>
                    )}
                  </ContainerEmpty>
                )}
              </InfiniteScroll>
            </ViewAllMovies>
          </>
        )}
      </Container>
    </>
  );
}
