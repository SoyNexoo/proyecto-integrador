import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import s from "./Detail.module.css"

const Detail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
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
        <h2 className={s.name}>{character.name}</h2>
        <h3 className={s.gender}>Gender: {character.gender === "Male" ? "♂️ Male" : "♀️ Female"}</h3>
        <h3 className={s.status}>{character.status}</h3>
        <h3 className={s.species}>{character.species}</h3>
        <h3 className={s.origin}>{character.origin?.name}</h3>
      </div>
        <img src={character.image} alt={character.name} className={s.image}/>
    </div>
  );
};

export default Detail;
