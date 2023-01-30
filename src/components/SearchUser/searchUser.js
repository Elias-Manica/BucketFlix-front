import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  ContainerInput,
  ContainerMovie,
  ContainerView,
  ImageMovie,
  Infos,
  Input,
  NameMovie,
  View,
} from "./styles";

import { getMovieByName } from "../../services/movieService";
import { getUser } from "../../services/apiService";

import { BiCameraMovie } from "react-icons/bi";

export default function SearchUser({
  selectUser,
  name,
  setName,
  nameUser,
  setNameUser,
}) {
  const [list, setList] = useState([]);

  const navigate = useNavigate();

  async function getByName(value = name) {
    try {
      if (value) {
        const response = await getMovieByName(value);
        setList(response.data.results);

        return;
      }
      const response = await getMovieByName(name);
      setList(response.data.results);
    } catch (error) {}
  }

  async function getUserByName(value = nameUser) {
    try {
      if (value) {
        const response = await getUser(value);
        setList(response.data);
        return;
      }
      const response = await getUser(nameUser);
      setList(response.data);
    } catch (error) {}
  }

  return (
    <View>
      <ContainerInput>
        <Input
          placeholder={
            selectUser ? "Pesquise por usuários..." : "Pesquise por filmes..."
          }
          onChange={(e) => {
            setName(e.target.value);
            setNameUser(e.target.value);
            if ((name.length > 2 || e.target.value > 2) && !selectUser) {
              getByName(e.target.value);
            }
            if ((nameUser.length > 2 || e.target.value > 2) && selectUser) {
              getUserByName(e.target.value);
            }
          }}
        />
      </ContainerInput>
      <ContainerView>
        {name.length > 2 &&
          list.length > 0 &&
          list.map((item, index) => (
            <>
              {selectUser ? (
                <ContainerMovie onClick={() => navigate(`/user/${item.id}`)}>
                  <Infos>
                    <ImageMovie src={item.pictureUrl} />
                    <NameMovie>{item.username}</NameMovie>
                  </Infos>
                  <BiCameraMovie color="#000" />
                </ContainerMovie>
              ) : (
                <ContainerMovie
                  key={index}
                  onClick={() => navigate(`/movie/${item.id}`)}
                >
                  <Infos>
                    <ImageMovie
                      src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    />
                    <NameMovie>{item.original_title}</NameMovie>
                  </Infos>
                  <BiCameraMovie color="#000" />
                </ContainerMovie>
              )}
            </>
          ))}
      </ContainerView>
    </View>
  );
}
