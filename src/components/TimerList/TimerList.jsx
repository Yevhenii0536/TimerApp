import React from 'react';
import './TimerList.scss';

export const TimerList = ({ timers, deleteTimer }) => {
  return (
    <div className="timer-list">
      <h2>Список таймерів</h2>
      {timers.length > 0 ? (
        <ul>
          {timers.map((timer) => (
            <li key={timer.id}>
              <span className="timer-message">{timer.message}</span>
              <span className="timer-time">{timer.time}</span>
              <button onClick={() => deleteTimer(timer.id)}>Видалити</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Немає створених таймерів</p>
      )}
    </div>
  );
};

export default TimerList;
