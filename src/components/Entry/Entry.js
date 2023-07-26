import React from "react";
import { Link } from "react-router-dom";

import "./Entry.css";

import logo from "../../images/logo.svg";

function Entry({
  title,
  children,
  textButton,
  question,
  link,
  isLoading,
  textLink,
  onSubmit,
  isDisabled,
}) {

  return (
    <section className="entry">
      <Link to="/">
        <img className="entry__logo" src={logo} alt="Логотип" />
      </Link>
      <h1 className="entry__title">{title}</h1>
      <form id="form" className="form" noValidate onSubmit={onSubmit}>
        {children}
        <button
          className={
            isDisabled || isLoading
              ? "form__button-submit form__button-submit_disabled"
              : "form__button-submit"
          }
          type="submit"
          disabled={isDisabled ? true : false}
        >
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

export default Entry;
