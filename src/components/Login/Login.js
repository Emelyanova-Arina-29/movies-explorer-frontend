import React from "react";
import Entry from "../Entry/Entry";

import "../Entry/Entry.css";

function Register() {
  return (
        <Entry
          title="Рады видеть!"
          textButton="Войти"
          question="Ещё не зарегистрированы?"
          link="/signup"
          textLink="Регистрация"
        >
        </Entry>
  );
}

export default Register;