import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Container,
  ContainerButtons,
  Modal,
  Tittle,
  ViewContainer,
} from "./styles";

import { signInWithGoogle } from "../../services/firebase";

import { login } from "../../services/apiService";

import TokenAuth from "../../context/tokenContext";
import ImageAuth from "../../context/imageContext";
import IdAuth from "../../context/useridContext";
import NameAuth from "../../context/nameContext";

export default function LoginPage() {
  const navigate = useNavigate();

  const { setToken } = useContext(TokenAuth);
  const { setImg } = useContext(ImageAuth);
  const { setIdUser } = useContext(IdAuth);
  const { setNameUser } = useContext(NameAuth);

  async function loginFunction() {
    try {
      const response = await signInWithGoogle();

      const body = {
        email: response.user.email,
        username: response.user.displayName,
        pictureUrl: response.user.photoURL,
      };
      const data = await login(body);

      setToken(data.data.token);
      setImg(data.data.user.pictureUrl);
      setIdUser(data.data.user.id);
      setNameUser(data.data.user.username);
      localStorage.setItem(
        "bucketflix",
        JSON.stringify({
          token: `${data.data.token}`,
          img: `${data.data.user.pictureUrl}`,
          userid: `${data.data.user.id}`,
          nameUser: `${data.data.user.username}`,
        })
      );
      navigate("/");
    } catch (error) {}
  }

  return (
    <>
      <Container>
        <ViewContainer>
          <Modal>
            <Tittle>Faça login</Tittle>
            <ContainerButtons>
              <Button onClick={loginFunction}>Acesse com o google</Button>
            </ContainerButtons>
          </Modal>
        </ViewContainer>
      </Container>
    </>
  );
}
