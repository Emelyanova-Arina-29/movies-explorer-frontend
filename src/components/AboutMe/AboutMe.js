import React from "react";

import "./AboutMe.css";

import me from "../../images/me.jpg";

function AboutMe() {
  return (
    <section className="student">
      <div className="student__line">
        <h2 className="student__title">Студент</h2>
      </div>
      <div className="student__flex">
        <div className="student__text">
          <p className="student__name">Арина</p>
          <p className="student__old">Фронтенд-разработчик, 23 года</p>
          <p className="student__description">
            Я родилась и живу в Уфе, в прошлом году закончила факультет
            трубопроводного транспорта в УГНТУ. Я люблю слушать музыку, а ещё
            увлекаюсь бегом. Недавно начала кодить. С прошлого года работаю в
            ООО "РН-Бурение". Планирую найти работу, связанную с пройденным
            курсом, и уйти с нынешней.
          </p>
          <a
            className="student__link"
            href="https://github.com/Emelyanova-Arina-29"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </a>
        </div>
        <img className="student__photo" src={me} alt="Моя фотография" />
      </div>
    </section>
  );
}

export default AboutMe;
