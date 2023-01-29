import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/header";

import {
  ButtonComment,
  Container,
  ContainerMovie,
  FirstContainer,
  ImageMovie,
  ImageProfile,
  Text,
  TopProfile,
  ViewTop,
} from "./styles";

export default function ProfilePage() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Header />
        <ViewTop>
          <TopProfile>
            <FirstContainer>
              <ImageProfile src="https://i.pinimg.com/736x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg" />
              <Text>Minha lista</Text>
            </FirstContainer>
            <ButtonComment onClick={() => navigate("/")}>
              Adicionar mais filmes
            </ButtonComment>
          </TopProfile>
          <ContainerMovie>
            <ImageMovie src="https://i.pinimg.com/736x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg" />
            <ImageMovie src="https://i.pinimg.com/736x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg" />
            <ImageMovie src="https://i.pinimg.com/736x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg" />
            <ImageMovie src="https://i.pinimg.com/736x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg" />
            <ImageMovie src="https://i.pinimg.com/736x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg" />
            <ImageMovie src="https://i.pinimg.com/736x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg" />

            <ImageMovie src="https://i.pinimg.com/736x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg" />
            <ImageMovie src="https://i.pinimg.com/736x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg" />
            <ImageMovie src="https://i.pinimg.com/736x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg" />
            <ImageMovie src="https://i.pinimg.com/736x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg" />
            <ImageMovie src="https://i.pinimg.com/736x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg" />
            <ImageMovie src="https://i.pinimg.com/736x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg" />
          </ContainerMovie>
        </ViewTop>
      </Container>
    </>
  );
}
