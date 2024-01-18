import React from 'react';
import { Modal, View, Pressable, Text, ActivityIndicator} from 'react-native';
import Chart from '../chart';
import {itemsType} from '@app/types/hooks/useSearch';
import {styles} from './styles';
import {useDataFollowers} from '@app/hooks/useDataFollowers';
import showToast from '@app/helpers/showToast';

type modalPropsType = {
    modalVisible: boolean,
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    dataUsers: itemsType[]
};
function Index({
    modalVisible,
    setModalVisible,
    dataUsers
}: modalPropsType) {
    const {data, loading, error} = useDataFollowers(dataUsers);

    if(error){
        showToast('error', 'Error', error.message || 'An error occurred during the search.');
    }

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                {loading ? (
                    <ActivityIndicator />
                ): (
                    <Chart labels={data.labels} data={data.values} />
                )}
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Close</Text>
                </Pressable>
            </View>
            </View>
        </Modal>
    );
}

export default Index;

