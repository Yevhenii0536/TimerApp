import { createSlice } from '@reduxjs/toolkit';

export const theme = createSlice({
  name: 'theme',
  initialState: {
    value: 'light',
  },
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light';
    },
  },
});

export const { actions, reducer } = theme;
