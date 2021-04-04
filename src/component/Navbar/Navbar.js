import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <Link exact path="/">
        <img src={logo} width="150" height="120" />
      </Link>
    </header>
  );
};

export default Navbar;
