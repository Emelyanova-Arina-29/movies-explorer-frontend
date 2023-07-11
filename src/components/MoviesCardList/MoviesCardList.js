import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard"

function MoviesCardList() {
  return (
    <section className="cards">
      <MoviesCard />
      <div className="cards__container-button">
        <button className="cards__button" type="button">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;