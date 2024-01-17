
import {StyleSheet} from 'react-native';
import themes from '@app/themes';

export const styles = StyleSheet.create({
    content: {
        zIndex: 100,
        backgroundColor: themes.colors.black,
        flexDirection: "row",
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center'
    },

    contentIcons: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginHorizontal: 5
    },
    text: {
        color: 'white'
    },

    iconwhatsapp: {
        width: 28,
        height: 28
    },
    poweredby: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    isotipo: {
        width: 40,
        height: 40,
        marginRight: -5
    }
   
});
