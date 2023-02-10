import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Card(props) {
  const [isFav, setIsFav] = useState(false);

  const myFavorites = useSelector((state) => state.allCharacters);

  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(props.id));
    } else {
      setIsFav(true);
      dispatch(addFavorite(props));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.divCard}>
      {isFav ? (
        <button
          className={styles.favButton}
          onClick={() => handleFavorite(props.id)}
        >
          ❤️
        </button>
      ) : (
        <button
          className={styles.favButton}
          onClick={() => handleFavorite(props.id)}
        >
          🤍
        </button>
      )}
      <button className={styles.cardButton} onClick={props.onClose}>
        X
      </button>{" "}
      <Link className={styles.Link} to={`/detail/${props.detailId}`}>
        <h2 className={styles.nameCard}>{props.name}</h2>
        <img
          className={styles.cardImg}
          src={props.image}
          alt="aqui va una imagen"
        />
        <div>
          <h2 className={styles.cardSpecies}>{props.species}</h2>
          <h2 className={styles.cardGender}>{props.gender}</h2>
        </div>
      </Link>
    </div>
  );
}
