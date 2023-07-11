import React from "react";
import Entry from "../Entry/Entry";

import "../Entry/Entry.css";

function Register() {
  return (
        <Entry
          title="Добро пожаловать!"
          textButton="Зарегистрироваться"
          question="Уже зарегистрированы?"
          link="/signin"
          textLink="Войти"
        >
          <label className="form__label">
            Имя
            <input
              className="form__input"
              name="name"
              placeholder="Введите Ваше имя"
              id="input-name"
              type="text"
              minLength="2"
              maxLength="30"
              required
            />
          </label>
        </Entry>
  );
}

export default Register;