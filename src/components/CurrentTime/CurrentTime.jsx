import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrentTime } from '../../redux/store/reducers/currentTime.slice';
import { getFormattedTime } from '../../utils/helpers';

export const CurrentTime = () => {
  const currentTime = useSelector((state) => state.currentTime);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentTime());

    const interval = setInterval(() => {
      dispatch(fetchCurrentTime());
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);



  return (
    <h2>
      {getFormattedTime(currentTime)}
    </h2>
  );
};
