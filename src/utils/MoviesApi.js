import { MOVIES_URL } from './constants';

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Произошла ошибка: ${res.status}`);
  }
};

export function getMovies() {
  return fetch(MOVIES_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleResponse);
}