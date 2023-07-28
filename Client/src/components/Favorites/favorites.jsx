import { connect, useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import s from "./favorites.module.css"
import { filterCards, orderCards, showAll } from "../../redux/action";
import { useState } from "react";

function Favorites(){

    const favorites = useSelector((state) => state.favorites)

    const dispatch = useDispatch()

    const [boolean, setBoolean] = useState(false)

   
    function handleOrder(event){
        dispatch(orderCards(event.target.value))
        setBoolean(!boolean)
    }
    function handleFilter(event){
        // dispatch(filterCards((event.target.value)))

        const selectedValue = event.target.value;
        console.log(selectedValue)
        if(selectedValue === "NONE"){
          dispatch(showAll())
        }else{
          dispatch(filterCards(selectedValue))
        }
    }

    return (
        <div className={s.container}>
          <div className={s.selectContainer}>
            <select onChange={handleOrder}>
              <option value="A">Ascendente</option>
              <option value="D">Descendente</option>
            </select>
    
            <select onChange={handleFilter}>
              <option value="NONE">NONE</option>
              <option value="unknown">UNKNOWN</option>
              <option value="genderless">GENDERLESS</option>
              <option value="Female">FEMALE</option>
              <option value="Male">MALE</option>
            </select>
          </div>
    
          <div className={s.cardContainer}>
            {favorites?.map((character) => (
              <Card
                key={character.id}
                id={character.id}
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                origin={character.origin}
                image={character.image}
              />
              ))}
          </div>
        </div>
      );
}

export function mapStateToProps(state){
    return{
        favorites: state.favorites
    }
}

export default connect(mapStateToProps)(Favorites)