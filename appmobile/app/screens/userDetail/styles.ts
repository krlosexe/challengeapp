
import {StyleSheet} from 'react-native';
import themes from '@app/themes';
export const styles = StyleSheet.create({

    content: {
        ...themes.layoutPaddigHorizontal
    },
    contentError: {
        ...themes.layoutPaddigHorizontal
    },
    avatar: {
        marginTop: 50,
        alignSelf: 'center',
        width: 300,
        height: 300,
        resizeMode: "cover",
        borderRadius: 900
    },

    contentMetadata: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    contenItemMetadata: {
        flexDirection: 'column',
        alignItems: 'center'
    }
});
