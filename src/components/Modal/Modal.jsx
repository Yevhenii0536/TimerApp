import React from "react";
import './Modal.scss';
import { Button } from "../Button/Button";
import { useSelector } from 'react-redux';

export const Modal = ({ timer, handleModalClose }) => {
  const { value } = useSelector((state) => state.theme);

  return (
    <div className={`modal ${value}`}>
      <div className="modal__content">
        <h2 className="modal__title">Таймер завершено</h2>

        <p className="modal__text">{timer.message}</p>

        <Button className="modal-button" onClick={handleModalClose}>
          Закрити
        </Button>
      </div>
    </div>
  );
};