import React from 'react';
import { Link } from 'react-router-dom';

import { FooterBase } from './styles';
import Logo from "../../assets/img/logo.png";

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <img className="Logo" src={Logo} alt="Streaming logo" />
      </Link>
    </FooterBase>
  );
}

export default Footer;
