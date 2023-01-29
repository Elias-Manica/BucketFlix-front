import styled from "styled-components";

export const Container = styled.div``;

export const View = styled.div`
  background-color: #141414;
  width: 100%;
  display: flex;
  padding-bottom: 50px;

  @media (max-width: 614px) {
    display: initial;
  }
`;

export const ContainerComment = styled.div`
  width: 50%;
  padding-left: 30px;
  padding-top: 30px;
`;

export const ContainerInfos = styled.div`
  width: 50%;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  margin-left: 50px;
  flex-direction: column;
`;

export const InputComment = styled.input`
  height: 40px;
  width: 70%;
  background: #343334;
  border-radius: 4px;
  padding-left: 10px;
  color: #fff;
`;

export const ViewComment = styled.div`
  display: flex;
  align-items: center;
`;
export const ImageUser = styled.img`
  height: 35px;
  cursor: pointer;
  margin-right: 10px;
`;

export const Icon = styled.div`
  font-size: 30px;
  cursor: pointer;
  margin-left: 5px;
`;

export const Comment = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const CommentInfo = styled.div`
  background: #343334;
  width: 70%;
  padding: 30px 20px;
`;

export const CommentUser = styled.div``;

export const NameUser = styled.h3`
  font-size: 12px;
  max-width: 30px;
  text-align: center;
  font-weight: bold;
`;

export const TextComment = styled.p`
  font-size: 16px;
  color: #fff;
`;