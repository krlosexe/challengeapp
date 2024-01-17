
import {useEffect} from 'react';
import request from '@app/helpers/requests';
import {isFirstLoad} from '@app/redux/slices/initLoad/types';
import {store} from '@app/redux/store';

export const useInit = () => {
  const getInitData = async () => {
    store.dispatch(isFirstLoad(true));
      try {
          const resMenu = await request.get(`/all/menu/`);
          store.dispatch(isFirstLoad(false));
        
      }
      catch (error) {
        console.error('Error al obtener o almacenar datos en caché:', error);
        store.dispatch(isFirstLoad(false));
      }
  };

  useEffect(() => {
    getInitData();
  }, []);
};


