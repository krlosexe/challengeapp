
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {AppStateType} from '@app/redux/store';

export const useModeDark = () => {
  return useSelector((state: AppStateType) => state.modeDark).modeDark;
};

export const stylesInput = () => {
    
    return StyleSheet.create({
        container: {
            marginVertical: 10,
          },
          input: {
            width: 400,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 10,
            color: 'white'
          },
    });
};

