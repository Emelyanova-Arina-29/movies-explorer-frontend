import React from "react";

import "./FilterCheckbox.css";

function FilterCheckbox({ shortFilms, onFilterShortMovies }) {
  return (
    <div className="filtercheckbox">
      <input
        className="filtercheckbox__input"
        type="checkbox"
        onChange={onFilterShortMovies}
        checked={shortFilms}
      ></input>
      <span className="filtercheckbox__title">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
