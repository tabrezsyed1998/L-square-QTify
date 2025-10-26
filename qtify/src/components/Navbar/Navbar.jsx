import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import styles from './Navbar.module.css'
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Searchbar />
      <Button text="Give Feedback" />
    </nav>
  );
};

export default NavBar;