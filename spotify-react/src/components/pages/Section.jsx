import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faGlobe, faPlus } from '@fortawesome/free-solid-svg-icons'
import "../../styles/section.css"

const Section = () => {
  return (
    <div className="library">
      <div className="library__content">
        <button className="library__button">
          <span className="fa fas fa-book">
            <FontAwesomeIcon icon={ faBook } />
          </span>
          <span>Sua Biblioteca</span>
        </button>
        <span className="fa fa-plus">
        <FontAwesomeIcon icon={ faPlus } />
        </span>
      </div>

      <section className="section-playlist">
        <div className="section-playlist__content">
          <span className="text title">Crie a sua playlist.</span>
          <span className="text subtitle">É fácil, vamos te ajudar.</span>
        </div>
        <button className="section-playlist__button">
          <span>Criar playlist</span>
        </button>

      </section>

      <div className="cookies">
        <a href="">Cookies</a>
      </div>

      <div className="languages">
        <button className="languages__button">
          <span className="fa fa-globe">
          <FontAwesomeIcon icon={ faGlobe } />
          </span>
          <span>Português do Brasil</span>
        </button>
      </div>
    </div>
  );
}

export default Section;