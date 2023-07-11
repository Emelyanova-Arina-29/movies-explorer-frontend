import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <input
          className="search__input"
          name="query"
          type="text"
          placeholder="Фильм"
        ></input>
        <div className="search__container">
          <div className="search__line">
            <button className="search__button" type="submit"></button>
          </div>
          <FilterCheckbox />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
