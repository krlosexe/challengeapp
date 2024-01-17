
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    content: {
        zIndex: 100,
    },
    botton: {
        backgroundColor: 'white', 
        marginBottom: 10, 
        width: 190,
        height: 50,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 14
    },
    dropdown: {
        zIndex: 999,
        position: 'absolute',
        right: 30,
        width: 190,
        backgroundColor: 'white',
        padding: 2,
        marginBottom: 10,
        borderRadius: 4
    }, 
    dropdownItem: {
        padding: 10,
        borderColor: '#eee',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icons: {
        width: 38,
        height: 38,
        marginHorizontal: 10,
    },
    iconsSmall: {
        width: 18,
        height: 18,
        marginHorizontal: 10,
    },
});
