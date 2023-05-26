import React, { useState, useEffect } from 'react';
import { TimerForm } from '../TimerForm/TimerForm';
import TimerList from '../TimerList/TimerList';
import { Modal } from '../Modal/Modal';
import './TimerApp.scss';
import { CurrentTime } from '../CurrentTime/CurrentTime';

export const TimerApp = () => {
  const [timers, setTimers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [completedTimer, setCompletedTimer] = useState(null);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimers((prevTimers) =>
        prevTimers.map((timer) => {
          if (timer.time > 0) {
            return { ...timer, time: timer.time - 1 };
          } else if (timer.time === 0 && !timer.completed) {
            setCompletedTimer(timer);
            setModalVisible(true);
            return { ...timer, completed: true };
          }
          return timer;
        }),
      );
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  const createTimer = (seconds, message) => {
    const newTimer = {
      id: Date.now(),
      time: seconds,
      message: message,
      completed: false,
    };

    setTimers((prevTimers) => [...prevTimers, newTimer]);
  };

  const deleteTimer = (id) => {
    setTimers((prevTimers) => prevTimers.filter((timer) => timer.id !== id));
  };

  const closeModal = () => {
    setTimers((prevTimers) =>
      prevTimers.filter((timer) => timer.id !== completedTimer.id),
    );
    setModalVisible(false);
    setCompletedTimer(null);
  };

  return (
    <div className="timer-app">
      <TimerForm createTimer={createTimer} />
      <TimerList timers={timers} deleteTimer={deleteTimer} />
      <CurrentTime />
      {modalVisible && <Modal timer={completedTimer} closeModal={closeModal} />}
    </div>
  );
};
