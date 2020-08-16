import React from 'react';
import './navBar.css'
import CartIcon from './CartIcon';

const NavBar = () => {
  return(
    <nav className="navbar navbar-expand-lg ">
    <a className="navbar-brand" href="#">Wolfe Records</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto col-sm-8">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="#">Nosotros</a>
        </li>
        <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Vinilos
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Rock</a>
            <a className="dropdown-item" href="#">Pop</a>
            <a className="dropdown-item" href="#">Soul/Jazz</a>
            <a className="dropdown-item" href="#">Hip-Hop/Trap</a>
            <a className="dropdown-item" href="#">Alternativo</a>
            <a className="dropdown-item" href="#">Country/Folk</a>
            <a className="dropdown-item" href="#">Latino</a>
            <div className="dropdown-divider"/>
            <a className="dropdown-item" href="#">Nuevos Lanzamientos</a>
            <a className="dropdown-item" href="#">Ofertas</a>
          </div>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="#">Contacto</a>
        </li>
        <li className="nav-item ">
        <CartIcon/>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
      <i className="search-icon fas fa-search" aria-hidden="true"/>
        <input className="form-control mr-sm-2"  placeholder="Buscar" aria-label="Search"/>
      </form>
    </div>
  </nav>
  )
}

export default NavBar;

//render(<NavBar />, document.getElementById('root'));