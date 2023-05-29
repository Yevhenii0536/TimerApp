import React, { useState } from 'react';
import './TimerForm.scss';
import { Button } from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/store/reducers/timers.slice';
import * as helpers from '../../utils/helpers';

export const TimerForm = () => {
  const [seconds, setSeconds] = useState('');
  const [message, setMessage] = useState('');
  const { getWillEndTime } = helpers;
  const { currentTime } = useSelector((state) => state);

  const dispatch = useDispatch();

  const createTimer = (seconds, message) => {
    const newTimer = {
      id: Date.now(),
      seconds,
      message,
      willEndTime: getWillEndTime(currentTime, seconds),
      modalShown: false,
    };

    return newTimer;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (seconds && message) {
      dispatch(actions.add(createTimer(parseInt(seconds), message)));
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
          onChange={(event) => setSeconds(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Повідомлення:</label>

        <input
          type="text"
          id="message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>

      <Button
        type="submit"
        className="button-form"
      >
        Створити
      </Button>
    </form>
  );
};
