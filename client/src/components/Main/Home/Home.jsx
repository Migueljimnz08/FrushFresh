import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return <section className="home">
    <article>
      <span>100% Natural</span>
      <h1>Refresca</h1>
      <span className="h1DiffColor">Tu día</span>
      <p>
        Siente la explosión de sabor con nuestra Chicha Morada artesanal y jugos tropicales.
        Sin colorantes, solo fruta real.
      </p>
    </article>
    <div>
      {/* <Link></Link>
      <Link></Link> */}
    </div>

    <article className="facts">
      <h2>Sumérgete en lo natural</h2>
      <div>
        <img src="null" alt="Eco" />
        <h3>Elaboración Artesanal</h3>
        <p>
          Procesos tradicionales que mantienen intacto el sabor de la fruta.
        </p>
      </div>
      <div>
        <img src="null" alt="Truck" />
        <h3>Distribución ágil</h3>
        <p>Llegamos a cada rincón con la frescura que nos caracteriza.</p>
      </div>
      <div>
        <img src="null" alt="Star" />
        <h3>Calidad premium</h3>
        <p>Seleccionamos las mejores frutas para un resultado excepcional.</p>
      </div>
    </article>

    <article>
      <div>
        <span>EST.2010</span>
        <img src="null" alt="" />
        <img src="null" alt="" />
      </div>
      <div>
       <h2>Nuestra <span>Herencia</span></h2>
       <p>
          En Frush Fresh, creemos que la calidad no tiene atajos. 
          Nuestra misión ha sido siempre rescatar las recetas tradicionales de las bebidas latinoamericanas y traerlas al presente con la frescura que mereces.
       </p>
       <p>
          Utilizamos entre un 30% a 50% de fruta natural en cada una de nuestras preparaciones, 
          eliminando colorantes y saborizantes artificiales para que lo que bebas sea real.
       </p>
      </div>
      <div>
        <h4>Compromiso con la Sostenibilidad</h4>
        <p>
          Apoyamos a productores locales y minimizamos nuestro impacto ambiental en cada etapa de producción.
        </p>
      </div>
    </article>

    <article>
      <div>
        <h2>¡Hablemos de frescura!</h2>
        <p>¿Tienes un negocio o quieres saber más? Escríbenos.</p>
        <form action="">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" />
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" />
          <label htmlFor="message">Mensaje</label>
          <textarea name="message" />
          <button>Enviar mensaje</button>
        </form>
      </div>
    </article>
  </section>;
};

export default Home;
