import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url("https://assets.b9.com.br/wp-content/uploads/2019/05/netflix-library.jpg");
`;

export const ViewContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  width: 30%;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 30px 20px;
  border-radius: 20px;
  @media (max-width: 700px) {
    width: 80%;
  }
`;

export const Tittle = styled.h1`
  font-size: 26px;
  font-weight: bold;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const Button = styled.div`
  width: 80%;
  height: 30px;
  background: #e50914;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.55);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  opacity: 0.8;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;
