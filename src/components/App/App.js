import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import "./App.css";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import Footer from "../Footer/Footer";
import PopupInfoMessage from "../PopupInfoMessage/PopupInfoMessage";

import * as mainApi from "../../utils/MainApi";

import imageCheckmark from "../../images/checkmark.svg";
import imageCross from "../../images/cross.svg";

function App() {
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const [savedMovies, setSavedMovies] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isPopupInfoMessageOpen, setIsPopupInfoMessageOpen] =
    React.useState(false);
  const [popupStatus, setPopupStatus] = React.useState({
    image: "",
    meassage: "",
  });

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      mainApi
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            navigate(path);
          }
        })
        .catch((err) => console.log(`Произошла ошибка: ${err}`));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handlePopupInfoMessage() {
    setIsPopupInfoMessageOpen(true);
  }

  function handleRegister(name, email, password) {
    mainApi
      .register(name, email, password)
      .then((res) => {
        if (res) {
          setPopupStatus({
            image: imageCheckmark,
            message: "Вы успешно зарегистрировались!",
          });
          handleLogin(res.email, password);
        }
      })
      .catch(() => {
        setPopupStatus({
          image: imageCross,
          message: "Что-то пошло не так! Попробуйте ещё раз.",
        });
      })
      .finally(handlePopupInfoMessage);
  }

  function handleLogin(email, password) {
    setIsLoading(true);
    mainApi
      .login(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        navigate("./movies");
      })
      .catch(() => {
        setPopupStatus({
          image: imageCross,
          message: "Что-то пошло не так! Попробуйте ещё раз.",
        });
        handlePopupInfoMessage();
      })
      .finally(() => setIsLoading(false));
  }

  function handleUpdateUser(data) {
    mainApi
      .editUserInfo(data)
      .then(({ user }) => {
        setPopupStatus({
          image: imageCheckmark,
          message: "Профиль успешно обновлен!",
        });
        setCurrentUser(user);
      })
      .catch(() => {
        setPopupStatus({
          image: imageCross,
          message: "Что-то пошло не так! Попробуйте ещё раз.",
        });
      })
      .finally(handlePopupInfoMessage);
  }

  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getUserInfo()
        .then(({ user }) => {
          setCurrentUser(user);
        })
        .catch((err) => console.log(`Произошла ошибка: ${err}`));
      mainApi
        .getUsersMovies()
        .then((data) => {
          setSavedMovies(data.movies);
        })
        .catch((err) => console.log(`Произошла ошибка: ${err}`));
    }
  }, [isLoggedIn]);

  function handleSaveMovie(card) {
    mainApi
      .saveMovie(card)
      .then((newMovie) => {
        setSavedMovies([newMovie.movie, ...savedMovies]);
      })
      .catch((err) => console.log(`Произошла ошибка: ${err}`));
  }

  function handleDeleteMovie(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((item) => item._id !== movie._id)
        );
      })
      .catch((err) => console.log(`Произошла ошибка: ${err}`));
  }

  function closePopup() {
    setIsPopupInfoMessageOpen(false);
  }

  function handleLogOut() {
    localStorage.removeItem("jwt");
    setCurrentUser("");
    localStorage.clear();
    setIsLoggedIn(false);
    localStorage.removeItem("movieSearch");
    localStorage.removeItem("shortMovies");
    localStorage.removeItem("allMovies");
    localStorage.removeItem("movies");
    navigate("/");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header isLoggedIn={isLoggedIn} />
                  <Main />
                </>
              }
            />
            <Route
              path="/signup"
              element={
                <Register onRegister={handleRegister} isLoading={isLoading} />
              }
            />
            <Route
              path="/signin"
              element={<Login onLogin={handleLogin} isLoading={isLoading} />}
            />
            <Route
              path="/movies"
              element={
                <>
                  <Header isLoggedIn={isLoggedIn} />
                  <ProtectedRoute
                    path="/movies"
                    component={Movies}
                    isLoggedIn={isLoggedIn}
                    savedMovies={savedMovies}
                    onDeleteMovie={handleDeleteMovie}
                    onLikeMovie={handleSaveMovie}
                  />
                </>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <>
                  <Header isLoggedIn={isLoggedIn} />
                  <ProtectedRoute
                    path="/saved-movies"
                    component={SavedMovies}
                    isLoggedIn={isLoggedIn}
                    savedMovies={savedMovies}
                    onDeleteMovie={handleDeleteMovie}
                  />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <Header isLoggedIn={isLoggedIn} />
                  <ProtectedRoute
                    path="/profile"
                    component={Profile}
                    onLogOut={handleLogOut}
                    isLoggedIn={isLoggedIn}
                    isLoading={isLoading}
                    onUpdateUser={handleUpdateUser}
                  />
                </>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
          <PopupInfoMessage
            isOpen={isPopupInfoMessageOpen}
            onClose={closePopup}
            popupStatus={popupStatus}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
