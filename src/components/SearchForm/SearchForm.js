import React from "react";
import { useLocation } from "react-router-dom";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import "./SearchForm.css";

function SearchForm({ onSearchMovies, shortFilms, onFilterShortMovies }) {
  const location = useLocation();

  const [querySearch, setQuerySearch] = React.useState("");
  const [isQuerySearchError, setIsQuerySearchError] = React.useState(false);

  React.useEffect(() => {
    if (
      localStorage.getItem("movieSearch") &&
      location.pathname === "/movies"
    ) {
      const saveQuery = localStorage.getItem("movieSearch");
      setQuerySearch(saveQuery);
    }
  }, [location]);

  function handleSubmit(e) {
    e.preventDefault();
    if (querySearch.trim().length === 0) {
      setIsQuerySearchError(true);
    } else {
      setIsQuerySearchError(false);
      onSearchMovies(querySearch);
    }
  }

  function changeQueryInput(e) {
    setQuerySearch(e.target.value);
  }

  return (
    <section className="search">
      <form id="form" className="search__form" onSubmit={handleSubmit}>
        <label className="search__label">
          <input
            className="search__input"
            name="query"
            type="text"
            value={querySearch || ""}
            onChange={changeQueryInput}
            required
            placeholder="Фильм"
          ></input>
          {isQuerySearchError && (
            <span className="search__error">Нужно ввести ключевое слово</span>
          )}
        </label>
        <div className="search__container">
          <div className="search__line">
            <button className="search__button" type="submit"></button>
          </div>
          <FilterCheckbox
            shortFilms={shortFilms}
            onFilterShortMovies={onFilterShortMovies}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
