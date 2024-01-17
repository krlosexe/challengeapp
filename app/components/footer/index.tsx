import React from 'react';
import { Text, View } from 'react-native';
import {commonStyles as stylesCommon} from '@app/styles/common';
import {styles} from './styles';
function Index() {
    const commonStyles = stylesCommon(); 

    return (
       <View style={styles.content}>
            <View style={styles.poweredby}>
                <Text style={[commonStyles.txt_p_regular_bold, styles.text]}>
                    Powered by Carlos Cardenas
                </Text>
                
            </View>
       </View>
    );
}

export default Index;

