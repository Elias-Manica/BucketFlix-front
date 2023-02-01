import { useNavigate } from "react-router-dom";

import { ThreeDots } from "react-loader-spinner";

import {
  Button,
  Container,
  ContainerDisableBottom,
  ContainerMovie,
  ImageMovie,
  Infos,
  Line,
  NameMovie,
  Tittle,
  View,
  ViewFollow,
  ViewLoad,
} from "./styles";

export default function ModalFollow({
  show,
  tittle,
  setShow,
  loadingInfo,
  data,
  isFollowers,
}) {
  const navigate = useNavigate();
  console.log(data, " data");
  return (
    <>
      <Container show={show}>
        <View>
          <Tittle>{tittle}</Tittle>
        </View>
        <Line />
        <ViewFollow>
          {loadingInfo ? (
            <ViewLoad>
              <ThreeDots color="white" height={40} width={40} />
            </ViewLoad>
          ) : data.length > 0 ? (
            isFollowers ? (
              data.map((value) => (
                <ContainerMovie
                  onClick={() => {
                    navigate(`/user/${value.users.id}`);
                    setShow(false);
                  }}
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
              data.map((value) => (
                <ContainerMovie
                  onClick={() => {
                    navigate(`/user/${value.usersFollow.id}`);
                    setShow(false);
                  }}
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
          ) : null}
        </ViewFollow>
      </Container>
      <ContainerDisableBottom
        show={show}
        onClick={() => setShow(false)}
      ></ContainerDisableBottom>
    </>
  );
}
