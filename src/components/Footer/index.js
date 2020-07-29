import React from 'react';

import { FooterBase } from './styles';
import Logo from "../../assets/img/logo.png";

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={Logo} alt="Streaming logo" />
      </a>
    </FooterBase>
  );
}

export default Footer;
