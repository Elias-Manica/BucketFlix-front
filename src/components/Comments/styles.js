import styled from "styled-components";

export const ViewComment = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageUser = styled.img`
  height: 35px;
  cursor: pointer;
  margin-right: 10px;
`;

export const InputComment = styled.input`
  height: 40px;
  width: 70%;
  background: #343334;
  border-radius: 4px;
  padding-left: 10px;
  color: #fff;
`;

export const Icon = styled.div`
  font-size: 30px;
  cursor: pointer;
  margin-left: 5px;
`;

export const CommentContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
`;

export const CommentUser = styled.div``;

export const NameUser = styled.h3`
  font-size: 12px;
  max-width: 30px;
  text-align: center;
  font-weight: bold;
`;

export const CommentInfo = styled.div`
  background: #343334;
  width: 70%;
  padding: 30px 20px;
  position: relative;
`;

export const TextComment = styled.p`
  font-size: 16px;
  color: #fff;
`;

export const TextDate = styled.h1`
  font-size: 11px;
  color: #fff;
  position: absolute;
  right: 10px;
  bottom: 5px;
`;

export const ViewStar = styled.div`
  margin-top: -10px;
  margin-bottom: 10px;
  display: flex;
  font-size: 20px;
`;

export const StarRated = styled.div`
  color: #ffe600;
`;

export const ContainerRated = styled.div`
  margin-left: 50px;
  margin-bottom: 10px;
  display: flex;
  font-size: 20px;
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

export const DeleteIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 16px;
`;
