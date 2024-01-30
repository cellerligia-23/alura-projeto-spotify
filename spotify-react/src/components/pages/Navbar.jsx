import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons'
import "../../styles/navbar.css"
import Section from "./Section";
import logoSpotify from "../../assets/img/logo/spotify-logo-1.png"

const Navbar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar__navigation">
        <div className="logo">
          <a href="https://www.spotify.com/br-pt/premium/" target="_blank">
            <img src={ logoSpotify } alt="spotify logo" id="nav-logo" />
          </a>
          <ul>
            <li>
              <a href="">
                <span className="fa-home">
                  <FontAwesomeIcon icon={ faHome } />
                </span>
                <span>Início</span>
              </a>
            </li>
            <li>
              <a href="">
                <span  className="fa-search">
                <FontAwesomeIcon icon={ faSearch } />
                </span>
                <span>Buscar</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Section/>
    </div>
  );
}

export default Navbar;