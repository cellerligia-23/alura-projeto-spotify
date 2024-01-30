import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import "../../styles/main.css"
import Header from "./Header";
import { cardsInfo } from "../../assets/info-cards";

const Main = () => {
  return (
    <main className="main-container">
      <Header />
      <div className="playlist-container">
        <div className="result-playlists">

          <div className="playlist">
            <h1 id="greeting">Boas vindas</h1>
            <h2 className="session">Navegar por todas as seções</h2>
          </div>

          <div className="offer__scroll-container">
            <div className="offer__list">

              <section className="offer__list-item">

              {cardsInfo.map((card) => (
                <a href="" className="cards">
                <div className={`cards card${card.id}`}>
                  <img src={card.urlImg} alt="" />
                  <span>{card.playlist}</span>
                </div>
              </a>
              ))}

              </section>

              <div id="result-artist" className="hidden">
                <div className="grid-container">
                  <div className="artist-card">

                    <div className="card-img">
                      <img id="artist-img" className="artist-img" />
                      <div className="play">
                        <span className="fa fa-solid fa-play">
                          <FontAwesomeIcon icon={ faPlay } />
                        </span>
                      </div>
                    </div>
                    <div className="card-text">
                      <a title="Foo Fighters" className="vst" href="">
                        <span className="artist-name" id="artist-name"></span>
                        <span className="artist-categorie">Artista</span>
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}

export default Main;