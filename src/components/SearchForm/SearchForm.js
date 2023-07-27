import React from "react";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import useForm from "../../hooks/useForm";

import "./SearchForm.css";

function SearchForm({
  onSearchMovies,
  shortFilms,
  onFilterShortMovies
}) {
  const { values, errors, handleChange, isValid } = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    onSearchMovies(values.query);
  }

  return (
    <section className="search">
      <form id="form" className="search__form" onSubmit={handleSubmit}>
        <label className="search__label">
          <input
            className="search__input"
            name="query"
            type="text"
            value={values.query || ""}
            onChange={handleChange}
            required
            placeholder="Фильм"
          ></input>
          <span className="search__error">
            {errors.query ? "Нужно ввести ключевое слово" : ""}
          </span>
        </label>
        <div className="search__container">
          <div className="search__line">
            <button
              className="search__button"
              type="submit"
              disabled={!isValid}
            ></button>
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
