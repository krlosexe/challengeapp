import React from 'react';
import {ActivityIndicator, ScrollView, Image, View, Text} from 'react-native'
import Layout from '@app/components/layouts/content';
import Head from '@app/components/shared/head';
import {
    RouteProp,
    useRoute,
} from '@react-navigation/native';
import {UserDetailScreen} from '@app/types/navigation';
import {useUserDetail} from '@app/hooks/useUserDetail';
import { styles } from './styles';
import UserIcon from '@app/assets/icons/user-plus.svg';
import GithubIcon from '@app/assets/icons/github.svg';
import HashIcon from '@app/assets/icons/hash.svg';
import {commonStyles as stylesCommon} from '@app/styles/common';
import Margin from '@app/components/shared/margin';
function Index() {
    const commonStyles   = stylesCommon(); 
    const route = useRoute<RouteProp<UserDetailScreen, 'UserDetail'>>();
    const {userLogin} = route.params;

    const {data, loading} = useUserDetail(userLogin);

    return  <Layout colorBar='white' barStyle='dark-content'>
                <Head title={userLogin} backButton={true} />

                {loading ? (
                    <ActivityIndicator />
                ): (
                    <ScrollView style={styles.content}>
                        <Image style={styles.avatar} source={{uri: data?.avatar_url}} />
                        <View style={styles.contentMetadata}>
                            <View style={styles.contenItemMetadata}>
                                <UserIcon />
                                <Margin bottom={10}/>
                                <Text style={[commonStyles.txt_neutral_light]}>{data?.followers}</Text>
                            </View>

                            <View style={styles.contenItemMetadata}>
                                <GithubIcon stroke={'black'} />
                                <Margin bottom={10}/>
                                <Text style={[commonStyles.txt_neutral_light]}>{data?.public_repos}</Text>
                            </View>

                            <View style={styles.contenItemMetadata}>
                                <HashIcon stroke={'black'} />
                                <Margin bottom={10}/>
                                <Text style={[commonStyles.txt_neutral_light]}>{data?.id}</Text>
                            </View>
                        </View>
                    </ScrollView>
                )}
            </Layout>   
}

export default Index;