import React from "react";

import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <div className="techs__line">
        <h2 className="techs__title">Технологии</h2>
      </div>
      <div className="techs__flex">
        <p className="techs__tech">7 технологий</p>
        <p className="techs__description">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <ul className="techs__list">
        <li className="techs__tool">HTML</li>
        <li className="techs__tool">CSS</li>
        <li className="techs__tool">JS</li>
        <li className="techs__tool">React</li>
        <li className="techs__tool">Git</li>
        <li className="techs__tool">Express.js</li>
        <li className="techs__tool">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
