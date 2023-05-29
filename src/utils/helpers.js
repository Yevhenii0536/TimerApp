export const getWillEndTime = (currentTime, seconds) => {
  const newTimeString = new Date(currentTime + seconds * 1000);

  return `${new Date(newTimeString)}`;
};

export const getSecondsLeft = (targetTime) => {
  const target = new Date(targetTime);
  const current = new Date();

  const diff = target.getTime() - current.getTime();
  const secondsLeft = Math.floor(diff / 1000);

  return secondsLeft;
}