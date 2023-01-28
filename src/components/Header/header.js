import { useState } from "react";

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

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Container>
        <ContainerFirst>
          <Logo>BUCKETFLIX</Logo>
          <ContainerSelect>
            <TextPages>Página inicial</TextPages>
            <TextPages>Minha lista</TextPages>
          </ContainerSelect>
        </ContainerFirst>
        <ContainerUser>
          <ViewIcon>
            <AiOutlineSearch />
          </ViewIcon>
          <Input placeholder="Pesquise por filmes ou amigos..." />
          <ImageUser src="https://i.pinimg.com/736x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg" />
          <ViewIcon onClick={() => setShowModal(!showModal)}>
            {showModal ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
          </ViewIcon>
          <Menu showMenu={showModal}>Logout</Menu>
        </ContainerUser>
      </Container>
    </>
  );
}
