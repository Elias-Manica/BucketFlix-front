import { useNavigate } from "react-router-dom";

import SearchUser from "../SearchUser/searchUser";

import {
  Container,
  ContainerDisable,
  ContainerSelect,
  Logo,
  View,
  Text,
  ViewIconDisable,
  ViewIcon,
  ContainerIcon,
  TextLogout,
} from "./styles";

import { BiCameraMovie, BiUserCircle } from "react-icons/bi";

export default function LateralMenu({
  setShowMenu,
  selectUser,
  name,
  setName,
  nameUser,
  setNameUser,
  setSelectUser,
  logOutFunction,
}) {
  const navigate = useNavigate();

  const urlProfile = JSON.parse(localStorage.getItem("bucketflix"));

  return (
    <>
      <Container>
        <View>
          <Logo>BUCKETFLIX</Logo>
          {selectUser ? (
            <>
              <ContainerIcon>
                <ViewIconDisable
                  onClick={() => {
                    if (!urlProfile) {
                      navigate("/login");
                      return;
                    }
                    setSelectUser(false);
                    setName("");
                    setNameUser("");
                  }}
                >
                  <BiCameraMovie />
                </ViewIconDisable>
                <ViewIcon>
                  <BiUserCircle />
                </ViewIcon>
              </ContainerIcon>
            </>
          ) : (
            <>
              <ContainerIcon>
                <ViewIcon>
                  <BiCameraMovie />
                </ViewIcon>
                <ViewIconDisable
                  onClick={() => {
                    if (!urlProfile) {
                      navigate("/login");
                      return;
                    }
                    setSelectUser(true);
                    setName("");
                    setNameUser("");
                  }}
                >
                  <BiUserCircle />
                </ViewIconDisable>
              </ContainerIcon>
            </>
          )}
          <SearchUser
            selectUser={selectUser}
            name={name}
            setName={setName}
            nameUser={nameUser}
            setNameUser={setNameUser}
            isMobile={true}
          />
          <ContainerSelect>
            <Text
              onClick={() => {
                if (!urlProfile) {
                  navigate("/login");
                  return;
                }
                navigate(`/`);
              }}
            >
              Página inicial
            </Text>
            <Text
              onClick={() => {
                if (!urlProfile) {
                  navigate("/login");
                  return;
                }
                navigate(`/user/${urlProfile.userid}`);
              }}
            >
              Meu perfil
            </Text>
            {urlProfile && (
              <TextLogout onClick={logOutFunction}>Logout</TextLogout>
            )}

            {!urlProfile && (
              <Text onClick={() => navigate("/login")}>Fazer login</Text>
            )}
          </ContainerSelect>
        </View>
      </Container>
      <ContainerDisable onClick={() => setShowMenu(false)}></ContainerDisable>
    </>
  );
}
