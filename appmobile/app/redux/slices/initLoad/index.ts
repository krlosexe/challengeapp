import {createSlice} from '@reduxjs/toolkit';
import {
  IAuthState,
  isFirstLoad,
  isSingin,
  initialState,
  introImages,
  allmenu,
  loadMediaMenu
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

    builder.addCase(isSingin, (state, action) => {
      console.log('initLoad:isSingin');
      state.isSingin = action.payload;
    });

    builder.addCase(introImages, (state, action) => {
      console.log('initLoad:introImages');
      state.introImages = action.payload;
    });

    builder.addCase(allmenu, (state, action) => {
      console.log('initLoad:allmenu');
      state.allmenu = action.payload;
    });

    builder.addCase(loadMediaMenu, (state, action) => {
      console.log('initLoad:loadMediaMenu');
      state.loadMediaMenu = action.payload;
    });

  },
});
