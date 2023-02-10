import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={styles.divCards}>
      {characters.map((character) => {
        return (
          <Card
            detailId={character.id}
            id={character.id}
            key={character.name}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() =>
              onClose(character.id)
            }
          />
        );
      })}
    </div>
  );
}
