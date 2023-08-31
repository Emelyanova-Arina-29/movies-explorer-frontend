import React from "react";

import "./PopupInfoMessage.css";

function PopupInfoMessage(props) {
  return (
    <div className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть форму"
          onClick={props.onClose}
        />
        <div className="popup__content">
          <img
            className="popup__picture"
            src={props.popupStatus.image}
            alt={`Информационное сообщение: ${props.popupStatus.message}`}
          />
          <p className="popup__message">{props.popupStatus.message}</p>
        </div>
      </div>
    </div>
  );
}

export default PopupInfoMessage;
