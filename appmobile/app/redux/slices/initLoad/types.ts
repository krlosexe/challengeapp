import {createAction} from '@reduxjs/toolkit';
import {introImagesType} from '@app/types/redux/intro';
import {CategorieAndMenuType} from '@app/types/redux/menu';
export interface IAuthState {
  isFirstLoad: boolean,
  isSingin: boolean,
  introImages: introImagesType[],
  allmenu: CategorieAndMenuType[],
  loadMediaMenu: string;
}

export const initialState: IAuthState = {
  isFirstLoad: false,
  isSingin: false,
  introImages: [],
  allmenu: [],
  loadMediaMenu: ''
};

export const isFirstLoad = createAction<boolean>('root/isFirstLoad');
export const isSingin = createAction<boolean>('root/isSingin');
export const introImages = createAction<introImagesType[]>('root/introImages');
export const allmenu = createAction<CategorieAndMenuType[]>('root/allmenu');
export const loadMediaMenu = createAction<string>('root/loadMediaMenu');