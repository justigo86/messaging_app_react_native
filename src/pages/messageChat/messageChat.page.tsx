import React, { useEffect, useState } from 'react';
import {
  ImageBackground,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import bg from '../../../assets/images/BG.png';
import styles from './messageChat.styles';
import messages from '../../../assets/data/messages.json';
import Message from '../../components/message/message.component';
import InputBox from '../../components/inputBox/inputBox.component';
import { API, graphqlOperation } from 'aws-amplify';
import { messageChatUsersByUserId } from '../../graphql/queries';

type MessageChatByUserID = {
  messageChatUsersByUserId: {
    items: {
      id: string;
      userId: string;
      messageChatId: string;
      user: {
        id: string;
        name: string;
        image: string;
        status: string;
        createdAt: string;
        updatedAt: string;
      };
      messageChat: {
        id: string;
        createdAt: string;
        updatedAt: string;
        messageChatMostRecentMessageId: string;
      };
      createdAt: string;
      updatedAt: string;
    };
    nextToken: string;
    startedAt: string;
  };
};

const MessageChat = ({ route }) => {
  // const route = useRoute();
  const navigation = useNavigation();
  const messageChatID = route.params.id;
  const [chat, setChat] = useState(null);

  // console.log(route);

  useEffect(() => {
    const fetchChats = async () => {
      const chatData = (await API.graphql(
        graphqlOperation(messageChatUsersByUserId, { userId: route.params.id })
      )) as { data: MessageChatByUserID };

      setChat(chatData.data.messageChatUsersByUserId.items);
    };
    fetchChats();
  }, []);

  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);

  if (!chat) {
    return <ActivityIndicator />;
  }

  // console.log(chat);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 100}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.bg}
    >
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          style={styles.list}
          inverted
        />
        <InputBox messageChatID={messageChatID} />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default MessageChat;
