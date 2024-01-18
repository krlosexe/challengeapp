import React from 'react';
import {Text, View, FlatList, Keyboard} from 'react-native';
import {styles} from './styles';
import {commonStyles as stylesCommon} from '@app/styles/common';
import {AppStateType} from '@app/redux/store';
import {useSelector} from 'react-redux';
import ItemsUsers from './itemsUsers';
import Margin from '../shared/margin';

const Index = () => {
    const {users} = useSelector((state: AppStateType) => state.usersSlice);
    const commonStyles = stylesCommon();

    const handleScroll = () => {
        Keyboard.dismiss();
    };

    return  <View style={styles.content}>
                {users.length > 0 ? (
                    <>
                        <Text style={commonStyles.txt_h2}>Search Result</Text>
                        <Margin bottom={20} />
                        <FlatList
                            onScroll={handleScroll}
                            data={users}
                            renderItem={({item}) => {
                                return <ItemsUsers dataUser={item} />
                            }}
                            keyExtractor={item => item.id.toString()}
                            ListFooterComponent={() => <Margin bottom={400} />}
                        />
                    </>
                ): (
                    <View style={styles.contentNoResults}>
                        <Text style={[
                            commonStyles.txt_neutral_light,
                            styles.textNoResults
                        ]}>No results found</Text>
                    </View>
                )}
            </View>
    
};

export default React.memo(Index);
