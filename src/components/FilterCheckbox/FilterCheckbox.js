import React from "react";

import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filtercheckbox">
      <input className="filtercheckbox__input" type="checkbox"></input>
      <span className="filtercheckbox__title">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
