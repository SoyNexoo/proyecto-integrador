import { useState } from "react";
import s from "./SearchBar.module.css"

export default function SearchBar(props) {
   const {onSearch} =  props

   const[id, setId] = useState("")
   const handleChange = (event) => {
      setId(event.target.value)
   }
   return (
      
      <div className={s.container}>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" className={s.img} alt="Rick And Morty" />
         <div className={s.contenedor}>
         <nav className={s.nav} onSearch={onSearch}>
            <input
             type='search' 
             placeholder="Rick.." 
             className={s.input} 
             onChange={handleChange}
             value={id}
             />
            <button
            className={s.btn}
            onClick={() => {props.onSearch(id)}}><span className={s.span}>AGREGAR</span></button>
         </nav>
         </div>
      </div>
   );
}
