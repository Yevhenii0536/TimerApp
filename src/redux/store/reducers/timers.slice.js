import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTimers: [],
  completedTimers: [],
  theme: 'light',
};

export const timers = createSlice({
  name: 'timers',
  initialState,
  reducers: {
    add: (state, { payload: timer }) => {
      state.activeTimers.push(timer);
    },

    remove: (state, { payload: timer }) => {
      state.activeTimers = state.activeTimers.filter((t) => t.id !== timer.id);
    },

    removeCompleted: (state, { payload: timer }) => {
      state.completedTimers = state.completedTimers.filter(
        (t) => t.id !== timer.id,
      );
    },

    tickTimers: (state) => {
      const updatedTimers = state.activeTimers.reduce(
        (correctTimers, timer) => {
          if (timer.seconds > 0) {
            correctTimers.activeTimers.push({
              ...timer,
              seconds: timer.seconds - 1,
            });
          } else {
            correctTimers.completedTimers.push({ ...timer });
            console.log(correctTimers.completedTimers, 'completed arr');
          }

          return correctTimers;
        },
        {
          activeTimers: [],
          completedTimers: [],
        },
      );

      state.activeTimers = updatedTimers.activeTimers;
      state.completedTimers = updatedTimers.completedTimers;
      console.log(state.completedTimers, 'completed');
    },

    setTheme: (state, { payload: theme }) => {
      state.theme = theme;
    },
  },
});

export const { actions, reducer } = timers;