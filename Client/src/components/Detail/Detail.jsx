import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import s from "./Detail.module.css"

const Detail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/detail/${id}`).then(
      (response) => {
        if (response.data.name) {
          console.log(response)
          setCharacter(response.data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={s.container}>
      
      <div className={s.info}>
        <h2>{character.name}</h2>
        <h3>Gender: {character.gender === "Male" ? "♂️ Male" : "♀️ Female"}</h3>
        <h3>Status: {character.status}</h3>
        <h3>Specie: {character.species}</h3>
        <h3>Origin: {character.origin?.name}</h3>
      </div>
        <img src={character.image} alt={character.name} className={s.image}/>
    </div>
  );
};

export default Detail;
