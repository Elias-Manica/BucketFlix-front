import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center;
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
  justify-content: center;
  padding-left: 30px;
  padding-bottom: 110px;
  padding-top: 70px;
  @media (max-width: 700px) {
    padding-top: 70px;
    padding-bottom: 0px;
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
  max-width: 40%;
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
