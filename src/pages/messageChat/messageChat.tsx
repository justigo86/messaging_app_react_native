import React from 'react';
import { ImageBackground, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import bg from '../../../assets/images/BG.png';
import styles from './messageChat.styles';
import messages from '../../../assets/data/messages.json';
import Message from '../../components/message/message.component';
import InputBox from '../../components/inputBox/inputBox.component';

const MessageChat = () => {
  const route = useRoute();
  const navigation = useNavigation();

  console.log(route);

  // navigation.setOptions({ title: route.params.name });

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.bg}>
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          style={styles.list}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default MessageChat;
