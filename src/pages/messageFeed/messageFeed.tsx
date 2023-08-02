import React from 'react';
import { FlatList, View } from 'react-native';
import MessageFeedItem from '../../components/messageFeedItem/messageFeedItem.component';
import chatData from '../../../assets/data/chats.json';
import { useNavigation } from '@react-navigation/native';

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
  return (
    <View>
      <FlatList
        data={chatData}
        renderItem={({ item }) => <MessageFeedItem navigation={navigation} chat={item} />}
      />
    </View>
  );
};

export default MessageFeed;
