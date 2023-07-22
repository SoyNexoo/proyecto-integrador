import Card from '../Card/Card';
import s from "./Cards.module.css"

export default function Cards(props) {
   return(
   <div className={s.Cards}>
      {props.characters.map((character) => (
            <Card
               key={character.id}
               id={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin}
               image={character.image}
               onClose={props.onClose}
            />
         ))}
   </div>
   );
}
