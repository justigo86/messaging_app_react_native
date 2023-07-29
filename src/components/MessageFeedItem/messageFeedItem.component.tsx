import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './messageFeedItem.styles';

const MessageFeedItem = ({ chat }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: chat.user.image }} style={styles.avatar}></Image>
      <View style={styles.messageContent}>
        <View style={styles.row}>
          <Text style={styles.username} numberOfLines={1}>
            {chat.user.name}
          </Text>
          <Text style={styles.time}>{chat.mostRecentMessage.createdAt}</Text>
        </View>
        <Text style={styles.messageText} numberOfLines={2}>
          {chat.mostRecentMessage.text}
        </Text>
      </View>
    </View>
  );
};

export default MessageFeedItem;
