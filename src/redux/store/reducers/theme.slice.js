import { createSlice } from '@reduxjs/toolkit';
import { THEME_DARK, THEME_LIGHT } from '../../../utils/constants';

export const theme = createSlice({
  name: 'theme',
  initialState: {
    value: THEME_LIGHT,
  },
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === 'light'
        ? THEME_DARK
        : THEME_LIGHT;
    },
  },
});

export const { actions, reducer } = theme;
