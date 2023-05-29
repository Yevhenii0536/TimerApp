import React, { useEffect, useState } from 'react';
import './TimerList.scss';
import { Button } from '../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../redux/store/reducers/timers.slice';

export const TimerList = () => {
  const { activeTimers } = useSelector((state) => state.timers);
  const dispatch = useDispatch();
  const [timerInterval, setTimerInterval] = useState(null);

  useEffect(() => {
    if (!activeTimers.length) {
      console.log('cleared 0')
      clearInterval(timerInterval);
      setTimerInterval(null);

      return;
    }

    if (activeTimers.length && !timerInterval) {
      const interval = setInterval(() => {
        dispatch(actions.tickTimers());
        console.log('tick')
      }, 1000);

      console.log('created', dispatch)

      setTimerInterval(interval);

      return () => {
        console.log('clear')
        clearInterval(timerInterval);
      };
    }
  }, [timerInterval, activeTimers, dispatch])

  return (
    <div className="timer-list">
      <h2>Список таймерів</h2>
      {activeTimers.length > 0 ? (
        <ul>
          {activeTimers.map((timer) => (
            <li key={timer.id}>
              <span className="timer-message">{timer.message}</span>
              <span className="timer-time">{timer.seconds}</span>
              <Button
                className="timer-list__button"
                onClick={() => dispatch(actions.remove(timer))}>
                Видалити
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Немає створених таймерів</p>
      )}
    </div>
  );
};
