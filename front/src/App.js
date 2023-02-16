import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav.jsx";
import Cards from "./components/Cards/Cards.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import { Favorites } from "./components/Favorites/Favorites";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorite } from "./redux/actions";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "sergio@prueba.com";
  const password = "sergio1234";

  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    !access && navigate("/login");
  }, [access]);

  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/");
    }
  };

  const logout = (userData) => {
    setAccess(false);
    navigate("/login");
  };

  const onSearch = (character) => {
    fetch(`http://localhost:3001/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if (!characters.find(char => char.id === data.id)){
            setCharacters((oldChars) => [...oldChars, data]);
          }
          else {alert("El personaje ya existe")}
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
    myFavorites.forEach(char => char.id === id && dispatch(deleteFavorite(char.id)));
  };

  return (
    <div className="App">
      {location.pathname !== "/login" && (
        <Nav onSearch={onSearch} logout={logout} />
      )}
      <Routes>
        <Route path="/login" element={<Form login={login} />} />
        <Route
          path="/"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route exact path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route
          path="/favorites"
          element={<Favorites />}
        />
      </Routes>
    </div>
  );
}

export default App;
