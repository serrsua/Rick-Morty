import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";

import styles from "./Favorites.module.css";

export const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterCards("All"));
    dispatch(orderCards("Ascendente"));
  }, [dispatch]);

  const order = (e) => {
    dispatch(orderCards(e.target.value));
  };
  const filter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div className={styles.divFavorites}>
      <div>
        <select onChange={order}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={filter}>
          <option value="All">Todos</option>
          <option value="Male">Hombre</option>
          <option value="Female">Mujer</option>
          <option value="Genderless">Sin género</option>
          <option value="unknown">Desconocido</option>
        </select>
      </div>
      <div className={styles.favContainer}>
        {myFavorites.map((char) => {
          return (
            <div className={styles.containerCharData}>
              <div className={styles.charData}>
                <h2 className={styles.h2}>Nombre: {char.name}</h2>
                <h2 className={styles.h2}>Especie: {char.species}</h2>
                <h2 className={styles.h2}>Género {char.gender}</h2>
              </div>
              <img className={styles.img} src={char.image} alt="image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
