// import {Outlet} from "react-router-dom";
import Sergio from "../../assets/Sergio.png";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.title}>About Sergio 🤓</h1>
        <p>¡Hola! Mi nombre es Sergio Suárez.</p>
        <p>
          Soy estudiante de programación en SoyHenry. Actualmente estoy haciendo
          el Bootcamp de Full Stack Web Developer.
        </p>
        <p>
          En este proyecto encontrarás una web en la que podés buscar cualquier personaje de Rick & Morty y visualizar en pantalla su imagen 
          junto con algunos datos del personaje. Espero que te guste mi diseño y dedicación en esta página
        </p>
        <p>Para buscar un personaje volvé a Home, escribí un número de id y hacé click en Agregar. ¿Sabes cuántos personajes hay?</p>
      </div>
      <div className={styles.divImage}>
        <img className={styles.sergio} src={Sergio} alt="" />
      </div>
    </div>
  );
};

export default About;
