import React from 'react';
import {Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import {styles} from './styles';
import {commonStyles as stylesCommon} from '@app/styles/common';
import {PropsButtomType} from '@app/types/components/buttom';

const Index = ({
    label = 'Send',
    Icon,
    onSubmit,
    loading
}: PropsButtomType) => {
    const commonStyles = stylesCommon();
    return  <TouchableOpacity style={styles.button} onPress={onSubmit}>

                {loading ? (
                    <ActivityIndicator color={'white'} />
                ): (
                    Icon ? (
                        <View style={styles.contentIcon}>
                            <Icon />
                        </View>
                    ) : (
                        <Text style={[commonStyles.txt_neutral, styles.text]}>
                            {label}
                        </Text>
                    )
                )}
                
            </TouchableOpacity>
};

export default React.memo(Index);
