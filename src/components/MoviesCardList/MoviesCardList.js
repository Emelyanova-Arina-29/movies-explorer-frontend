import React from "react";
import { useLocation } from "react-router-dom";

import {
  DECKTOP_SHOW_MORE_MOVIES,
  TABLET_SHOW_MORE_MOVIES,
  MOBILE_SHOW_MORE_MOVIES,
} from "../../utils/constants";

import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

import "./MoviesCardList.css";

function MoviesCardList({
  isLoading,
  cards,
  savedMovies,
  isSavedFilms,
  onLikeMovie,
  onDeleteMovie,
  isError,
  isEmptyList,
}) {
  const { pathname } = useLocation();
  const [showListMovies, setShowListMovies] = React.useState(0);

  function showMovie() {
    const display = window.innerWidth;
    if (display > 1000) {
      setShowListMovies(16);
    } else if (display > 700) {
      setShowListMovies(8);
    } else {
      setShowListMovies(5);
    }
  }

  function showMoreMovie() {
    const display = window.innerWidth;
    if (display > 1279) {
      setShowListMovies(showListMovies + DECKTOP_SHOW_MORE_MOVIES);
    } else if (display > 990) {
      setShowListMovies(showListMovies + TABLET_SHOW_MORE_MOVIES);
    } else {
      setShowListMovies(showListMovies + MOBILE_SHOW_MORE_MOVIES);
    }
  }

  function getSavedMovie(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  }

  React.useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", showMovie);
    }, 500);
  });

  React.useEffect(() => {
    showMovie();
  }, []);

  return (
    <section className="cards">
      {isLoading && <Preloader />}
      {isEmptyList && !isLoading && (
        <p className="cards__error">Ничего не найдено</p>
      )}
      {isError && !isLoading && (
        <p className="cards__error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз.
        </p>
      )}
      {!isLoading && !isError && !isEmptyList && (
        <>
          {pathname === "/saved-movies" ? (
            <>
              <ul className="cards__list">
                {cards.map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    liked={getSavedMovie(savedMovies, card)}
                    cards={cards}
                    card={card}
                    savedMovies={savedMovies}
                    isSavedFilms={isSavedFilms}
                    onDeleteFilm={onDeleteMovie}
                    onLikeFilm={onLikeMovie}
                  />
                ))}
              </ul>
            </>
          ) : (
            <>
              <ul className="cards__list">
                {cards.slice(0, showListMovies).map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    liked={getSavedMovie(savedMovies, card)}
                    cards={cards}
                    card={card}
                    savedMovies={savedMovies}
                    isSavedFilms={isSavedFilms}
                    onDeleteFilm={onDeleteMovie}
                    onLikeFilm={onLikeMovie}
                  />
                ))}
              </ul>
              {cards.length > showListMovies ? (
                <div
                  className="cards__container-button"
                  onClick={showMoreMovie}
                >
                  <button className="cards__button" type="button">
                    Ещё
                  </button>
                </div>
              ) : (
                ""
              )}
            </>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
