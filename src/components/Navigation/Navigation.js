import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";

function Navigation({ handleClose }) {
  return (
    <div className="navigation">
      <div className="navigation__overlay"></div>
      <div className="navigation__menu">
        <button
          className="navigation__button-close"
          onClick={handleClose}
          type="button"
        ></button>
        <nav className="navigation__nav">
          <Link to="/" className="navigation__link">
            Главная
          </Link>
          <Link
            to="/movies"
            className="navigation__link navigation__link_active"
          >
            Фильмы
          </Link>
          <Link to="/saved-movies" className="navigation__link">
            Сохранённые фильмы
          </Link>
        </nav>
        <Link to="/profile" className="navigation__account">
          Аккаунт
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
