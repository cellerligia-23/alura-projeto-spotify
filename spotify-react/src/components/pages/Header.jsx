import React from "react";
import '../../styles/header.css'
import smallRight from "../../assets/img/icon/small-right.png"
import smallLeft from "../../assets/img/icon/small-left.png"
import search from "../../assets/img/icon/search.png"


const Header = () => {
  return (
    <nav class="hearder__navigation">
      <div class="navigation">
        <button class="arrow-left">
          <img src={smallLeft} alt="Seta esquerda" />
        </button>
        <button class="arrow-right">
          <img src={ smallRight } alt="Seta direita" />
        </button>
      </div>
      <div class="header__search">
        <img src={ search } alt="" />
        <input id="search-input" type="text" placeholder="O que você quer ouvir?" maxlength="800"/>
      </div>
      <div class="header__login">
        <button class="subscribe">Inscreva-se</button>
        <button class="login">Entrar</button>
      </div>
  </nav>
  );
};

export default Header;