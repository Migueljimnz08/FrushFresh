import React from "react";

const Footer = () => {
  return (
  <footer className="footer">
    <section>
      <span>FRUSH FRESH</span>
      <p>Fabricación y distribución de bebidas naturales premium. Refrescando vidas con el sabor auténtico de la fruta.</p>
      <a href="null">Link IG</a><a href="null">Link Facebook</a>
    </section>
    <div>
      <h4>Horarios</h4>
      <ul>
        <li>Lun - Vie: 10:00 - 18:30</li>
        <li>Sáb - Dom: Cerrado</li>
      </ul>
      <h4>Dirección</h4>
      <p>C/ Resina 51, Nave D 28021 Madrid</p>
    </div>
    <div>
      <h4>Legal</h4>
      {/* <Link></Link>
      <Link></Link>
      <Link></Link> */}
    </div>
    <span>© 2024 Industrias Frush Fresh - Todos los derechos reservados.</span>
  </footer> 
  )
};

export default Footer;
