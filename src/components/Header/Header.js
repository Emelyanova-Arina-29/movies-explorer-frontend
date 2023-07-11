import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

import logo from "../../images/logo.svg";
import menu from "../../images/menu.svg";

import "./Header.css";

function Header() {
  const location = useLocation();
  const [isClicked, setIsClicked] = React.useState(false);
  
  function handleOpenMenu() {
    setIsClicked(true);
  }

  function handleCloseMenu() {
    setIsClicked(false);
  }

  const showMainHeader = () => {
    const { pathname } = location;
    return pathname === "/";
  };

  const showMovieHeader = () => {
    const { pathname } = location;
    return (
      pathname === "/movies" ||
      pathname === "/saved-movies" ||
      pathname === "/profile"
    );
  };

  return (
    <>
      {showMainHeader() && (
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
      {showMovieHeader() && (
        <header className="header header_white">
          <Link to="/">
            <img className="header__logo" src={logo} alt="Логотип сайта" />
          </Link>
          <nav className="header__nav header__nav_margin">
            <Link to="/movies" className="header__movie header__movie_active">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="header__movie">
              Сохранённые фильмы
            </Link>
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
