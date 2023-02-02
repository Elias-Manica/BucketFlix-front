import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../../components/Header/header";

import {
  ButtonComment,
  Container,
  ContainerEmpty,
  ContainerInfos,
  ContainerMovie,
  FirstContainer,
  ImageProfile,
  Line,
  Text,
  TextBold,
  TextEmpty,
  TextInfo,
  TopProfile,
  ViewText,
  ViewTop,
} from "./styles";

import {
  follow,
  getCommentsOfUser,
  getFollowersOfUser,
  getFollowersUser,
  getInfos,
  getUserPlaylistPagination,
  getwatchmoviePagination,
  unfollow,
  userIsFollow,
} from "../../services/apiService";

import Swal from "sweetalert2";
import ScrollMyMovies from "../../components/ScrollMyMovies/scrollMyMovies";
import ModalFollow from "../../components/ModalFollow/modalFollow";
import CommentMovie from "../../components/CommentMovie/commentMovie";

export default function ProfilePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [urlImg, setUrlImg] = useState("");
  const [name, setName] = useState("");
  const [exist, setExist] = useState(false);
  const [movieLiked, setMovieLiked] = useState([]);
  const [watchMovies, setWatchMovies] = useState([]);
  const [listComment, setListComment] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);
  const [following, setFollowing] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [comments, setComments] = useState(0);
  const [showFollowing, setShowFollowing] = useState(false);
  const [listFollowing, setListFollowing] = useState([]);
  const [showFollowers, setShowFollowers] = useState(false);
  const [listFollowers, setListFollowers] = useState([]);
  const [loadingInfo, setLoadingInfo] = useState(false);

  const urlProfile = JSON.parse(localStorage.getItem("bucketflix"));

  if (urlProfile) {
    isFollow();
  }

  async function isFollow() {
    try {
      await userIsFollow(urlProfile.token, id);
      setIsFollowing(true);
    } catch (error) {
      setIsFollowing(false);
    }
  }

  async function followUser() {
    try {
      await follow(urlProfile.token, id);
      setIsFollowing(true);
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
  }

  async function unfollowUser() {
    try {
      await unfollow(urlProfile.token, id);
      setIsFollowing(false);
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
  }

  const getData = useCallback(async () => {
    try {
      const response = await getUserPlaylistPagination(id, 1);

      setUrlImg(response.data.pictureUrl);
      setName(response.data.username);
      setMovieLiked(response.data.listmovies);
    } catch (error) {
      if (error.response.data.msg) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.response.data.msg}`,
          showConfirmButton: false,
          timer: 1500,
        });
        setExist(true);
        return;
      }
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Algo de errado aconteceu, tente novamente mais tarde",
        showConfirmButton: false,
        timer: 1500,
      });
      setExist(true);
    }
  }, [id]);

  const getWatch = useCallback(async () => {
    try {
      const response = await getwatchmoviePagination(id, 1);

      setWatchMovies(response.data);
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

  const getComment = useCallback(async () => {
    try {
      const response = await getCommentsOfUser(id);

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

  const getInfosUser = useCallback(async () => {
    try {
      const response = await getInfos(id);

      setFollowing(response.data.following);
      setFollowers(response.data.followers);
      setComments(response.data.comments);
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

  async function getUserFollowing() {
    setLoadingInfo(true);
    setShowFollowers(true);
    try {
      const list = await getFollowersOfUser(id);
      setListFollowers(list.data);
      setLoadingInfo(false);
    } catch (error) {
      if (error.response.data.msg) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.response.data.msg}`,
          showConfirmButton: false,
          timer: 1500,
        });
        setLoadingInfo(false);
        return;
      }
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Algo de errado aconteceu, tente novamente mais tarde",
        showConfirmButton: false,
        timer: 1500,
      });
      setLoadingInfo(false);
    }
  }

  async function getFollowers() {
    setLoadingInfo(true);
    setShowFollowing(true);
    try {
      const list = await getFollowersUser(id);
      setListFollowing(list.data);
      setLoadingInfo(false);
    } catch (error) {
      if (error.response.data.msg) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.response.data.msg}`,
          showConfirmButton: false,
          timer: 1500,
        });
        setLoadingInfo(false);
        return;
      }
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Algo de errado aconteceu, tente novamente mais tarde",
        showConfirmButton: false,
        timer: 1500,
      });
      setLoadingInfo(false);
    }
  }

  useEffect(() => {
    getData();
    getWatch();
    getComment();
    getInfosUser();
  }, [id, getData, getWatch, getInfosUser, getComment]);

  return (
    <>
      <Container>
        <Header />
        <ViewTop>
          {exist ? (
            <Text>Nenhum usuário encontrado</Text>
          ) : (
            <>
              {urlProfile && (
                <>
                  <TopProfile>
                    <FirstContainer>
                      <ImageProfile src={urlImg} />
                      {Number(urlProfile.userid) === Number(id) ? (
                        <ContainerInfos>
                          <Text>Meu perfil</Text>
                          <TextInfo>
                            <ViewText
                              onClick={() => {
                                if (!urlProfile) {
                                  return;
                                }
                                getFollowers();
                              }}
                            >
                              <TextBold>{following}</TextBold> Seguindo
                            </ViewText>
                            <ViewText
                              onClick={() => {
                                if (!urlProfile) {
                                  return;
                                }
                                getUserFollowing();
                              }}
                            >
                              <TextBold>{followers}</TextBold>
                              {followers === 1 ? "Seguidor" : "Seguidores"}
                            </ViewText>
                            <ViewText
                              onClick={() => {
                                window.scroll({
                                  top: 100000,
                                  left: 100,
                                  behavior: "smooth",
                                });
                              }}
                            >
                              <TextBold>{comments}</TextBold>
                              {comments === 1 ? "Comentário" : "Comentários"}
                            </ViewText>
                          </TextInfo>
                        </ContainerInfos>
                      ) : (
                        <ContainerInfos>
                          <Text>{name}</Text>
                          <TextInfo>
                            <ViewText
                              onClick={() => {
                                if (!urlProfile) {
                                  return;
                                }
                                getFollowers();
                              }}
                            >
                              <TextBold>{following}</TextBold> Seguindo
                            </ViewText>
                            <ViewText
                              onClick={() => {
                                if (!urlProfile) {
                                  return;
                                }
                                getUserFollowing();
                              }}
                            >
                              <TextBold>{followers}</TextBold>{" "}
                              {followers === 1 ? "Seguidor" : "Seguidores"}
                            </ViewText>
                            <ViewText
                              onClick={() => {
                                window.scroll({
                                  top: 100000,
                                  left: 100,
                                  behavior: "smooth",
                                });
                              }}
                            >
                              <TextBold>{comments}</TextBold>{" "}
                              {comments === 1 ? "Comentário" : "Comentários"}
                            </ViewText>
                          </TextInfo>
                        </ContainerInfos>
                      )}
                    </FirstContainer>
                    {Number(urlProfile.userid) === Number(id) ? (
                      <ButtonComment onClick={() => navigate("/")}>
                        Adicionar mais filmes
                      </ButtonComment>
                    ) : isFollowing ? (
                      <ButtonComment
                        onClick={() => {
                          unfollowUser();
                        }}
                      >
                        Parar de seguir
                      </ButtonComment>
                    ) : (
                      <ButtonComment
                        onClick={() => {
                          followUser();
                        }}
                      >
                        Seguir
                      </ButtonComment>
                    )}
                  </TopProfile>
                  <ContainerMovie>
                    {movieLiked.length > 0 ? (
                      <ScrollMyMovies tittle="Minha lista" list={movieLiked} />
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
                    {watchMovies.length > 0 ? (
                      <>
                        <ScrollMyMovies
                          tittle="Assistidos recentemente"
                          list={watchMovies}
                          isWatch={true}
                        />
                      </>
                    ) : (
                      <ContainerEmpty>
                        {Number(urlProfile.userid) === Number(id) ? (
                          <TextEmpty>
                            Você não adicionou nenhum filme a sua lista de
                            assistidos :|
                          </TextEmpty>
                        ) : (
                          <TextEmpty>
                            Este usuário não tem nenhum filme assistido :|
                          </TextEmpty>
                        )}
                      </ContainerEmpty>
                    )}
                  </ContainerMovie>
                  <Line></Line>
                  {listComment.length > 0 && (
                    <>
                      <CommentMovie
                        tittle="Comentários recentes"
                        list={listComment}
                      />
                    </>
                  )}
                </>
              )}
            </>
          )}
          <ModalFollow
            show={showFollowing}
            setShow={setShowFollowing}
            tittle="Seguindo"
            loadingInfo={loadingInfo}
            data={listFollowing}
            isFollowers={false}
          />
          <ModalFollow
            show={showFollowers}
            setShow={setShowFollowers}
            tittle="Seguidores"
            loadingInfo={loadingInfo}
            data={listFollowers}
            isFollowers={true}
          />
        </ViewTop>
      </Container>
    </>
  );
}
