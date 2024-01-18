import themes from '@app/themes';
import {StyleSheet} from 'react-native';

export const commonStyles = () => {
  
  return StyleSheet.create({


    txt_p_regular_light: {
      fontFamily: themes.font.londrina.light,
      fontSize: themes.font.size.neutral,
      color: themes.colors.black
    },

    txt_p_regular_light_small: {
      fontFamily: themes.font.londrina.light,
      fontSize: themes.font.size.msmall,
      color: themes.colors.black
    },

    txt_p_regular: {
      fontFamily: themes.font.londrina.regular,
      fontSize: themes.font.size.neutral,
      color: themes.colors.black
    },

    txt_p_medium: {
      fontFamily: themes.font.londrina.regular,
      fontSize: themes.font.size.lmedium,
      color: themes.colors.black
    },
    
    txt_p_regular_bold: {
      fontFamily: themes.font.londrina.bold,
      fontSize: themes.font.size.neutral,
      color: themes.colors.black
    },

    txt_p_small: {
      fontFamily: themes.font.londrina.regular,
      fontSize: themes.font.size.msmall,
      color: themes.colors.black
    },
    txt_h1: {
      fontFamily: themes.font.londrina.light,
      fontSize: themes.font.size.hlarge,
      color: themes.colors.black
    },
  
    txt_h1_bold: {
      fontFamily: themes.font.londrina.bold,
      fontSize: themes.font.size.xlarge,
      color: themes.colors.black
    },

    txt_h1_medium: {
      fontFamily: themes.font.londrina.light,
      fontSize: themes.font.size.hlarge,
      color: themes.colors.black
    },
  
    txt_h1_medium_bold: {
      fontFamily: themes.font.londrina.bold,
      fontSize: themes.font.size.hlarge,
      color: themes.colors.black
    },


    txt_h1_big: {
      fontFamily: themes.font.londrina.light,
      fontSize: themes.font.size.xlargebig,
      color: themes.colors.black
    },
  
    txt_h1_big_bold: {
      fontFamily: themes.font.londrina.bold,
      fontSize: themes.font.size.xlargebig,
      color: themes.colors.black
    },


    txt_h2: {
      fontFamily: themes.font.londrina.regular,
      fontSize: themes.font.size.large,
      color: themes.colors.primary
    },

    txt_h2_bold: {
      fontFamily: themes.font.londrina.regular,
      fontSize: themes.font.size.large,
      color: themes.colors.primary
    },

    txt_normal: {
      fontSize: themes.font.size.medium,
      color: themes.colors.black
    },

    txt_neutral: {
      fontFamily: themes.font.londrina.regular,
      fontSize: themes.font.size.neutral,
      color: themes.colors.primary
    },


    txt_neutral_light: {
      fontFamily: themes.font.londrina.light,
      fontSize: themes.font.size.neutral,
      color: themes.colors.primary
    },

    txt_neutral_bold: {
      fontFamily: themes.font.londrina.bold,
      fontSize: themes.font.size.neutral,
      color: themes.colors.black
    },


    txt_uppercase: {
      textTransform: 'uppercase'
    },
  
    no_margin: {
      margin: 0,
      padding: 0,
      marginHorizontal: 0,
      paddingHorizontal: 0,
    },
  
    txt_center: {
      textAlign: 'center',
    },
  
    txt_justify: {
      textAlign: 'justify',
    },
  
    flex_center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    debug: {
      borderWidth: 2,
      borderColor: 'red',
    },
  });
};
