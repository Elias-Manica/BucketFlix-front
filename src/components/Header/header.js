import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  Container,
  ContainerFirst,
  ContainerSelect,
  ContainerUser,
  ImageUser,
  Logo,
  Menu,
  TextPages,
  ViewIcon,
  ViewIconDisable,
} from "./styles";

import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

import { BiCameraMovie, BiUserCircle } from "react-icons/bi";

import { logout } from "../../services/apiService";

import Swal from "sweetalert2";
import SearchUser from "../SearchUser/searchUser";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [selectUser, setSelectUser] = useState(false);
  const [name, setName] = useState("");
  const [nameUser, setNameUser] = useState("");

  const navigate = useNavigate();

  const urlProfile = JSON.parse(localStorage.getItem("bucketflix"));

  async function logOutFunction() {
    try {
      await logout(urlProfile.token);
      localStorage.removeItem("bucketflix");
      setShowModal(false);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Deslogado!",
        showConfirmButton: false,
        timer: 1200,
      });
      navigate("/");
    } catch (error) {
      localStorage.removeItem("bucketflix");
      setShowModal(false);
      navigate("/");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Deslogado!",
        showConfirmButton: false,
        timer: 1200,
      });
    }
  }

  return (
    <>
      <Container>
        <ContainerFirst>
          <Logo onClick={() => navigate("/")}>BUCKETFLIX</Logo>
          <ContainerSelect>
            <TextPages onClick={() => navigate("/")}>Página inicial</TextPages>
            <TextPages
              onClick={() => {
                if (urlProfile) {
                  navigate(`/user/${urlProfile.userid}`);
                  return;
                }
                navigate("/login");
              }}
            >
              Minha lista
            </TextPages>
            {!urlProfile && (
              <TextPages onClick={() => navigate("/login")}>
                Fazer login
              </TextPages>
            )}
          </ContainerSelect>
        </ContainerFirst>
        <ContainerUser>
          {selectUser ? (
            <>
              <ViewIconDisable
                onClick={() => {
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
            </>
          ) : (
            <>
              <ViewIcon>
                <BiCameraMovie />
              </ViewIcon>
              <ViewIconDisable
                onClick={() => {
                  setSelectUser(true);
                  setName("");
                  setNameUser("");
                }}
              >
                <BiUserCircle />
              </ViewIconDisable>
            </>
          )}

          <SearchUser
            selectUser={selectUser}
            name={name}
            setName={setName}
            nameUser={nameUser}
            setNameUser={setNameUser}
          />
          {urlProfile && (
            <>
              <ImageUser
                src={urlProfile.img}
                onClick={() => navigate(`/user/${urlProfile.userid}`)}
              />
              <ViewIcon onClick={() => setShowModal(!showModal)}>
                {showModal ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
              </ViewIcon>
            </>
          )}

          <Menu showMenu={showModal} onClick={logOutFunction}>
            Logout
          </Menu>
        </ContainerUser>
      </Container>
    </>
  );
}
