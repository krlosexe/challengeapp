import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import Input from '@app/components/forms/input';
import Search from '@app/assets/icons/search.svg';
import Send from '@app/assets/icons/send.svg';
import {commonStyles as stylesCommon} from '@app/styles/common';
import Buttom from '@app/components/buttom';
const Index: React.FC = () => {

    const commonStyles = stylesCommon();

    return  <View 
                style={styles.content}
            >
                <Text style={[commonStyles.txt_neutral, styles.text]}>Search</Text>
                <Text style={[commonStyles.txt_neutral_light, styles.text]}>
                    <Text style={[commonStyles.txt_neutral_light, styles.text]}>
                        for users <></>
                    </Text>
                    <Text style={
                        [
                            commonStyles.txt_neutral_light, 
                            styles.text,
                            styles.secondText
                        ]
                    }>
                        from Github
                    </Text>
                </Text>

                <View style={styles.contentInput}>
                    <View style={styles.input}>
                        <Input 
                            placeholder='Search' 
                            value='' 
                            onChangeText={()=>{}}
                            Icon={Search}    
                        />
                    </View>

                    <View style={styles.buttom}>
                        <Buttom 
                            Icon={Send}
                            onSubmit={()=>{}}
                        />
                    </View>
                    
                </View>
            </View>
    
};

export default React.memo(Index);
