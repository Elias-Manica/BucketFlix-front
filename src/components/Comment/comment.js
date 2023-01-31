import { useNavigate } from "react-router-dom";

import {
  CommentUser,
  ImageUser,
  NameUser,
  CommentInfo,
  ViewStar,
  TextComment,
  TextDate,
  DeleteIcon,
  CommentContainer,
  Star,
  StarFilled,
} from "./styles";

import { IoIosStarOutline, IoIosStar, IoIosClose } from "react-icons/io";

import { removeComment } from "../../services/apiService";
import Swal from "sweetalert2";

export default function CommentStyle({
  name,
  img,
  comment,
  date,
  userid,
  rated,
  commentid,
  getComment,
}) {
  const navigate = useNavigate();
  const urlProfile = JSON.parse(localStorage.getItem("bucketflix"));

  const remove = async () => {
    try {
      Swal.fire({
        title: "Tem certeza que deseja excluir o comentário?",
        text: "Você não consiguirá recuperá-lo",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, quero deletar!",
      })
        .then(async () => {
          const response = await removeComment(urlProfile.token, commentid);
          if (response.data.msg) {
            Swal.fire({
              position: "top-end",
              icon: "sucess",
              title: `${response.data.msg}`,
              showConfirmButton: false,
              timer: 1500,
            });
            getComment();
            return;
          }
          Swal.fire({
            position: "top-end",
            icon: "sucess",
            title: "Comentário removido",
            showConfirmButton: false,
            timer: 1500,
          });
          getComment();
        })
        .catch(() => {
          return;
        });
    } catch (error) {
      if (error.response.data.msg) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.response.data.msg}`,
          showConfirmButton: false,
          timer: 1500,
        });

        return;
      }
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Algo de errado aconteceu, tente novamente mais tarde",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <CommentContainer>
      <CommentUser>
        <ImageUser src={img} onClick={() => navigate(`/user/${userid}`)} />
        <NameUser>{name}</NameUser>
      </CommentUser>
      <CommentInfo>
        <ViewStar>
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
        </ViewStar>
        <TextComment>{comment}</TextComment>
        <TextDate>{new Date(date).toUTCString("pt-BR")}</TextDate>
        {Number(urlProfile.userid) === userid && (
          <DeleteIcon onClick={remove}>
            <IoIosClose />
          </DeleteIcon>
        )}
      </CommentInfo>
    </CommentContainer>
  );
}
