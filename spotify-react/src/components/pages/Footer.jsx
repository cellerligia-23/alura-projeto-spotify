import React from "react";
import "../../styles/footer.css"

const Footer = () => {
  return (
  <footer>
    <div className="footer__content">
      <span className="footer-title">TESTAR O PREMIUM DE GRAÇA</span>
      <span className="footer-subtitle">Inscreva-se para curtir músicas ilimitadas e podcasts só com alguns anúncios. 
        Não precisa de cartão de crédito.
      </span>
    </div>
    
    <button className="footer__button">
      <span>
        Inscreva-se grátis
      </span>
    </button>
  </footer>
  );
}

export default Footer;

