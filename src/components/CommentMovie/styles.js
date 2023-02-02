import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;
  padding-left: 30px;
  position: relative;
  &:hover {
    opacity: 1;
  }

  @media (max-width: 700px) {
    margin-bottom: 30px;
    padding-left: 0px;
  }
`;

export const Tittle = styled.h1`
  margin-left: 30px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ContainerRow = styled.div`
  overflow-x: hidden;
`;

export const Image = styled.img`
  width: 50%;
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
  width: 300px;
  background-color: #000;
  color: #fff;
  justify-content: center;
  border-radius: 10px;
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

export const ViewStar = styled.div`
  display: flex;
  font-size: 20px;
  width: 100%;
  justify-content: center;
  margin-top: 5px;
`;

export const Star = styled.div`
  font-size: 18px;
`;

export const StarFilled = styled.div`
  font-size: 18px;

  color: #ffe600;
`;

export const ViewInfos = styled.div`
  display: flex;
`;

export const TittleMovie = styled.h1`
  text-align: center;
  width: 100%;
  margin-top: 10px;
  font-weight: bold;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const ContainerInfos = styled.div`
  width: 100%;
`;

export const ContainerText = styled.div`
  margin-left: 5px;
  margin-top: 10px;
`;

export const TextComment = styled.p`
  font-size: 10px;
`;

export const TextDate = styled.h1`
  font-size: 11px;
  color: #000;
  position: absolute;
  right: 0px;
  bottom: 0px;
`;

export const TextSeeMoreTop = styled.h1`
  font-weight: bold;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  cursor: pointer;
  @media (max-width: 700px) {
    font-size: 13px;
  }
`;
