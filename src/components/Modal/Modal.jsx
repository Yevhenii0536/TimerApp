import React from "react";
import './Modal.scss';

export const Modal = ({ timer, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Таймер завершено</h2>
        <p>{timer.message}</p>
        <button onClick={closeModal}>Закрити</button>
      </div>
    </div>
  );
};