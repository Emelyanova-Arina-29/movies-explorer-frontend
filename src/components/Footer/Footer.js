import React from "react";
import { useLocation } from "react-router-dom";

import "./Footer.css";

function Footer() {
  const location = useLocation();

  const showFooter = () => {
    const { pathname } = location;
    return (
      pathname === "/" || pathname === "/movies" || pathname === "/saved-movies"
    );
  };

  return (
    <>
      {showFooter() && (
        <footer className="footer">
          <div className="footer__line">
            <h2 className="footer__title">
              Учебный проект Яндекс.Практикум х BeatFilm.
            </h2>
          </div>
          <div className="footer__flex">
            <p className="footer__year">© 2023</p>
            <div className="footer__links">
              <a
                className="footer__link"
                href="https://practicum.yandex.ru"
                rel="noopener noreferrer"
                target="_blank"
              >
                Яндекс.Практикум
              </a>
              <a
                className="footer__link"
                href="https://github.com/Emelyanova-Arina-29"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
