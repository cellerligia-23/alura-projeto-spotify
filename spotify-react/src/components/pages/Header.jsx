import React from "react";
import '../../styles/header.css'
import smallRight from "../../assets/img/icon/small-right.png"
import smallLeft from "../../assets/img/icon/small-left.png"
import search from "../../assets/img/icon/search.png"


const Header = () => {
  return (
    <nav className="hearder__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={smallLeft} alt="Seta esquerda" />
        </button>
        <button className="arrow-right">
          <img src={ smallRight } alt="Seta direita" />
        </button>
      </div>
      <div className="header__search">
        <img src={ search } alt="" />
        <input id="search-input" type="text" placeholder="O que você quer ouvir?" maxLength="800"/>
      </div>
      <div className="header__login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
  </nav>
  );
};

export default Header;