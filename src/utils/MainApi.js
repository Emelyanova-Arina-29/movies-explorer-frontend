import { BASE_URL } from "./constants";

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Произошла ошибка: ${res.status}`);
  }
};

const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  }).then(handleResponse);
};

const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
};

const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  }).then(handleResponse);
};

const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
    method: "GET",
  }).then(handleResponse);
};

const editUserInfo = (data) => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    }),
  }).then((res) => handleResponse(res));
};

const getUsersMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
    method: "GET",
  }).then(handleResponse);
};

const saveMovie = (movies) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      country: movies.country,
      director: movies.director,
      duration: movies.duration,
      year: movies.year,
      description: movies.description,
      image: "https://api.nomoreparties.co" + movies.image.url,
      trailerLink: movies.trailerLink,
      nameRU: movies.nameRU,
      nameEN: movies.nameEN,
      thumbnail:
        "https://api.nomoreparties.co" + movies.image.formats.thumbnail.url,
      movieId: movies.id,
    }),
  }).then((res) => handleResponse(res));
};

const deleteMovie = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
  }).then((res) => handleResponse(res));
};

export {
  register,
  login,
  checkToken,
  getUserInfo,
  editUserInfo,
  getUsersMovies,
  saveMovie,
  deleteMovie,
};
