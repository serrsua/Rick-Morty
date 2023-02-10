import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = ({ onSearch, logout }) => {
  
  return (
    <>
      <div className={styles.divNav}>
        <Link className={styles.Link1} to={"/"}>Volver a Home</Link>
        <SearchBar onSearch={onSearch} />
        <Link className={styles.Link4} to={'/favorites'}>Favoritos</Link>
        <Link className={styles.Link2} to={"/about"}>Acerca de</Link>
        <Link className={styles.Link3} onClick={logout} to={"/login"}>Salir</Link>
      </div>
    </>
  );
};

export default Nav;
