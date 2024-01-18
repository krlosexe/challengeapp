import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {commonStyles as stylesCommon} from '@app/styles/common';
import {PropsButtomType} from '@app/types/components/buttom';

const Index = ({
    label = 'Send',
    Icon,
    onSubmit
}: PropsButtomType) => {
    const commonStyles = stylesCommon();
    return  <TouchableOpacity style={styles.button} onPress={onSubmit}>
                {
                    Icon ? (
                        <View style={styles.contentIcon}>
                            <Icon />
                        </View>
                    ) : (
                    <Text style={[commonStyles.txt_neutral, styles.text]}>
                        {label}
                    </Text>
                    )
                }
            </TouchableOpacity>
};

export default React.memo(Index);
