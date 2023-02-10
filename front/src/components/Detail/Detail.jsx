import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Detail.module.css";

const Detail = (props) => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  console.log(character);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <div className="data">
          <h1 className="h1">Nombre: {character.name}</h1>
          <h2 className="h2">Estado: {character.status}</h2>
          <h2 className="h2">Especie: {character.species}</h2>
          <h2 className="h2">Género: {character.gender}</h2>

          {/* para preguntar si existe la propiedad "origin" podemos usar "?" */}
          <h2>Orígen: {character.origin?.name}</h2>
        </div>

        <div className="img">
          <img src={character.image} alt="imagen del personaje" />
        </div>
        <button onClick={handleClick}>Back to Home</button>
      </div>
    </>
  );
};

export default Detail;
