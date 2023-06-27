import React from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from 'react-redux';
import { getByName } from "../../redux/actions";

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleRedirect = () => {
    history.push("/home");
    window.location.reload()
  };

  const onSearch = (name) => {
    dispatch(getByName(name))
  }

  return (
    <nav className={styles.nav}>
      <div>
        <Link to="/">
          <button className={styles.link}>Landing</button>
        </Link>
        <Link to="/home">
          <button className={styles.link} onClick={handleRedirect}>
            Home
          </button>
        </Link>
        <Link to="/create">
          <button className={styles.link}>Crear un nuevo perro</button>
        </Link>   
        
      </div>
      <SearchBar onSearch={onSearch}/>
    </nav>
  );
};

export default NavBar;
