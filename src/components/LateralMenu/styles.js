import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  height: 100vh;
  width: 50%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 5;
`;

export const ContainerDisable = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 50%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5;
`;

export const Logo = styled.h1`
  color: red;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 15px;
`;

export const View = styled.div``;

export const ContainerSelect = styled.div`
  margin-left: 15px;
  margin-top: 25px;
`;

export const Text = styled.h1`
  color: #000;
  font-size: 14px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const ViewIconDisable = styled.div`
  color: #b7b7b7;
  font-size: 25px;
  margin-right: 3px;
`;

export const ViewIcon = styled.div`
  font-size: 25px;
  margin-right: 3px;
  color: #000;
`;

export const ContainerIcon = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
`;

export const TextLogout = styled.h1`
  color: #000;
  font-size: 14px;
  margin-bottom: 20px;
  font-weight: bold;
  position: absolute;
  bottom: 0;
`;
