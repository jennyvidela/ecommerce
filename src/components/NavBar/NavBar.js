import React from "react";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";



function NavBar (){
    return   <nav className="navbar navbar-expand-lg  sticky-top">
    <div className="container">
        <a className="navbar-brand" href="/">
            <img src="logo.png" alt="Logo" />
          </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-right">
          <li className="nav-item">
            <a className="nav-link"  href="/">PAQUETES EMPRESA</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">PAQUETES EMPREDEDORES</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">DISEÑO A MEDIDA</a>
          </li>
        </ul>
        <CartWidget/>
      </div>
    </div>
  </nav>

}

export default NavBar;