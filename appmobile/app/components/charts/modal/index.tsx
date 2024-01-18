import React from 'react';
import { Modal, View, Pressable, Text} from 'react-native';
import Chart from '../chart';
import {itemsType} from '@app/types/hooks/useSearch';
import {styles} from './styles';

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

    console.log({dataUsers})
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
                <Chart labels={["krlos", "luis"]} data={[20, 19]} />
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

