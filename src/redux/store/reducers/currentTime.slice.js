import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TIME_API_URL } from '../../../utils/constants';

export const fetchCurrentTime = createAsyncThunk('currentTime',
  async () => {
    const response = await fetch(TIME_API_URL);
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

  extraReducers: (builder) => {
    builder.addCase(fetchCurrentTime.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { actions, reducer } = currentTimeSlice;
