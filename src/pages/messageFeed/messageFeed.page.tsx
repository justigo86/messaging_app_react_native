import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import MessageFeedItem from '../../components/messageFeedItem/messageFeedItem.component';
// import chatData from '../../../assets/data/chats.json';
import { useNavigation } from '@react-navigation/native';
import styles from './messageFeed.styles';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser } from './queries';

// const chatDummyData = {
//   id: '1',
//   user: {
//     image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg',
//     name: 'Lukas',
//   },
//   mostRecentMessage: {
//     text: 'Oke',
//     createdAt: '07:30',
//   },
// };

type MessageChatData = {
  messageChat: {
    id: string;
    createdAt: string;
    updatedAt: string;
    Users: {
      items: {
        id: string;
        user: {
          id: string;
          image: string;
          name: string;
        };
      };
    };
    MostRecentMessage: {
      id: string;
      createdAt: string;
      text: string;
    };
  };
  id: string;
};

type GetUserData = {
  getUser: {
    name: string;
    id: string;
    messagechats: {
      items: MessageChatData[];
    };
  };
};

const MessageFeed = () => {
  const navigation = useNavigation();
  const [messageChats, setMessageChats] = useState<MessageChatData[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMessageChats = async () => {
    setLoading(true);
    try {
      const authUser = await Auth.currentAuthenticatedUser();

      const userData = (await API.graphql(
        graphqlOperation(getUser, { id: authUser.attributes.sub })
      )) as { data: GetUserData };

      const chats = userData.data?.getUser?.messagechats?.items || [];
      const chatSort = chats.sort((chat1, chat2) => {
        return (
          new Date(chat2?.messageChat.updatedAt).valueOf() -
          new Date(chat1?.messageChat.updatedAt).valueOf()
        );
      });

      setMessageChats(userData.data.getUser.messagechats.items);

      // console.log(userData.data.getUser.messagechats.items[0].messageChat);
    } catch (e) {
      console.log('messageFeed error', e);
    }
    setLoading(false);
  };

  useEffect(() => {
    console.log('messageFeed');
    fetchMessageChats();
  }, []);

  return (
    <View>
      <FlatList
        data={messageChats}
        style={styles.list}
        renderItem={({ item }) => (
          <MessageFeedItem navigation={navigation} chat={item.messageChat} />
        )}
        onRefresh={fetchMessageChats}
        refreshing={loading}
      />
    </View>
  );
};

export default MessageFeed;
