import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import { getMovies } from "../../utils/MoviesApi";
import { filterShortMovies, filterMovies } from "../../utils/filterMovies";

import "./Movies.css";

function Movies({ savedMovies, onDeleteMovie, onLikeMovie }) {

  const [allMovies, setAllMovies] = React.useState([]);
  const [shortFilms, setShortFilms] = React.useState(false);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [isNothingFound, setIsNothingFound] = React.useState(false);
  const [isMoviesLoading, setIsMoviesLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  function handleShortFilms() {
    setShortFilms(!shortFilms);
    if (!shortFilms) {
      if (filterShortMovies(allMovies).length === 0) {
        setFilteredMovies(filterShortMovies(allMovies));
      } else {
        setFilteredMovies(filterShortMovies(allMovies));
      }
    } else {
      setFilteredMovies(allMovies);
    }
    localStorage.setItem("shortMovies", !shortFilms);
  }

  function handleSetFilteredMovies(movies, query, short) {
    const moviesCardList = filterMovies(movies, query, short);
    setAllMovies(moviesCardList);
    setFilteredMovies(
      short ? filterShortMovies(moviesCardList) : moviesCardList
    );
    localStorage.setItem("allMovies", JSON.stringify(movies));
    localStorage.setItem("movies", JSON.stringify(moviesCardList));
  }

  // Функция обработки отправки формы

  function handleSearchSubmit(query) {
    localStorage.setItem("shortMovies", shortFilms);
    localStorage.setItem("movieSearch", query);
    if (localStorage.getItem("allMovies")) {
      const movies = JSON.parse(localStorage.getItem("allMovies"));
      handleSetFilteredMovies(movies, query, shortFilms);
    } else {
      setIsMoviesLoading(true);
      getMovies()
        .then((cardsData) => {
          handleSetFilteredMovies(cardsData, query, shortFilms);
          setIsError(false);
        })
        .catch((err) => {
          setIsError(true);
          console.log(err);
        })
        .finally(() => {
          setIsMoviesLoading(false);
        });
    }
  }

  // Эффекты 

  React.useEffect(() => {
    if (localStorage.getItem("movieSearch")) {
      if (filteredMovies.length === 0) {
        setIsNothingFound(true);
      } else {
        setIsNothingFound(false);
      }
    } else {
      setIsNothingFound(false);
    }
  }, [filteredMovies]);

  React.useEffect(() => {
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      setAllMovies(movies);
      if (localStorage.getItem("shortMovies") === "true") {
        setFilteredMovies(filterShortMovies(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

  React.useEffect(() => {
    if (localStorage.getItem("shortMovies") === "true") {
      setShortFilms(true);
    } else {
      setShortFilms(false);
    }
  }, []);

  return (
    <section className="movies">
      <SearchForm
        onSearchMovies={handleSearchSubmit}
        shortFilms={shortFilms}
        onFilterShortMovies={handleShortFilms}
      />
      <MoviesCardList
        isError={isError}
        cards={filteredMovies}
        isLoading={isMoviesLoading}
        isEmptyList={isNothingFound}
        onDeleteMovie={onDeleteMovie}
        onLikeMovie={onLikeMovie}
        savedMovies={savedMovies}
        isSavedFilms={false}
      />
    </section>
  );
}

export default Movies;
