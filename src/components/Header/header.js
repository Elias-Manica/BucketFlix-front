import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  Container,
  ContainerFirst,
  ContainerSelect,
  ContainerUser,
  ImageUser,
  Input,
  Logo,
  Menu,
  TextPages,
  ViewIcon,
} from "./styles";

import {
  AiOutlineCaretDown,
  AiOutlineSearch,
  AiOutlineCaretUp,
} from "react-icons/ai";

import { logout } from "../../services/apiService";

import Swal from "sweetalert2";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
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
          <ViewIcon>
            <AiOutlineSearch />
          </ViewIcon>
          <Input placeholder="Pesquise por filmes ou amigos..." />
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
