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
  Star,
  StarFilled,
} from "./styles";

import { IoIosStarOutline, IoIosStar, IoIosClose } from "react-icons/io";

export default function CommentStyle({
  name,
  img,
  comment,
  date,
  userid,
  rated,
}) {
  const urlProfile = JSON.parse(localStorage.getItem("bucketflix"));
  return (
    <CommentContainer>
      {rated === 0 && (
        <>
          <Star>
            <IoIosStarOutline />
          </Star>
          <Star>
            <IoIosStarOutline />
          </Star>
          <Star>
            <IoIosStarOutline />
          </Star>
          <Star>
            <IoIosStarOutline />
          </Star>
          <Star>
            <IoIosStarOutline />
          </Star>
        </>
      )}
      {rated === 1 && (
        <>
          <StarFilled>
            <IoIosStar />
          </StarFilled>
          <Star>
            <IoIosStarOutline />
          </Star>
          <Star>
            <IoIosStarOutline />
          </Star>
          <Star>
            <IoIosStarOutline />
          </Star>
          <Star>
            <IoIosStarOutline />
          </Star>
        </>
      )}
      {rated === 2 && (
        <>
          <StarFilled>
            <IoIosStar />
          </StarFilled>
          <StarFilled>
            <IoIosStar />
          </StarFilled>
          <Star>
            <IoIosStarOutline />
          </Star>
          <Star>
            <IoIosStarOutline />
          </Star>
          <Star>
            <IoIosStarOutline />
          </Star>
        </>
      )}
      {rated === 3 && (
        <>
          <StarFilled>
            <IoIosStar />
          </StarFilled>
          <StarFilled>
            <IoIosStar />
          </StarFilled>
          <StarFilled>
            <IoIosStar />
          </StarFilled>
          <Star>
            <IoIosStarOutline />
          </Star>
          <Star>
            <IoIosStarOutline />
          </Star>
        </>
      )}
      {rated === 4 && (
        <>
          <StarFilled>
            <IoIosStar />
          </StarFilled>
          <StarFilled>
            <IoIosStar />
          </StarFilled>
          <StarFilled>
            <IoIosStar />
          </StarFilled>
          <StarFilled>
            <IoIosStar />
          </StarFilled>
          <Star>
            <IoIosStarOutline />
          </Star>
        </>
      )}
      {rated === 5 && (
        <>
          <StarFilled>
            <IoIosStar />
          </StarFilled>
          <StarFilled>
            <IoIosStar />
          </StarFilled>
          <StarFilled>
            <IoIosStar />
          </StarFilled>
          <StarFilled>
            <IoIosStar />
          </StarFilled>
          <StarFilled>
            <IoIosStar />
          </StarFilled>
        </>
      )}

      <CommentUser>
        <ImageUser src={img} />
        <NameUser>{name}</NameUser>
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
        <TextComment>{comment}</TextComment>
        <TextDate>{new Date(date).toLocaleString("pt-BR")}</TextDate>
        {Number(urlProfile.userid) === userid && (
          <DeleteIcon>
            <IoIosClose />
          </DeleteIcon>
        )}
      </CommentInfo>
    </CommentContainer>
  );
}
