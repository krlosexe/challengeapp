import {DefaultTheme} from '@react-navigation/native';

const themes = {
  ...DefaultTheme,
  colors: {
    white: '#ffffff',
    black: '#000000',
    gray: '#eeeeee',
    primary: '#0a1646',
    seconday: '#13aa9c',
    grayDark: '#2C2C2C',
    inputPlaceholderColor: "#e1e1e1"
  },
  font: {
    londrina: {
      bold: 'LondrinaSolid-Black',
      light: 'LondrinaSolid-Light',
      regular: 'LondrinaSolid-Regular',
    },
    noto_sans: {
      bold: 'NotoSans-Black',
      light: 'NotoSans-Light',
      regular: 'NotoSans-Regular',
    },
    size: {
      xsmall: 9,
      msmall: 10,
      small: 12,
      normal: 14,
      neutral: 16,
      medium: 18,
      lmedium: 20,
      large: 24,
      mlarge: 28,
      nlarge: 30,
      hlarge: 48,
      xlarge: 64,
      xlargebig: 96,
    },
  },
  layoutPaddigHorizontal: {
    paddingHorizontal: 30
  }
};
export default themes;
