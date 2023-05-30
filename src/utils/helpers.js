export const getWillEndTime = (currentTime, seconds) => {
  const newTimeString = new Date(currentTime + seconds * 1000);

  return `${new Date(newTimeString)}`;
};

export const getFormattedTime = (timestamp) => {
   const options = { timeStyle: 'short' };
   return new Date(timestamp).toLocaleString(undefined, options);
 };