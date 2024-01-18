import React, {ReactNode} from 'react';
import {View, SafeAreaView, TouchableOpacity, Text, StatusBar} from 'react-native';
import {stylesLayout} from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {commonStyles as stylesCommon} from '@app/styles/common';
import themes from '@app/themes';

interface LayoutProps {
    children: ReactNode;
    backButton?: boolean;
  }
  const Index: React.FC<LayoutProps> = ({ children, backButton = false }) => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const styles   = stylesLayout(); 
    const commonStyles   = stylesCommon(); 

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor={themes.colors.primary}
        />
        <View style={styles.content}>
          {children}
        </View>

        {backButton && 
          <View style={styles.backButtonContent}>
            <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
                <Text style={[commonStyles.txt_neutral, styles.textBack]}>
                  Back
                </Text>
            </TouchableOpacity>
          </View>
        }
      </SafeAreaView>
    );
  };

export default Index;