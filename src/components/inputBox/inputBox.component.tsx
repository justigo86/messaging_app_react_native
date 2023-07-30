import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import styles from './inputBox.styles';

const InputBox = () => {
  const [newMessage, setNewMessage] = useState('');
  const onMessageSend = () => {
    console.warn('Sending message.');
    setNewMessage('');
  };

  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={22} />
      <TextInput style={styles.input} value={newMessage} onChangeText={setNewMessage} multiline />
      <MaterialIcons
        name="send"
        size={20}
        color="white"
        style={styles.send}
        onPress={onMessageSend}
      />
    </View>
  );
};

export default InputBox;
