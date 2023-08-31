import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navigation.css";

function Navigation({ handleClose }) {
  const isActiveLink = ({ isActive }) =>
    isActive ? "navigation__link navigation__link_active" : "navigation__link";

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
          <NavLink to="/" className={isActiveLink} onClick={handleClose}>
            Главная
          </NavLink>
          <NavLink to="/movies" className={isActiveLink} onClick={handleClose}>
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={isActiveLink}
            onClick={handleClose}
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link
          to="/profile"
          className="navigation__account"
          onClick={handleClose}
        >
          Аккаунт
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
