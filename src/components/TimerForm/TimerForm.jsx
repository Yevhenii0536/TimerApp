import React, { useState } from 'react';
import './TimerForm.scss';

export const TimerForm = ({ createTimer }) => {
  const [seconds, setSeconds] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (seconds && message) {
      createTimer(parseInt(seconds), message);
      setSeconds('');
      setMessage('');
    }
  };

  return (
    <form className="timer-form" onSubmit={handleSubmit}>
      <h2>Створити таймер</h2>
      <div className="form-group">
        <label htmlFor="seconds">Кількість секунд:</label>

        <input
          type="number"
          id="seconds"
          name="seconds"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">
          Повідомлення:
        </label>

        <input
          type="text"
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button type="submit">
        Створити
      </button>
    </form>
  );
};
