import { useState, useContext } from "react";

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

import IdAuth from "../../context/useridContext";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const urlProfile = JSON.parse(localStorage.getItem("bucketflix"));

  return (
    <>
      <Container>
        <ContainerFirst>
          <Logo onClick={() => navigate("/")}>BUCKETFLIX</Logo>
          <ContainerSelect>
            <TextPages onClick={() => navigate("/")}>Página inicial</TextPages>
            <TextPages>Minha lista</TextPages>
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

          <Menu showMenu={showModal}>Logout</Menu>
        </ContainerUser>
      </Container>
    </>
  );
}
