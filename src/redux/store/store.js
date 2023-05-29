import { configureStore } from '@reduxjs/toolkit';
import { reducer as timersReducer } from './reducers/timers.slice';
import { reducer as currentTimeReducer } from './reducers/currentTime.slice';
import { reducer as themeReducer } from './reducers/theme.slice';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  timers: timersReducer,
  currentTime: currentTimeReducer,
  theme: themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
