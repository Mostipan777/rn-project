import React, {useState} from 'react';
import {SafeAreaView, Button, Text, Modal} from 'react-native';
import PlayerScreen from './PlayerScreen';

const Main = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <Button title="Player" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="slide"
        presentationStyle="fullScreen"
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <PlayerScreen setModalVisible={setModalVisible}/>
      </Modal>
    </SafeAreaView>
  );
};

export default Main;
