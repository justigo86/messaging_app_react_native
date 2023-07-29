import React from 'react';
import { View, Text } from 'react-native';
import styles from './message.styles';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const Message = ({ message }) => {
  const sender = () => {
    return message.user.id === 'u1';
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: sender() ? '#a9f1f1' : 'white',
          alignSelf: sender() ? 'flex-end' : 'flex-start',
        },
      ]}
    >
      <Text>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  );
};

export default Message;
