import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;
  padding-left: 30px;

  &:hover {
    opacity: 1;
  }
`;

export const Tittle = styled.h1`
  margin-left: 30px;
  font-size: 20px;
  font-weight: bold;
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
  width: ${(props) => props.size}px;
  margin-left: ${(props) => props.pass}px;
  transition: all ease 0.5s;
`;

export const ContainerMovie = styled.div`
  display: inline-block;
  width: 150px;
`;

export const ViewLeft = styled.div`
  font-size: 50px;
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.6);
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
`;

export const ViewRight = styled.div`
  font-size: 50px;
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.6);
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
`;
