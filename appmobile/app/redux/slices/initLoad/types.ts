import {createAction} from '@reduxjs/toolkit';
export interface IAuthState {
  isFirstLoad: boolean,
}

export const initialState: IAuthState = {
  isFirstLoad: true,
};

export const isFirstLoad = createAction<boolean>('root/isFirstLoad');