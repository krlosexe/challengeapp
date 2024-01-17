import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {initLoadSlice} from '@app/redux/slices/initLoad';

const reducer = combineReducers({
  initLoad: initLoadSlice.reducer,
});

export type AppStateType = ReturnType<typeof reducer>;
export const store = configureStore({reducer: reducer});
