import React from "react";

import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="project">
      <div className="project__line">
        <h2 className="project__title">О проекте</h2>
      </div>
      <div className="project__columns">
        <div className="project__column">
          <p className="project__stage">Дипломный проект включал 5 этапов</p>
          <p className="project__description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="project__column">
          <p className="project__stage">На выполнение диплома ушло 5 недель</p>
          <p className="project__description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="project__grid">
        <p className="project__week-one">1 неделя</p>
        <p className="project__week-four">4 недели</p>
        <p className="project__part">Back-end</p>
        <p className="project__part">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
