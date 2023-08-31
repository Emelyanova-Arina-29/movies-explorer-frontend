import React from "react";
import Entry from "../Entry/Entry";
import useForm from "../../hooks/useForm";

import "../Entry/Entry.css";

function Register({ onRegister, isLoading }) {
  const { values, errors, handleChange, isValid } = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    onRegister(values.name, values.email, values.password);
  }

  return (
    <Entry
      title="Добро пожаловать!"
      textButton="Зарегистрироваться"
      question="Уже зарегистрированы?"
      link="/signin"
      textLink="Войти"
      onSubmit={handleSubmit}
      isDisabled={!isValid}
      isLoading={isLoading}
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
          value={values.name || ""}
          onChange={handleChange}
        />
        <span className="form__error">{errors.name}</span>
      </label>
      <label className="form__label">
        E-mail
        <input
          className="form__input"
          name="email"
          placeholder="Введите Ваш E-mail"
          id="input-email"
          type="email"
          required
          value={values.email || ""}
          onChange={handleChange}
        />
        <span className="form__error">{errors.email}</span>
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
          value={values.password || ""}
          onChange={handleChange}
        />
        <span className="form__error">{errors.password}</span>
      </label>
    </Entry>
  );
}

export default Register;
