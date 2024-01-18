
import {StyleSheet} from 'react-native';
import themes from '@app/themes';
export const styles = StyleSheet.create({
    button: {
        backgroundColor: themes.colors.seconday,
        borderRadius: 12,
        padding: 10,
        width: '100%'
    },
    text: {
        textAlign: "center",
        color: themes.colors.seconday
    },
    contentIcon: {
        alignSelf: 'center'
    }
});
