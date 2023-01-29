import styled from "styled-components";

export const Container = styled.div``;

export const ViewTop = styled.div`
  margin-top: 70px;
  margin-left: 30px;
  margin-right: 30px;
`;

export const TopProfile = styled.div`
  display: flex;
  padding-top: 30px;
  align-items: center;
  width: 100%;
  justify-content: space-around;
`;

export const FirstContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageProfile = styled.img`
  height: 150px;
  @media (max-width: 614px) {
    height: 100px;
  }
`;

export const Text = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-left: 30px;
`;

export const ButtonComment = styled.div`
  background-color: #333;
  color: #fff;
  cursor: pointer;
  padding: 12px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  opacity: 1;
  transition: all ease 0.2s;
  :hover {
    opacity: 0.7;
  }
  @media (max-width: 614px) {
    display: none;
  }
`;

export const ContainerMovie = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0px;
`;

export const ImageMovie = styled.img`
  height: 150px;
  margin-right: 20px;
  margin-bottom: 20px;
  transform: scale(0.9);
  transition: all ease 0.2s;

  :hover {
    transform: scale(1);
    cursor: pointer;
  }
  @media (max-width: 614px) {
    height: 100px;
  }
`;
