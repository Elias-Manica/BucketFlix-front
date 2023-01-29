import styled from "styled-components";

export const ContainerMovies = styled.div`
  margin-top: -110px;
  @media (max-width: 614px) {
    margin-top: 70px;
  }
`;

export const Image = styled.img`
  width: 400px;
`;

export const ContainerLOading = styled.div`
  position: fixed;
  left: 0;
  top: 70;
  align-self: center;
  background-color: #000;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
