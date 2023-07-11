import React from "react";
import card from "../../images/card.png";

import "./MoviesCard.css";

function MoviesCard() {
  const movies = [
    {
      title: "Аватар 2",
      duration: "3ч 2м",
      url: "https://sun9-27.userapi.com/impg/m33_YlcbxF5Gv-Tu9Db5tQLzEywPeY3qty_miA/Ah99FEW2_hI.jpg?size=1280x735&quality=95&sign=036889146c59fd957f3b0d6308808cf3&c_uniq_tag=RvUX8tSDhj9lTDhhTvL2IIQVmZqHlloXxKb0jAGwlHk&type=album",
    },
    {
      title: "Аватар 2",
      duration: "3ч 2м",
      url: "https://sun9-27.userapi.com/impg/m33_YlcbxF5Gv-Tu9Db5tQLzEywPeY3qty_miA/Ah99FEW2_hI.jpg?size=1280x735&quality=95&sign=036889146c59fd957f3b0d6308808cf3&c_uniq_tag=RvUX8tSDhj9lTDhhTvL2IIQVmZqHlloXxKb0jAGwlHk&type=album",
    },
    {
      title: "Аватар 2",
      duration: "3ч 2м",
      url: "https://sun9-27.userapi.com/impg/m33_YlcbxF5Gv-Tu9Db5tQLzEywPeY3qty_miA/Ah99FEW2_hI.jpg?size=1280x735&quality=95&sign=036889146c59fd957f3b0d6308808cf3&c_uniq_tag=RvUX8tSDhj9lTDhhTvL2IIQVmZqHlloXxKb0jAGwlHk&type=album",
    },
    {
      title: "Аватар 2",
      duration: "3ч 2м",
      url: "https://sun9-27.userapi.com/impg/m33_YlcbxF5Gv-Tu9Db5tQLzEywPeY3qty_miA/Ah99FEW2_hI.jpg?size=1280x735&quality=95&sign=036889146c59fd957f3b0d6308808cf3&c_uniq_tag=RvUX8tSDhj9lTDhhTvL2IIQVmZqHlloXxKb0jAGwlHk&type=album",
    },
  ];

  return (
    <ul className="cards__list">
      <li className="card">
        <img className="card__image" src={card} alt="Обложка фильма" />
        <div className="card__container">
          <h2 className="card__title">33 слова о дизайне</h2>
          <button className="card__like" type="button"></button>
          <button className="card__delete" type="button"></button>
        </div>
        <p className="card__duration">1ч42м</p>
      </li>
      {movies.map((movie, index) => (
        <li key={index} className="card">
          <img className="card__image" alt={`Обложка фильма`} src={movie.url} />
          <div className="card__container">
            <h2 className="card__title">{movie.title}</h2>
            <button className="card__like" type="button"></button>
            <button className="card__delete" type="button"></button>
          </div>
          <p className="card__duration">{movie.duration}</p>
        </li>
      ))}
    </ul>
  );
}

export default MoviesCard;
