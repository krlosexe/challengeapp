
import {StyleSheet} from 'react-native';
import themes from '@app/themes';
export const styles = StyleSheet.create({
  container: {
    
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    color: themes.colors.grayDark,
    backgroundColor: themes.colors.white,
    borderRadius: 12,
    fontSize: 18
  },

  contentIcon: {
    position: 'absolute',
    top: 10,
    left: 10
  }
});



