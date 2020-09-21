import React from "react";
import { Link } from "react-router-dom";

import PageDefault from "../../../components/PageDefault";

const RegisterMedia = () => {
  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>

      <Link to="/register/category">Cadastrar categoria</Link>
    </PageDefault>
  );
};

export default RegisterMedia;
