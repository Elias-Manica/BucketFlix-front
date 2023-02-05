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
  @media (max-width: 700px) {
    display: initial;
  }
`;

export const FirstContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageProfile = styled.img`
  height: 150px;
  @media (max-width: 700px) {
    height: 60px;
  }
`;

export const Text = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 10px;
  @media (max-width: 700px) {
    font-size: 15px;
  }
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
  @media (max-width: 700px) {
    padding: 10px 20px;
    width: 50%;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ContainerMovie = styled.div`
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
  @media (max-width: 700px) {
    height: 100px;
  }
`;

export const TextEmpty = styled.h1`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

export const ContainerEmpty = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: white;
  margin-bottom: 20px;
`;

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

export const TextInfo = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    font-size: 12px;
  }
`;

export const ViewText = styled.div`
  display: flex;
  margin-bottom: 5px;
  cursor: pointer;
`;

export const TextBold = styled.p`
  font-weight: bold;
  margin-right: 5px;
`;

export const COntainerLoading = styled.div`
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

export const Image = styled.img`
  width: 400px;
`;
