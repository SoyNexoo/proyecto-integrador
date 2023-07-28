import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/NavBar/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import { useNavigate } from "react-router-dom";
import Favorites from "./components/Favorites/favorites";

function App() {
  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  async function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/user/login/';

    try {
      const backLogin = await axios(`${URL}?email=${email}&password=${password}`)
      const {data} = backLogin
      const {access} = data;
      setAccess(access);
      access && navigate("/home")
    } catch (error) {
      alert(error.message)
    }


    // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
    //    const { access } = data;
    //    setAccess(data);
    //    access && navigate('/home');
    // });
 }
 
 function logOut () {
  setAccess(false)
 }

  useEffect(() => {
    !access && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

  async function onSearch(id) {
    // axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
    //   (response) => {
    //     if (response.data.name) {
    //       setCharacters((oldChars) => [...oldChars, response.data]);
    //     } else {
    //       window.alert("¡No hay personajes con este ID!");
    //     }
    //   }
    // );

    try {
      const backReq = await axios(`http://localhost:3001/characters/${id}`)
      if (backReq.data.name) {
        setCharacters((oldChars) => [...oldChars, backReq.data]);
      } else {
        alert("Character not found")
      }
    } catch (error) {
      alert(error.response.data.error)
    }

  }

  const onClose = (id) => {
    setCharacters(characters.filter((pj) => pj.id !== id));
  };

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} />}
      {/* <Nav onSearch={onSearch} /> */}
      {/* <Cards  /> */}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
