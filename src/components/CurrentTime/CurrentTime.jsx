import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BASE_URL } from '../../utils/constants';
import { actions } from '../../redux/store/reducers/currentTime.slice';

export const CurrentTime = () => {
  const currentTime = useSelector((state) => state.currentTime);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCurrentTime = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        const rawTime = new Date(data.datetime).getTime();
        dispatch(actions.setCurrentTime(rawTime));
      } catch (error) {
        console.error('Error fetching current time:', error);
      }
    };

    fetchCurrentTime();

    const interval = setInterval(() => {
      fetchCurrentTime();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

 const getFormattedTime = (timestamp) => {
   const options = { timeStyle: 'short' };
   return new Date(timestamp).toLocaleString('uk-UA', options);
 };

  return <h2>{getFormattedTime(currentTime)}</h2>;
};
