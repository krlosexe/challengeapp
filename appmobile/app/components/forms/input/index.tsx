import React from 'react';
import {TextInput, View, Text} from 'react-native';
import {commonStyles as stylesCommon} from '@app/styles/common';
import Margin from '@app/components/shared/margin';
import {PropsIputType} from '@app/types/components/forms/input';
import {styles} from './styles';
import themes from '@app/themes';
const CustomTextInput = ({ 
    placeholder, 
    value, 
    label, 
    onChangeText, 
    inputType = 'default',
    secureTextEntry = false,
    Icon
  }: PropsIputType) => {

  const commonStyles = stylesCommon(); 

  return (
    <View style={styles.container}>
      {label && 
        <>
          <Text style={commonStyles.txt_h2}>{label}</Text>
          <Margin bottom={10} />
        </>
      }
      <View>
        <TextInput
          style={[
            commonStyles.txt_neutral_light,
            styles.input,
            [
              Icon ? (
                  {
                      paddingLeft: 45,
                  }
              ): (
                  {
                      
                  }
              )
          ]
          ]}
          placeholder={placeholder}
          placeholderTextColor={themes.colors.inputPlaceholderColor}
          value={value}
          secureTextEntry={secureTextEntry}
          keyboardType={inputType === 'email' ? 
                        'email-address' 
                        : 
                        'default'}

          onChangeText={onChangeText}
        />

        {Icon && 
          <View style={styles.contentIcon}>
            <Icon />
          </View>
        }
      </View>
    </View>
  );
};


export default CustomTextInput;
