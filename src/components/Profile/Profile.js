import React from "react";
import { Link } from "react-router-dom";

import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Арина!</h1>
      <form className="profile__form">
        <div className="profile__border">
          <label className="profile__label">
            Имя
            <input
              className="profile__input"
              name="name"
              placeholder="Арина"
              id="input-name"
              type="text"
              minLength="2"
              maxLength="30"
              required
            />
          </label>
        </div>
        <label className="profile__label">
          E-mail
          <input
            className="profile__input"
            name="email"
            placeholder="pochta@yandex.ru"
            id="input-email"
            type="email"
            required
          />
        </label>
        <button type="button" className="profile__edit">
          Редактировать
        </button>
        <Link to="/" className="profile__logout">
          Выйти из аккаунта
        </Link>
      </form>
    </section>
  );
}

export default Profile;
