
import {StyleSheet} from 'react-native';
import themes from '@app/themes';

export const stylesLayout = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: themes.colors.primary,
        },
        content: {
            paddingHorizontal: 0,
        },
        backButtonContent: {
            position: 'absolute',
            bottom: 20,
            width: '90%',
            alignSelf: 'center',
            textAlign: 'center',
        },
        backButton: {
            backgroundColor: themes.colors.white,
            borderRadius: 5,
            textAlign: 'center',
            padding: 10,
        },
        textBack: {
            color: themes.colors.black,
            alignSelf: 'center',
        },
        text: {
            color: "white"
        }
    });
};

