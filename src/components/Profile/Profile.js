import React from "react";
import { useForm } from "../../hooks/useForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./Profile.css";

function Profile({ onUpdateUser, onLogOut, isLoading }) {
  const currentUser = React.useContext(CurrentUserContext);

  const { values, setValues, errors, handleChange, isValid, setIsValid } =
    useForm();

  // устанавливем текущие значения
  React.useEffect(() => {
    if (currentUser) {
      setValues({
        name: currentUser.name,
        email: currentUser.email,
      });
    }
  }, [setValues, currentUser]);

  React.useEffect(() => {
    if (
      currentUser.name === values.name &&
      currentUser.email === values.email
    ) {
      setIsValid(false);
    }
  }, [setIsValid, values, currentUser]);

  // обработчик отправки формы
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: values.name,
      email: values.email,
    });
  }

  return (
    <section className="profile">
      <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
      <form
        id="form"
        className="profile__form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="profile__border">
          <label className="profile__label">
            Имя
            <input
              className="profile__input"
              name="name"
              value={values.name || ""}
              onChange={handleChange}
              id="input-name"
              type="text"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="profile__error">{errors.name}</span>
          </label>
        </div>
        <label className="profile__label">
          E-mail
          <input
            className="profile__input"
            name="email"
            value={values.email || ""}
            onChange={handleChange}
            id="input-email"
            type="email"
            required
          />
          <span className="profile__error">{errors.email}</span>
        </label>
        <button
          type="submit"
          disabled={!isValid ? true : false}
          className={
            !isValid || isLoading
              ? "profile__edit profile__edit_disabled"
              : "profile__edit"
          }
        >
          Редактировать
        </button>
        <button type="button" className="profile__logout" onClick={onLogOut}>
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
}

export default Profile;
