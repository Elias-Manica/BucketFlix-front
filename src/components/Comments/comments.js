import { useState } from "react";

import {
  ViewComment,
  InputComment,
  ImageUser,
  Icon,
  Comment,
  TextComment,
  CommentInfo,
  CommentUser,
  NameUser,
  TextDate,
  ViewStart,
  ViewStar,
  StarRated,
  ContainerRated,
  Star,
  StarFilled,
} from "./styles";

import { IoMdSend, IoIosStarOutline, IoIosStar } from "react-icons/io";

export default function Comments({ inputRef }) {
  const [rated, setRated] = useState(0);
  return (
    <>
      <ContainerRated>
        {rated === 0 && (
          <>
            <Star>
              <IoIosStarOutline onClick={() => setRated(1)} />
            </Star>
            <Star>
              <IoIosStarOutline onClick={() => setRated(2)} />
            </Star>
            <Star>
              <IoIosStarOutline onClick={() => setRated(3)} />
            </Star>
            <Star>
              <IoIosStarOutline onClick={() => setRated(4)} />
            </Star>
            <Star>
              <IoIosStarOutline onClick={() => setRated(5)} />
            </Star>
          </>
        )}
        {rated === 1 && (
          <>
            <StarFilled>
              <IoIosStar onClick={() => setRated(1)} />
            </StarFilled>
            <Star>
              <IoIosStarOutline onClick={() => setRated(2)} />
            </Star>
            <Star>
              <IoIosStarOutline onClick={() => setRated(3)} />
            </Star>
            <Star>
              <IoIosStarOutline onClick={() => setRated(4)} />
            </Star>
            <Star>
              <IoIosStarOutline onClick={() => setRated(5)} />
            </Star>
          </>
        )}
        {rated === 2 && (
          <>
            <StarFilled>
              <IoIosStar onClick={() => setRated(1)} />
            </StarFilled>
            <StarFilled>
              <IoIosStar onClick={() => setRated(2)} />
            </StarFilled>
            <Star>
              <IoIosStarOutline onClick={() => setRated(3)} />
            </Star>
            <Star>
              <IoIosStarOutline onClick={() => setRated(4)} />
            </Star>
            <Star>
              <IoIosStarOutline onClick={() => setRated(5)} />
            </Star>
          </>
        )}
        {rated === 3 && (
          <>
            <StarFilled>
              <IoIosStar onClick={() => setRated(1)} />
            </StarFilled>
            <StarFilled>
              <IoIosStar onClick={() => setRated(2)} />
            </StarFilled>
            <StarFilled>
              <IoIosStar onClick={() => setRated(3)} />
            </StarFilled>
            <Star>
              <IoIosStarOutline onClick={() => setRated(4)} />
            </Star>
            <Star>
              <IoIosStarOutline onClick={() => setRated(5)} />
            </Star>
          </>
        )}
        {rated === 4 && (
          <>
            <StarFilled>
              <IoIosStar onClick={() => setRated(1)} />
            </StarFilled>
            <StarFilled>
              <IoIosStar onClick={() => setRated(2)} />
            </StarFilled>
            <StarFilled>
              <IoIosStar onClick={() => setRated(3)} />
            </StarFilled>
            <StarFilled>
              <IoIosStar onClick={() => setRated(4)} />
            </StarFilled>
            <Star>
              <IoIosStarOutline onClick={() => setRated(5)} />
            </Star>
          </>
        )}
        {rated === 5 && (
          <>
            <StarFilled>
              <IoIosStar onClick={() => setRated(1)} />
            </StarFilled>
            <StarFilled>
              <IoIosStar onClick={() => setRated(2)} />
            </StarFilled>
            <StarFilled>
              <IoIosStar onClick={() => setRated(3)} />
            </StarFilled>
            <StarFilled>
              <IoIosStar onClick={() => setRated(4)} />
            </StarFilled>
            <StarFilled>
              <IoIosStar onClick={() => setRated(5)} />
            </StarFilled>
          </>
        )}
      </ContainerRated>
      <ViewComment>
        <ImageUser src="https://i.pinimg.com/736x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg" />
        <InputComment
          placeholder="Escreva sua opinião do filme"
          ref={inputRef}
        />
        <Icon>
          <IoMdSend />
        </Icon>
      </ViewComment>
      <Comment>
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
            Muito ruim Muito ruim Muito ruimMuito ruim Muito ruim Muito ruim
            Muito ruimMuito ruim Muito ruim Muito ruim Muito ruimMuito ruim
          </TextComment>
          <TextDate>26/01/2023</TextDate>
        </CommentInfo>
      </Comment>
    </>
  );
}
