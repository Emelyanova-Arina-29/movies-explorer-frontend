import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { filterShortMovies, filterMovies } from "../../utils/filterMovies";

import "./SavedMovies.css";

function SavedMovies({ savedMovies, onDeleteMovie }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [shortFilms, setShortFilms] = React.useState(false);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [isNothingFound, setIsNothingFound] = React.useState(false);

  function handleShortFilms() {
    setShortFilms(!shortFilms);
  }

  function handleSearchSubmit(query) {
    setSearchQuery(query);
  }

  React.useEffect(() => {
    if (filteredMovies.length === 0) {
      setIsNothingFound(true);
    } else {
      setIsNothingFound(false);
    }
  }, [filteredMovies]);

  React.useEffect(() => {
    const moviesCardList = filterMovies(savedMovies, searchQuery);
    setFilteredMovies(
      shortFilms ? filterShortMovies(moviesCardList) : moviesCardList
    );
  }, [savedMovies, shortFilms, searchQuery]);

  return (
    <section className="saved-movies">
      <SearchForm
        onSearchMovies={handleSearchSubmit}
        onFilterShortMovies={handleShortFilms}
      />
      <MoviesCardList
        cards={filteredMovies}
        isEmptyList={isNothingFound}
        onDeleteMovie={onDeleteMovie}
        savedMovies={savedMovies}
        isSavedFilms={true}
      />
    </section>
  );
}

export default SavedMovies;
