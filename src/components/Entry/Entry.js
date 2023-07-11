import React from "react";
import { Link } from "react-router-dom";

import "./Entry.css";

import logo from "../../images/logo.svg";

function MainForm({ title, children, textButton, question, link, textLink }) {
  return (
    <section className="entry">
      <Link to="/">
        <img className="entry__logo" src={logo} alt="Логотип" />
      </Link>
      <h1 className="entry__title">{title}</h1>
      <form className="form">
        {children}
        <label className="form__label">
          E-mail
          <input
            className="form__input"
            name="email"
            placeholder="Введите Ваш E-mail"
            id="input-email"
            type="email"
            required
          />
        </label>
        <label className="form__label">
          Пароль
          <input
            className="form__input"
            name="password"
            placeholder="Введите пароль"
            id="input-password"
            type="password"
            minLength="5"
            required
          />
        </label>
        <button className="form__button-submit" type="submit">
          {textButton}
        </button>
      </form>
      <p className="entry__question">
        {question}
        <Link to={link} className="entry__link">
          {textLink}
        </Link>
      </p>
    </section>
  );
}

export default MainForm;
