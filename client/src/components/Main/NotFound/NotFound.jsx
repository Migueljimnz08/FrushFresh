import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return <section className="notFound">
    <img src="null" alt="Imagen error 404" />
    <h1>¡Ruta no encontrada!</h1>
    <div className="button">
      <Link to="/" className="back-home">
      Volver al Inicio
      </Link>

    </div>
    </section>;
};

export default NotFound;
