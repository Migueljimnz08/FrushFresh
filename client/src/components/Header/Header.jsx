import React from "react";
import Nav from "./Nav/Nav"
import {useState, useEffect} from "react";
import "./Header.css"

const Header = () => {
  const [menu, setMenu] = useState(false);

  // cierra el menu cuando cambian las dimensiones de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenu(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize" , handleResize);
  }, []);

  //Bloquea el scroll del body cuando el menu esta abierto
  useEffect(() => {
    document.body.style.overflow = menu ? "hodden" : "";
    return () => document.body.style.overflow = "";
  }, [menu]);

  return (
  <header className="header">
    <div className="header_inner">
      <a href="/" className="header_logo"><img src="null" alt="Logo FrushFresh" title="La mejor chicha de Madrid"/></a>

      <button
        className={`header_burger ${menu ? "header_burger-open" : ""}`}
        onClick={() => setMenu(!menu)}
        aria-label={menu ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menu}
        aria-controls="navBar">
          <span />
          <span />
          <span />
        </button>
    </div>
    
    <Nav isOpen={menu} onClose={() => setMenu(false)} />
  </header>
  )
};

export default Header;
