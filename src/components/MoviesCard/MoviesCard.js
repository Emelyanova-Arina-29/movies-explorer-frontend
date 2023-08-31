import React from "react";
import { getHoursFromMins } from "../../utils/filterMovies";

import "./MoviesCard.css";

function MoviesCard({
  card,
  onLikeFilm,
  onDeleteFilm,
  isSavedFilms,
  savedMovies,
  liked,
}) {
  const cardLikeButton = `${
    liked ? "card__like card__like_active" : "card__like"
  }`;

  function handleDeleteCard() {
    onDeleteFilm(card);
  }

  function handleLikeToggle() {
    if (liked) {
      onDeleteFilm(savedMovies.filter((m) => m.movieId === card.id)[0]);
    } else {
      onLikeFilm(card);
    }
  }

  return (
    <li key={card.id} className="card">
      <a href={card.trailerLink} rel="noreferrer" target="_blank">
        <img
          className="card__image"
          alt={card.nameRU}
          src={
            isSavedFilms
              ? card.image
              : `https://api.nomoreparties.co/${card.image.url}`
          }
        />
      </a>
      <div className="card__container">
        <h2 className="card__title">{card.nameRU}</h2>
        {!isSavedFilms ? (
          <button
            className={cardLikeButton}
            type="button"
            onClick={handleLikeToggle}
          ></button>
        ) : (
          <button
            className="card__delete"
            type="button"
            onClick={handleDeleteCard}
          ></button>
        )}
      </div>
      <p className="card__duration">{getHoursFromMins(card.duration)}</p>
    </li>
  );
}
export default MoviesCard;
