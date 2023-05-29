import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../../../utils/constants';

export const fetchCurrentTime = createAsyncThunk('currentTime',
  async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data.datetime;
  },
);

const currentTimeSlice = createSlice({
  name: 'currentTime',
  initialState: '',
  reducers: {
    setCurrentTime: (state, action) => {
      return action.payload;
    },
  },
});

export const { actions, reducer } = currentTimeSlice;
