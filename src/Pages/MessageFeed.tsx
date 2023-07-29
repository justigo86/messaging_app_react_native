import React from 'react';
import { FlatList, View } from 'react-native';
import MessageFeedItem from '../components/MessageFeedItem/messageFeedItem.component';
import chatData from '../../assets/data/chats.json';

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
  return (
    <View>
      <FlatList data={chatData} renderItem={({ item }) => <MessageFeedItem chat={item} />} />
    </View>
  );
};

export default MessageFeed;
