import React from "react";

import "./styles.css";
import Logo from "../../assets/img/logo.png";
import Button from "../Button";

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Streaming logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        New movie
      </Button>
    </nav>
  );
};

export default Menu;
