import styled from "styled-components";

export const Container = styled.div`
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
  height: 100px;
  @media (max-width: 700px) {
    height: 60px;
  }
`;

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

export const Text = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 10px;
  @media (max-width: 700px) {
    font-size: 15px;
  }
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

export const ViewAllMovies = styled.div`
  display: flex;
  width: 100%;
  padding-left: 2%;
  padding-right: 2%;
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

export const ContainerMovie = styled.div`
  display: inline-block;
  width: 150px;
  color: #fff;
  justify-content: center;
  overflow-y: hidden;
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

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

export const TextNotFOund = styled.h1`
  font-size: 20px;
  width: 100%;
  text-align: center;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const Star = styled.div`
  font-size: 18px;
  margin-left: 5px;
`;

export const StarFilled = styled.div`
  font-size: 18px;
  margin-left: 5px;
  color: #ffe600;
`;
