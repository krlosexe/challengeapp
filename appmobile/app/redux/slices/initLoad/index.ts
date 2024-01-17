import {createSlice} from '@reduxjs/toolkit';
import {
  IAuthState,
  isFirstLoad,
  initialState,
} from './types';

export const initLoadSlice = createSlice({
  name: 'initLoad',
  initialState: initialState as IAuthState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(isFirstLoad, (state, action) => {
      console.log('initLoad:isFirstLoad');
      state.isFirstLoad = action.payload;
    });
  },
});
