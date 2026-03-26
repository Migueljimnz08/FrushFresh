import React from "react";

const Gallery = () => {
  return (
    <article className="gallery">
    <div>
      <h2>Nuestros sabores</h2>
      <p>
        Una explosión de colores y sabores directamente de la naturaleza a tu paladar.
      </p>
      <button>Ver catálogo</button>
    </div>
    <div>
      <img src="null" alt="Chicha morada" />
      <h3>Chicha morada</h3>
    </div>
    <div>
      <img src="null" alt="Maracuyá fresh" />
      <h3>Maracuyá</h3>
    </div>
    <div>
      <img src="null" alt="Emoliente" />
      <h3>Emoliente</h3>
    </div>
    <div>
      <img src="null" alt="Tamarindo" />
      <h3>Tamarindo</h3>
    </div>
    </article>
  );
};

export default Gallery;
