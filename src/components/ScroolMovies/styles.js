import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;
  padding-left: 30px;
`;

export const Tittle = styled.h1`
  margin-left: 30px;
`;

export const ContainerRow = styled.div`
  overflow-x: hidden;
`;

export const Image = styled.img`
  width: 100%;
  transform: scale(0.9);
  transition: all ease 0.2s;

  :hover {
    transform: scale(1);
    cursor: pointer;
  }
`;

export const Row = styled.div`
  width: 999999px;
`;

export const ContainerMovie = styled.div`
  display: inline-block;
  width: 150px;
`;
