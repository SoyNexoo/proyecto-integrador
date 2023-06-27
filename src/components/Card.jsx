import "../styles/Card.css"
export default function Card(props) {
   return (
      <div className="card-container">
         <button className="card-button" onClick={props.onClose} >X</button>
         <h2 className="card-name">Nombre: {props.name}</h2>
         <h2 className="card-status">Estado: {props.status}</h2>
         <h2 className="card-spice">Especie: {props.species}</h2>
         <h2 className="card-gender">Genero: {props.gender}</h2>
         <h2 className="card-origin">Origen: {props.origin.name}</h2>
         <img className="card-img" src={props.image} alt='' />
      </div>
   );
}
