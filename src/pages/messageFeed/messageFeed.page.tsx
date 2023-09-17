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

  useEffect(() => {
    const fetchMessageChats = async () => {
      try {
        const authUser = await Auth.currentAuthenticatedUser();

        const userData = (await API.graphql(
          graphqlOperation(getUser, { id: authUser.attributes.sub })
        )) as { data: GetUserData };
        //)) as GraphQLResult<GetUserData>;
        // console.log('message feed');

        setMessageChats(userData.data.getUser.messagechats.items);

        // console.log(userData.data.getUser.messagechats.items[0].messageChat);
      } catch (e) {
        console.log(e, 'messageFeed error');
      }
    };
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
      />
    </View>
  );
};

export default MessageFeed;
