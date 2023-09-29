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
import { onCreateMessage, onUpdateMessageChat } from '../../graphql/subscriptions';
import { Observable } from 'rxjs';
import { GraphQLSubscription } from '@aws-amplify/api';
import { Feather } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/navigator.component';

// type MessageChatByUserID = {
//   messageChatUsersByUserId: {
//     items: {
//       id: string;
//       userId: string;
//       messageChatId: string;
//       user: {
//         id: string;
//         name: string;
//         image: string;
//         status: string;
//         createdAt: string;
//         updatedAt: string;
//       };
//       messageChat: {
//         id: string;
//         createdAt: string;
//         updatedAt: string;
//         messageChatMostRecentMessageId: string;
//       };
//       createdAt: string;
//       updatedAt: string;
//     };
//     nextToken: string;
//     startedAt: string;
//   };
// };

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
  onCreateMessage: {
    id: string;
    text: string;
    createdAt: string;
    messagechatID: string;
    userID: string;
    updatedAt: string;
  };
};

type OnUpdateMessageChatSubscription = {
  onUpdateMessageChat: {
    id: string;
    name: string;
    image: string;
    Messages: {
      items: {
        id: string;
        text: string;
        createdAt: string;
        messagechatID: string;
        userID: string;
        updatedAt: string;
      };
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

type GroupInfoPageProp = NativeStackNavigationProp<RootStackParamList, 'GroupInfo'>;

const MessageChat = ({ route }) => {
  // const route = useRoute();
  const navigation = useNavigation();
  const groupNavigation = useNavigation<GroupInfoPageProp>();
  const messageChatID = route.params.id;
  const [chat, setChat] = useState(null);
  const [messages, setMessages] = useState<MessageData[]>([]);

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

  //to fetch chat
  useEffect(() => {
    console.log('messageChat');
    fetchChats();
  }, [messageChatID]);

  useEffect(() => {
    const updateSubscription = (
      API.graphql<GraphQLSubscription<OnUpdateMessageChatSubscription>>(
        graphqlOperation(onUpdateMessageChat, { filter: { id: { eq: messageChatID } } })
      ) as unknown as Observable<any>
    ).subscribe({
      next: (data) => {
        // console.log('chat update subscription', data.value.data);
        setChat((chatData) => ({ ...(chatData || {}), ...data.value.data.onUpdateMessageChat }));
      },
      error: (err) => console.log('update subscription error', err),
    });

    return () => updateSubscription.unsubscribe();
  }, [messageChatID]);

  //to fetch chat messages
  const fetchChatMessages = async () => {
    const chatMessagesData = (await API.graphql(
      graphqlOperation(listMessagesByMessageChat, {
        messagechatID: messageChatID,
        sortDirection: 'DESC',
      })
    )) as { data: MessageDataByMessageChat };

    setMessages(chatMessagesData.data?.listMessagesByMessageChat?.items);
  };

  useEffect(() => {
    fetchChatMessages();
  }, [messageChatID]);

  useEffect(() => {
    //subscribe to messageChat updates - first create Observable
    const messageSubscription = (
      API.graphql<GraphQLSubscription<OnCreateMessageSubscription>>(
        graphqlOperation(onCreateMessage, { filter: { messagechatID: { eq: messageChatID } } })
        //filtering on equal ("eq") to messageChatID
      ) as unknown as Observable<any>
    ).subscribe({
      next: (data) => {
        // console.log('new message subscription', data.value.data.onCreateMessage);
        setMessages((existingMessages) => [data.value.data.onCreateMessage, ...existingMessages]);
        // fetchChatMessages();
      },
      error: (err) => console.log('message subscription error', err),
    });
    // console.log('new message subscription complete');

    //unsubscribe to prevent memory leak
    return () => messageSubscription.unsubscribe();
  }, [messageChatID]);

  useEffect(() => {
    navigation.setOptions({
      title: route.params.name,
      headerRight: () => (
        <Feather
          name="more-vertical"
          size={24}
          color="black"
          onPress={() => groupNavigation.navigate('GroupInfo', { id: messageChatID })}
        />
      ),
    });
  }, [route.params.name, messageChatID]);

  if (!chat) {
    return <ActivityIndicator />;
  }

  // console.log(JSON.stringify(chat));

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
