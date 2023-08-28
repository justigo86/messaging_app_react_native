import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import MessageFeedItem from '../../components/messageFeedItem/messageFeedItem.component';
import chatData from '../../../assets/data/chats.json';
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

const MessageFeed = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const fetchMessageChats = async () => {
      // try {

      // }
      const authUser = await Auth.currentAuthenticatedUser();

      const userData = await API.graphql(
        graphqlOperation(getUser, { id: authUser.attributes.sub })
      );
    };
    fetchMessageChats();
  }, []);

  return (
    <View>
      <FlatList
        data={chatData}
        style={styles.list}
        renderItem={({ item }) => <MessageFeedItem navigation={navigation} chat={item} />}
      />
    </View>
  );
};

export default MessageFeed;
