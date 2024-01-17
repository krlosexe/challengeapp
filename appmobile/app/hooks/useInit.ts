
import {useEffect} from 'react';
import {isFirstLoad} from '@app/redux/slices/initLoad/types';
import {store} from '@app/redux/store';
export const useInit = () => {
  useEffect(() => {
    setTimeout(()=>{
      store.dispatch(isFirstLoad(false));
    }, 3000);
  }, []);
};


