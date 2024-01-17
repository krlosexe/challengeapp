
import {StyleSheet, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import {AppStateType} from '@app/redux/store';
import themes from '@app/themes';

const width = Dimensions.get('window').width;

export const useModeDark = () => {
  return useSelector((state: AppStateType) => state.modeDark).modeDark;
};

export const stylesLayout = () => {
    const modeDark = useModeDark();
    
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: modeDark === 'dark' ? themes.colors.black : themes.colors.white,
        },
        content: {
            paddingHorizontal: width <= 834 ? 10: 30,
            marginTop: 30,
        },
        icons: {
            width: 30,
            height: 30,
            marginHorizontal: 5,
        },
        contentIcons: {
            backgroundColor: modeDark === 'dark' ? themes.colors.black : themes.colors.white,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            position: 'absolute',
            width: '102%',
            paddingBottom: 10,
        },
        backButtonContent: {
            position: 'absolute',
            bottom: 20,
            width: '90%',
            alignSelf: 'center',
            textAlign: 'center',
            
        },
        backButton: {
            backgroundColor: modeDark === 'dark' ? themes.colors.white : themes.colors.black,
            borderRadius: 5,
            textAlign: 'center',
            padding: 10,
        },
        textBack: {
            color: modeDark === 'dark' ? themes.colors.black : themes.colors.white,
            alignSelf: 'center',
        },

        contentIconsSocials: {
            flexDirection: 'row',
        },
        iconSocial: {
            width: 38,
            height: 38,
        },

        contentLang: {
            flexDirection: 'row',
        },
        contentChangeTheme: {
            backgroundColor: '#eee',
            borderRadius: 5,
            width: 600,
            height: 220,
            position: 'absolute',
            bottom: -230,
            left: -450,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingTop: 10,
            paddingBottom: 20,
        },
        imagetheme: {
            width: 150,
            height: 180,
            resizeMode: 'contain'
        },
        btnTheme: {
            //backgroundColor: 'blue'
        },
        textTheme: {
            marginTop: 5,
            color: 'black',
            textAlign: 'center'
        }
    });
};

