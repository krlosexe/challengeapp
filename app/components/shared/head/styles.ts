import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {AppStateType} from '@app/redux/store';
import themes from '@app/themes';

export const useModeDark = () => {
  return useSelector((state: AppStateType) => state.modeDark).modeDark;
};

export const stylesLayout = () => {
    
    return StyleSheet.create({
        content: {
            zIndex: -1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        btn: {
            marginTop: 30,
            marginLeft: 30
        },
        backText: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 30,
        },
        backButtonContent: {
            width: 161,
            textAlign: 'center',
        },
        backButton: {
            borderRadius: 5,
            textAlign: 'center',
            padding: 10,
            paddingVertical: 15,
            backgroundColor: themes.colors.primary,
        },
        backButtonRed: {
            borderRadius: 5,
            textAlign: 'center',
            padding: 10,
            paddingVertical: 15,
            backgroundColor: themes.colors.primary,
        },
        textBack: {
            color:  themes.colors.white,
            alignSelf: 'center',
            fontSize: 22,
            textTransform: 'uppercase'
        },
        textBackRed: {
            color:  themes.colors.white,
            alignSelf: 'center',
            fontSize: 20
        },
        
    });
};




