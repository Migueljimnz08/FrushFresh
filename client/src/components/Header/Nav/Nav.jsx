import React from "react";
import { Link } from "react-router-dom";

const links = [
 {to: "/", label: "Inicio"},
 {to: "/products", label: "Sabores"},
 {to: "/services", label:"Servicios"},
 {to: "/contact", label:"Contacto"}
];

const Nav = ({isOpen, onClose}, i) => {
  return (
  <nav id="navBar"
  className={`nav ${isOpen ? "nav_open" : ""}`}
  aria-hidden={!isOpen}>
    <ul className="nav_list">
      {links.map(({to, label}) => (
        <li key={to} className="nav_item">
          <Link to={to} onClick={onClose} className={`nav_link ${i === links.length -1 ? "nav_link-cta" : ""}`}>{label}</Link>
        </li>
      ))}
    </ul>
  
  </nav>
  );
};

export default Nav;
