import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./PageNotFound.css";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <section className="notfound">
      <h2 className="notfound__title">404</h2>
      <p className="notfound__text">Страница не найдена</p>
      <Link className="notfound__link" onClick={() => navigate(-1)}>
        Назад
      </Link>
    </section>
  );
}

export default PageNotFound;
