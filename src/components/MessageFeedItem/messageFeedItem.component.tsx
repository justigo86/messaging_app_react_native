import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './messageFeedItem.styles';

const MessageFeedItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg' }}
        style={styles.avatar}
      ></Image>
      <View style={styles.messageContent}>
        <View style={styles.row}>
          <Text style={styles.username} numberOfLines={1}>
            Name
          </Text>
          <Text style={styles.time}>Ti:me</Text>
        </View>
        <Text style={styles.messageText} numberOfLines={2}>
          Test text
        </Text>
      </View>
    </View>
  );
};

export default MessageFeedItem;
