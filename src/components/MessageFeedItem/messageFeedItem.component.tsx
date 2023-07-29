import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './messageFeedItem.styles';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const MessageFeedItem = ({ chat }) => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default MessageFeedItem;
