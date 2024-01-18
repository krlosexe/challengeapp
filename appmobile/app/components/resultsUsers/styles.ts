
import themes from '@app/themes';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    content: {
        paddingTop: 20,
        ...themes.layoutPaddigHorizontal
    },

    contentNoResults: {
        borderColor: '#eee',
        borderWidth: 1,
        borderStyle: 'dashed'
    },
    textNoResults: {
        padding: 50,
        textAlign: "center",
        color: '#999'
    }
    
});
