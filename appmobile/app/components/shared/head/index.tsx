import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {commonStyles as stylesCommon} from '@app/styles/common';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {AppStateType} from '@app/redux/store';
import {stylesLayout} from './styles';

type HeadPropsType = {
    title: string;
    backButton?: boolean;
}
const Head: React.FC<HeadPropsType> = ({title, backButton = false}: HeadPropsType) => {
    const {t} = useTranslation();
    const {theme} = useSelector((state: AppStateType) => state.theme);
    const navigation = useNavigation<StackNavigationProp<any>>();
    const styles   = stylesLayout(); 
    const commonStyles  = stylesCommon(); 
    return <View style={styles.content}>
                <Text style={[commonStyles.txt_h1_bold]}>{title}</Text>

                {backButton && 
                    <View style={styles.backButtonContent}>
                        <TouchableOpacity style={theme === 'theme3' ? styles.backButtonRed: styles.backButton} 
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={[commonStyles.txt_neutral, theme === 'theme3' ? styles.textBackRed: styles.textBack]}>
                            {t('back')}
                            </Text>
                        </TouchableOpacity>
                    </View>
                 }
            </View>
};

export default React.memo(Head);
