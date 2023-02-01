import styled from "styled-components";

export const Container = styled.div`
  height: 60vh;
  background-color: #141414;
  width: 30%;
  position: fixed;
  top: 20%;
  left: 40%;
  z-index: 3;
  border-radius: 50px;
  display: ${(props) => (props.show ? "initial" : "none")};
  @media (max-width: 700px) {
    width: 80%;
    left: 10%;
  }
`;

export const ContainerDisableBottom = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  bottom: 0;
  z-index: 2;
  left: 0;
  display: ${(props) => (props.show ? "initial" : "none")};
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #fff;
`;

export const View = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Tittle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

export const ViewFollow = styled.div`
  margin-top: 20px;
  overflow-y: scroll;
  max-height: 40vh;
`;

export const ContainerMovie = styled.div`
  width: 100%;
  height: 50px;
  padding: 20px 30px;
  display: flex;
  padding-top: 3px;
  padding-bottom: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Infos = styled.div`
  display: flex;
`;

export const ImageMovie = styled.img`
  margin-left: 3px;
  height: 40px;
  width: 40px;
`;

export const NameMovie = styled.p`
  color: #000;
  font-weight: bold;
  font-size: 10px;
  margin-left: 15px;
  color: #fff;
`;

export const Button = styled.div`
  height: 30px;
  border-color: #7b7b7b;
  border-width: 1px;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 12px;
  padding: 10px 10px;
  border-radius: 5px;
`;

export const ViewLoad = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Icon = styled.div`
  cursor: pointer;
  font-size: 16px;
  position: absolute;
  top: 25px;
  right: 40px;
`;
