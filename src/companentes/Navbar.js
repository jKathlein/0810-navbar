import React, { useState } from "react";

import "./Navbar.scss";

const Navbar = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const abrirMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  return (
    <div className="Navbar">
      <nav>
        <div onClick={abrirMenu} id="menu-hamburguer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
        <a href="/">Home</a>
        <a href="/">Informaçoẽs</a>
        <a href="/">|Contatos</a>
        <a href="/">Mais...</a>
      </section>
    </div>
  );
};
export default Navbar;