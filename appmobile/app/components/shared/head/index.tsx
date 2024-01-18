import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {commonStyles as stylesCommon} from '@app/styles/common';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {styles} from './styles';

type HeadPropsType = {
    title: string;
    backButton?: boolean;
}
const Head: React.FC<HeadPropsType> = ({title, backButton = false}: HeadPropsType) => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const commonStyles  = stylesCommon(); 
    return <View style={styles.content}>
                <Text style={[commonStyles.txt_h2]}>@{title}</Text>

                {backButton && 
                    <View>
                        <TouchableOpacity style={styles.backButton} 
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={[commonStyles.txt_neutral_light, styles.textBack]}>
                              Back
                            </Text>
                        </TouchableOpacity>
                    </View>
                 }
            </View>
};

export default React.memo(Head);
