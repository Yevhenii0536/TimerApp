export const createTimer = (seconds, message) => {
  return {
    type: 'CREATE_TIMER',
    payload: {
      id: Date.now(),
      time: seconds,
      message: message,
      completed: false,
    },
  };
};

export const deleteTimer = (id) => {
  return {
    type: 'DELETE_TIMER',
    payload: {
      id: id,
    },
  };
};
