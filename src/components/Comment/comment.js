import {
  CommentUser,
  ImageUser,
  NameUser,
  CommentInfo,
  ViewStar,
  StarRated,
  TextComment,
  TextDate,
  DeleteIcon,
  CommentContainer,
} from "./styles";

import { IoIosStarOutline, IoIosStar, IoIosClose } from "react-icons/io";

export default function CommentStyle() {
  return (
    <CommentContainer>
      <CommentUser>
        <ImageUser src="https://i.pinimg.com/736x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg" />
        <NameUser>Elias da silva leignht</NameUser>
      </CommentUser>
      <CommentInfo>
        <ViewStar>
          <StarRated>
            <IoIosStar />
          </StarRated>
          <StarRated>
            <IoIosStar />
          </StarRated>
          <IoIosStarOutline />
          <IoIosStarOutline />
          <IoIosStarOutline />
        </ViewStar>
        <TextComment>
          Muito ruim Muito ruim Muito ruimMuito ruim Muito ruim Muito ruim Muito
          ruimMuito ruim Muito ruim Muito ruim Muito ruimMuito ruim
        </TextComment>
        <TextDate>26/01/2023</TextDate>
        <DeleteIcon>
          <IoIosClose />
        </DeleteIcon>
      </CommentInfo>
    </CommentContainer>
  );
}
