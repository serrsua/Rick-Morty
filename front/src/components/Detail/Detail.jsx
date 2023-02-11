import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = (props) => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
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
      <div className={styles.container}>
        <div className={styles.data}>
          <h1 className={styles.h1}>Nombre: {character.name}</h1>
          <h2 className={styles.h2}>Estado: {character.status}</h2>
          <h2 className={styles.h2}>Especie: {character.species}</h2>
          <h2 className={styles.h2}>Género: {character.gender}</h2>

          {/* para preguntar si existe la propiedad "origin" podemos usar "?" */}
          <h2 className={styles.h2}>Orígen: {character.origin}</h2>
        </div>

        <div className={styles.img}>
          <img className={styles.charImg} src={character.image} alt="imagen del personaje" />
        </div>
      </div>
      <button className={styles.bthButton} onClick={handleClick}>
        Back to Home
      </button>
    </>
  );
};

export default Detail;
