import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

import logo from "../../images/logo.svg";
import menu from "../../images/menu.svg";

import "./Header.css";

function Header({ isLoggedIn }) {
  const { pathname } = useLocation();
  const [isClicked, setIsClicked] = React.useState(false);

  function handleOpenMenu() {
    setIsClicked(true);
  }

  function handleCloseMenu() {
    setIsClicked(false);
  }

  const makeActive = ({ isActive }) =>
    isActive ? "header__movie header__movie_active" : "header__movie";

  return (
    <>
      {!isLoggedIn && (
        <header className="header">
          <Link to="/">
            <img className="header__logo" src={logo} alt="Логотип сайта" />
          </Link>
          <nav className="header__nav">
            <Link to="/signup" className="header__link">
              Регистрация
            </Link>
            <Link to="/signin" className="header__link header__link_button">
              Войти
            </Link>
          </nav>
        </header>
      )}
      {isLoggedIn && pathname === "/" && (
        <header className="header">
          <Link to="/">
            <img className="header__logo" src={logo} alt="Логотип сайта" />
          </Link>
          <nav className="header__nav header__nav_margin">
            <NavLink to="/movies" className={makeActive}>
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className={makeActive}>
              Сохранённые фильмы
            </NavLink>
          </nav>
          <Link to="/profile" className="header__account">
            Аккаунт
          </Link>
          <button
            className="header__menu"
            type="button"
            onClick={handleOpenMenu}
          >
            <img className="header__menu-img" src={menu} alt="меню" />
          </button>
          {isClicked ? <Navigation handleClose={handleCloseMenu} /> : ""}
        </header>
      )}
      {isLoggedIn && !(pathname === "/") && (
        <header className="header header_white">
          <Link to="/">
            <img className="header__logo" src={logo} alt="Логотип сайта" />
          </Link>
          <nav className="header__nav header__nav_margin">
            <NavLink to="/movies" className={makeActive}>
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className={makeActive}>
              Сохранённые фильмы
            </NavLink>
          </nav>
          <Link to="/profile" className="header__account">
            Аккаунт
          </Link>
          <button
            className="header__menu"
            type="button"
            onClick={handleOpenMenu}
          >
            <img className="header__menu-img" src={menu} alt="меню" />
          </button>
          {isClicked ? <Navigation handleClose={handleCloseMenu} /> : ""}
        </header>
      )}
    </>
  );
}

export default Header;
