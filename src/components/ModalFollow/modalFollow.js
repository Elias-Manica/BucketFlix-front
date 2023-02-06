import { useNavigate } from "react-router-dom";

import { ThreeDots } from "react-loader-spinner";

import {
  Button,
  Container,
  ContainerDisableBottom,
  ContainerMovie,
  Icon,
  ImageMovie,
  Infos,
  Line,
  NameMovie,
  TextEmpty,
  Tittle,
  View,
  ViewFollow,
  ViewLoad,
} from "./styles";

import { AiOutlineClose } from "react-icons/ai";

export default function ModalFollow({
  show,
  tittle,
  setShow,
  loadingInfo,
  data,
  isFollowers,
}) {
  const navigate = useNavigate();

  return (
    <>
      <Container show={show}>
        <View>
          <Tittle>{tittle}</Tittle>
        </View>
        <Icon onClick={() => setShow(false)}>
          <AiOutlineClose />
        </Icon>
        <Line />
        <ViewFollow>
          {loadingInfo ? (
            <ViewLoad>
              <ThreeDots color="white" height={40} width={40} />
            </ViewLoad>
          ) : data.length > 0 ? (
            isFollowers ? (
              data.map((value, index) => (
                <ContainerMovie
                  onClick={() => {
                    navigate(`/user/${value.users.id}`);
                    setShow(false);
                  }}
                  key={index}
                >
                  <Infos>
                    <ImageMovie src={value.users.pictureUrl} />
                    <NameMovie>{value.users.username}</NameMovie>
                  </Infos>
                  <Button
                    onClick={() => {
                      navigate(`/user/${value.users.id}`);
                      setShow(false);
                    }}
                  >
                    Ver perfil
                  </Button>
                </ContainerMovie>
              ))
            ) : (
              data.map((value, index) => (
                <ContainerMovie
                  onClick={() => {
                    navigate(`/user/${value.usersFollow.id}`);
                    setShow(false);
                  }}
                  key={index}
                >
                  <Infos>
                    <ImageMovie src={value.usersFollow.pictureUrl} />
                    <NameMovie>{value.usersFollow.username}</NameMovie>
                  </Infos>
                  <Button
                    onClick={() => {
                      navigate(`/user/${value.usersFollow.id}`);
                      setShow(false);
                    }}
                  >
                    Ver perfil
                  </Button>
                </ContainerMovie>
              ))
            )
          ) : (
            <TextEmpty>
              {tittle === "Seguindo"
                ? "Você não segue ninguém :|"
                : "Você não tem seguidores :|"}{" "}
            </TextEmpty>
          )}
        </ViewFollow>
      </Container>
      <ContainerDisableBottom
        show={show}
        onClick={() => setShow(false)}
      ></ContainerDisableBottom>
    </>
  );
}
