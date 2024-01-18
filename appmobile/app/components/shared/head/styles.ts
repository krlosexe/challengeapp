import {StyleSheet} from 'react-native';
import themes from '@app/themes';

export const styles = StyleSheet.create({
    content: {
        zIndex: -1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...themes.layoutPaddigHorizontal
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
   
    backButton: {
        borderRadius: 5,
        textAlign: 'center',
        padding: 10,
    },
    textBack: {
        color:  themes.colors.primary,
        alignSelf: 'center',
    },
    textBackRed: {
        color:  themes.colors.white,
        alignSelf: 'center',
        fontSize: 20
    },
    
});
