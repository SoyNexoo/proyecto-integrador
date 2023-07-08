import s from "./Card.module.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/action";
import { connect } from "react-redux";

function Card({
  name,
  species,
  onClose,
  gender,
  status,
  origin,
  image,
  id,
  removeFavorites,
  addFavorite,
  favorites
}) {
  const [isFav, setIsFav] = useState(false);

  function handleClick() {
    if (isFav) {
      setIsFav(false);
      removeFavorites(id);
    } else {
      setIsFav(true);
      addFavorite({
        name,
        species,
        onClose,
        gender,
        status,
        origin,
        image,
        id,
      });
    }
  }

  useEffect(() => {
   favorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [favorites]);


  return (
    <div className={s.card}>
      <button className={s.btnClose} onClick={() => onClose(id)}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <img className={s.img} src={image} alt="" />
          </Link>

        <h2 className={s.name}>{name}</h2>
        <div className={s.container}>
          <h3 className={s.status}>Estado: {status}</h3>
          {/* <h2 className="card-spice">Especie: {props.species}</h2> */}
          <h3 className={s.gender}>Genero: {gender}</h3>
          {/* <h2 className="card-origin">Origen: {props.origin.name}</h2> */}
        </div>
          {isFav ? (
            <button onClick={handleClick} className={s.btnFav}>❤️</button>
          ) : (
            <button onClick={handleClick} className={s.btnFav}>🤍</button>
          )}
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFavorite: function (character) {
      const objAction = addFavorite(character);
      dispatch(objAction);
    },
    removeFavorites: function (id) {
      dispatch(deleteFavorite(id));
    },
  };
}

export function mapStateToProps(state){
   return{
      favorites: state.favorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
