import React, { useState, useEffect } from 'react';

export const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const fetchCurrentTime = async () => {
      try {
        const response = await fetch(
          'http://worldtimeapi.org/api/timezone/Europe/Kyiv',
        );
        const data = await response.json();
        const rawTime = data.datetime;
        const formattedTime = formatTime(rawTime);
        setCurrentTime(formattedTime);
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
  }, []);

  useEffect(() => {
    const secondInterval = setInterval(() => {
      const updatedTime = currentTime.split(':');
      const hours = updatedTime[0];
      const minutes = updatedTime[1];
      const newSeconds = (parseInt(updatedTime[2], 10) + 1)
        .toString()
        .padStart(2, '0');
      const updatedTimeString = `${hours}:${minutes}:${newSeconds}`;
      setCurrentTime(updatedTimeString);
    }, 1000);

    return () => {
      clearInterval(secondInterval);
    };
  }, [currentTime]);

  const formatTime = (rawTime) => {
    const date = new Date(rawTime);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return <div>{currentTime}</div>;
};
