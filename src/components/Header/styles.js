import styled from "styled-components";

export const Container = styled.div`
  height: 70px;
  width: 100%;
  background-color: #141414;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  color: red;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;

export const TextPages = styled.h2`
  font-size: 15px;
  margin-left: 20px;
  cursor: pointer;
  font-weight: bold;
`;

export const ContainerSelect = styled.div`
  display: flex;
  margin-left: 20px;
`;

export const ContainerUser = styled.div`
  display: flex;
  margin-left: 20px;
  height: 35px;
  align-items: center;
`;

export const ImageUser = styled.img`
  height: 100%;
  cursor: pointer;
  margin-right: 10px;
`;

export const ContainerFirst = styled.div`
  display: flex;
  align-items: center;
`;

export const ViewIcon = styled.div`
  cursor: pointer;

  font-size: 25px;
  margin-right: 3px;
`;

export const Input = styled.input`
  width: 230px;
  margin-right: 10px;
`;

export const Menu = styled.div`
  background-color: #fff;
  display: ${(props) => (props.showMenu ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 17px;
  font-weight: bold;
  width: 150px;
  height: 47px;
  padding-bottom: 7px;
  border-radius: 0px 0px 0px 20px;
  cursor: pointer;
  position: absolute;
  top: 70px;
  right: 0;
`;