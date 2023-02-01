import styled from "styled-components";

export const Input = styled.input`
  width: ${(props) => (props.isMobile ? "90%" : "100%")};
  height: 40px;
  background: #343334;
  border-radius: 4px;
  padding-left: 10px;
  color: #fff;
`;

export const ContainerInput = styled.div`
  width: ${(props) => (props.isMobile ? "100%" : "250px")};
  margin-right: 10px;
  margin-top: ${(props) => (props.isMobile ? 20 : 0)}px;
  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    margin-right: 0;
  }
`;

export const ContainerMovie = styled.div`
  width: 100%;
  height: 30px;
  background-color: #fff;
  border-color: #000;
  border-width: 1px;
  border-style: solid;
  display: flex;
  padding-top: 3px;
  padding-bottom: 3px;
  cursor: pointer;
  justify-content: space-between;
`;

export const View = styled.div``;

export const ContainerView = styled.div`
  position: absolute;
  z-index: 4;
  width: 250px;
`;

export const ImageMovie = styled.img`
  margin-left: 3px;
`;

export const NameMovie = styled.p`
  color: #000;
  font-weight: bold;
  font-size: 10px;
  margin-left: 5px;
`;

export const Infos = styled.div`
  display: flex;
`;
