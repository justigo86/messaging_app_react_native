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
import Message from '../../components/message/message.component';
import InputBox from '../../components/inputBox/inputBox.component';
import { API, graphqlOperation } from 'aws-amplify';
import { getMessageChat, listMessagesByMessageChat } from '../../graphql/queries';
import { onCreateMessage } from '../../graphql/subscriptions';
import { Observable } from 'rxjs';
import { GraphQLSubscription } from '@aws-amplify/api';

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

type MessageChatData = {
  getMessageChat: {
    id: string;
    Messages: {
      items: MessageData[];
      nextToken: string;
      startedAt: string;
    };
    Users: {
      items: {
        id: string;
        userId: string;
        messageChatId: string;
        createdAt: string;
        updatedAt: string;
      };
      nextToken: string;
      startedAt: string;
    };
    MostRecentMessage: {
      id: string;
      text: string;
      createdAt: string;
      messagechatID: string;
      userID: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
    messageChatMostRecentMessageId: string;
  };
};

type MessageData = {
  createdAt: string;
  id: string;
  messagechatID: string;
  text: string;
  updatedAt: string;
  userID: string;
};

type MessageDataByMessageChat = {
  listMessagesByMessageChat: {
    items: [
      {
        id: string;
        text: string;
        createdAt: string;
        messagechatID: string;
        userID: string;
        updatedAt: string;
      },
    ];
    nextToken: string;
    startedAt: string;
  };
};

type OnCreateMessageSubscription = {
  id: string;
  text: string;
  createdAt: string;
  messagechatID: string;
  userID: string;
  updatedAt: string;
};

const MessageChat = ({ route }) => {
  // const route = useRoute();
  const navigation = useNavigation();
  const messageChatID = route.params.id;
  const [chat, setChat] = useState(null);
  const [messages, setMessages] = useState<MessageData[]>([]);

  //to fetch chat
  useEffect(() => {
    console.log('messageChat');
    const fetchChats = async () => {
      try {
        // const chatData = (await API.graphql(
        //   graphqlOperation(messageChatUsersByUserId, { userId: route.params.id })
        // )) as { data: MessageChatByUserID };
        const chatData = (await API.graphql(
          graphqlOperation(getMessageChat, { id: messageChatID })
        )) as { data: MessageChatData };

        // setChat(chatData.data.messageChatUsersByUserId.items);
        setChat(chatData.data?.getMessageChat);
      } catch (e) {
        console.log('fetch chat error', e);
      }
    };
    fetchChats();
  }, []);

  //to fetch chat messages
  useEffect(() => {
    const fetchChatMessages = async () => {
      try {
        const chatMessagesData = (await API.graphql(
          graphqlOperation(listMessagesByMessageChat, {
            messagechatID: messageChatID,
            sortDirection: 'DESC',
          })
        )) as { data: MessageDataByMessageChat };

        setMessages(chatMessagesData.data?.listMessagesByMessageChat?.items);
      } catch (e) {
        console.log('fetch messages error', e);
      }
    };
    fetchChatMessages();

    //subscribe to messageChat updates - first create Observable
    const messageObservable = API.graphql<GraphQLSubscription<OnCreateMessageSubscription>>(
      graphqlOperation(onCreateMessage)
    ) as unknown as Observable<any>;

    //then add Subscription by subscribing to Observable
    const messageSubscription = messageObservable.subscribe({
      next: ({ data }) => {
        setMessages((existingMessages) => [data.data.onCreateMessage, ...existingMessages]);
      },
      error: (err) => console.log('message subscription', err),
    });

    //unsubscribe to prevent memory leak
    return () => messageSubscription.unsubscribe();
  }, [messageChatID]);

  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);

  if (!chat) {
    return <ActivityIndicator />;
  }

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
        <InputBox chat={chat} />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default MessageChat;
