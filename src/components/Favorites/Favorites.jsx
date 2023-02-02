import React from "react";
import { useSelector } from "react-redux";

import styles from "./Favorites.module.css";

export const Favorites = () => {
    
    const myFavorites = useSelector((state) => state.myFavorites);

  return (
    <div>
      {
        myFavorites.map((char) => {
          return(
            <div>
              <h2>Nombre: {char.name}</h2>
              <h2>Especie: {char.species}</h2>
              <h2>Género {char.gender}</h2>
              <img src={char.image} alt="image" />              
            </div>
          )
        })
      }
    </div>
  );
};
