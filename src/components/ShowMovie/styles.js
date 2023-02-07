import styled from "styled-components";

export const Container = styled.div`
  height: 70vh;
  background-size: cover;
  background-position: center;
  margin-top: 70px;
  background-image: ${(props) =>
    props.img ? `url(https://image.tmdb.org/t/p/original${props.img})` : null};

  @media (max-width: 700px) {
    height: 60vh;
  }
`;

export const Tittle = styled.h1`
  font-size: 60px;
  font-weight: bold;
  @media (max-width: 700px) {
    font-size: 40px;
  }
`;

export const ViewStyles = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111, transparent);
`;

export const ViewStylesHorizontal = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111, transparent);
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-bottom: 110px;
  padding-top: ${(props) => (props.isBig ? 0 : 70)}px;
  @media (max-width: 700px) {
    padding-top: ${(props) => (props.isBig ? 0 : 70)}px;
  }
`;

export const ContainerInfos = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  display: flex;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

export const ViewGrade = styled.h2`
  color: #46d369;
  margin-right: 15px;
`;
export const ViewDate = styled.h2`
  margin-right: 15px;
`;
export const ViewTime = styled.h2``;

export const ViewDescription = styled.p`
  margin-top: 15px;
  font-size: 20px;
  color: #999;
  max-width: 70%;
  @media (max-width: 700px) {
    font-size: 14px;
    max-width: 100%;
    margin-right: 30px;
  }
`;

export const ContainerButtons = styled.div`
  margin-top: 15px;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  position: relative;
  @media (max-width: 700px) {
    display: initial;
    font-size: 16px;
  }
`;

export const Button = styled.div`
  background-color: #fff;
  color: #000;
  margin-right: 10px;
  cursor: pointer;
  padding: 15px 25px;
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
  }
`;

export const ButtonComment = styled.div`
  background-color: #333;
  color: #fff;
  margin-right: 10px;
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
  }
`;

export const TextButton = styled.p`
  margin-right: 5px;
`;

export const Modal = styled.div`
  background-color: #7a7a7a;
  width: 40%;
  height: 70px;
  display: ${(props) => (props.isVisible ? "initial" : "none")};
  position: absolute;
  bottom: -80px;
  z-index: 3;
  border-radius: 4px;
  color: white;
  @media (max-width: 700px) {
    width: 95%;
  }
`;

export const TextModal = styled.p`
  font-size: 10px;
  text-align: center;
  margin-top: 10px;
`;

export const Star = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 5px;
`;

export const StarFilled = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 5px;
  color: #ffe600;
`;

export const ContainerStar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

export const ContainerIcon = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
