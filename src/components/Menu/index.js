import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import Logo from "../../assets/img/logo.png";
import Button from "../Button";

const Menu = () => {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Streaming logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/register/media">
        New media
      </Button>
    </nav>
  );
};

export default Menu;
