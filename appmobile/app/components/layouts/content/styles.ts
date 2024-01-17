
import {StyleSheet, Dimensions} from 'react-native';
import themes from '@app/themes';

const width = Dimensions.get('window').width;

export const stylesLayout = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: themes.colors.black,
        },
        content: {
            paddingHorizontal: width <= 834 ? 10: 30,
            marginTop: 30,
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
    });
};

