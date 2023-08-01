import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import styles from './messageFeedItem.styles';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useNavigation } from '@react-navigation/native';
import { ChatRoom } from '../../../types';

dayjs.extend(relativeTime);

export type MessageFeedItemProps = {
  chatRoom: ChatRoom;
};

const MessageFeedItem = ({ chat }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      // onPress={() => navigation.navigate('Chat')}
    >
      <Image source={{ uri: chat.user.image }} style={styles.avatar}></Image>
      <View style={styles.messageContent}>
        <View style={styles.row}>
          <Text style={styles.username} numberOfLines={1}>
            {chat.user.name}
          </Text>
          <Text style={styles.time}>{dayjs(chat.mostRecentMessage.createdAt).fromNow(true)}</Text>
          {/* wrapped created time in dayjs for relative time to local - .fromNow(true) removes "ago" */}
        </View>
        <Text style={styles.messageText} numberOfLines={2}>
          {chat.mostRecentMessage.text}
        </Text>
      </View>
    </Pressable>
  );
};

export default MessageFeedItem;
