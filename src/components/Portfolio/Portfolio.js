import React from "react";

import pointer from "../../images/pointer.svg";

import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__line">
          <a
            className="portfolio__link"
            href="https://github.com/Emelyanova-Arina-29/how-to-learn"
            rel="noopener noreferrer"
            target="_blank"
          >
            Статичный сайт
            <img className="portfolio__image" src={pointer} alt="Курсор" />
          </a>
        </li>
        <li className="portfolio__line">
          <a
            className="portfolio__link"
            href="https://github.com/Emelyanova-Arina-29/russian-travel"
            rel="noopener noreferrer"
            target="_blank"
          >
            Адаптивный сайт
            <img className="portfolio__image" src={pointer} alt="Курсор" />
          </a>
        </li>
        <li className="portfolio__line">
          <a
            className="portfolio__link"
            href="https://github.com/Emelyanova-Arina-29/react-mesto-api-full-gha"
            rel="noopener noreferrer"
            target="_blank"
          >
            Одностраничное приложение
            <img className="portfolio__image" src={pointer} alt="Курсор" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
