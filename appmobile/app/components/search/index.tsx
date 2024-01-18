import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import Input from '@app/components/forms/input';
import Search from '@app/assets/icons/search.svg';
import {commonStyles as stylesCommon} from '@app/styles/common';
import {useSearch} from '@app/hooks/useSearch';
import Buttom from '@app/components/buttom';
const Index: React.FC = () => {
    const [search, setSearch] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const commonStyles = stylesCommon();
    
    const SubmitSearch = async () =>{
        setLoading(true);
        try{
            const data = await useSearch(search);
            console.log(data)
            setLoading(false);
        }catch{
            setLoading(false);
        }
        
    }

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
                            value={search}
                            onChangeText={setSearch}
                        />
                    </View>

                    <View style={styles.buttom}>
                        <Buttom 
                            Icon={Search}
                            onSubmit={SubmitSearch}
                            loading={loading}
                        />
                    </View>
                    
                </View>
            </View>
    
};

export default React.memo(Index);
