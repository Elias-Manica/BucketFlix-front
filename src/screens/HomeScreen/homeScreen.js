import { useState, useEffect } from "react";

import { getAllData } from "../../services/movieService";

export default function HomeScreen() {
  const [data, setData] = useState([]);

  async function getData() {
    const response = await getAllData();
    console.log(response);
    setData(response);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Olá mundo</h1>
    </>
  );
}
