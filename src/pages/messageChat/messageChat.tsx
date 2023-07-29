import React from 'react';
import { ImageBackground, FlatList } from 'react-native';
import bg from '../../../assets/images/BG.png';
import styles from './messageChat.styles';
import messages from '../../../assets/data/messages.json';
import Message from '../../components/message/message.component';

const MessageChat = () => {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        style={styles.list}
        // inverted
      />
    </ImageBackground>
  );
};

export default MessageChat;
