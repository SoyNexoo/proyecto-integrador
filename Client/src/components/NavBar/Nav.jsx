import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";
import s from "./Nav.module.css"


export default function Nav(props){
    return(
        <div className={s.div}>
            <Link to="/favorites" className={s.link}><h3>FAVS</h3></Link>
            <Link to="/about" className={s.link} ><h3>ABOUT</h3></Link>
            <Link to="/home" className={s.link} ><h3>HOME</h3></Link>
            <button onClick={props.logOut}>Cerrar</button>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}