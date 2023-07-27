import React from 'react';
import { Text, View, Image } from 'react-native';

const MessageFeedItem = () => {
  return (
    <View>
      <Image
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg' }}
        style={{ width: 50, height: 50 }}
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
