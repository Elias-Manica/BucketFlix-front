import { useState, useEffect } from "react";

import { getAllData } from "../../services/movieService";

import ScrollMovies from "../../components/ScroolMovies/scrollMovies";

export default function HomeScreen() {
  const [data, setData] = useState([]);

  async function getData() {
    const response = await getAllData();

    setData(response);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((value, index) => (
        <ScrollMovies key={index} tittle={value.tittle} list={value.list} />
      ))}
    </>
  );
}
