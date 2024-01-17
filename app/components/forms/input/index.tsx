import React from 'react';
import { TextInput, View, Text } from 'react-native';
import {commonStyles as stylesCommon} from '@app/styles/common';
import Margin from '@app/components/shared/margin';
import {PropsIputType} from '@app/types/components/forms/input';
import {stylesInput} from './styles';

const CustomTextInput = ({ 
    placeholder, 
    value, 
    label, 
    onChangeText, 
    inputType = 'default',
    secureTextEntry = false,
  }: PropsIputType) => {

  const commonStyles   = stylesCommon(); 
  const styles   = stylesInput(); 

  return (
    <View style={styles.container}>
      {label && <Text style={commonStyles.txt_h2}>{label}</Text>}
      <Margin bottom={10} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={inputType === 'email' ? 
                      'email-address' 
                      : 
                      'default'}

        onChangeText={onChangeText}
      />
    </View>
  );
};


export default CustomTextInput;
