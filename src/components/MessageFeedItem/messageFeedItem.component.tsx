import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './messageFeedItem.component';

const MessageFeedItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg' }}
        style={styles.avatar}
      ></Image>
      <View>
        <View>
          <Text>Name</Text>
          <Text>Ti:me</Text>
        </View>
        <Text>Test text</Text>
      </View>
    </View>
  );
};

export default MessageFeedItem;
