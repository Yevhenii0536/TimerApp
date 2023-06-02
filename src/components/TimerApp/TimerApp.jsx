import React, { useEffect, useState } from 'react';
import { TimerForm } from '../TimerForm/TimerForm';
import { TimerList } from '../TimerList/TimerList';
import { Modal } from '../Modal/Modal';
import { CurrentTime } from '../CurrentTime/CurrentTime';
import './TimerApp.scss';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../redux/store/reducers/timers.slice';
import { FooterAnim } from '../FooterAnim/FooterAnim';

export const TimerApp = () => {
  const { completedTimers } = useSelector((state) => state.timers);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTimer, setCurrentTimer] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (completedTimers.length > 0 && !modalVisible && currentTimer === null) {
      setCurrentTimer(completedTimers[0]);
      setModalVisible(true);
    }
  }, [completedTimers, modalVisible, currentTimer]);

  const handleModalClose = () => {
    dispatch(actions.removeCompleted(currentTimer));
    setCurrentTimer(null);
    setModalVisible(false);
  };
  
  return (
    <>
      <div className="timer-app">
        <TimerForm />

        <TimerList />
        <CurrentTime />
        {modalVisible && (
          <Modal timer={currentTimer} handleModalClose={handleModalClose} />
        )}
      </div>
      <FooterAnim />
    </>
  );
};
