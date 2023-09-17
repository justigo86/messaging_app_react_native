import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './message.styles';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Auth } from 'aws-amplify';

dayjs.extend(relativeTime);

const Message = ({ message }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const userMessage = async () => {
      const authUser = await Auth.currentAuthenticatedUser();

      setUser(message.userID === authUser.attributes.sub);
    };

    userMessage();
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: user ? '#a9f1f1' : 'white',
          alignSelf: user ? 'flex-end' : 'flex-start',
        },
      ]}
    >
      <Text>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  );
};

export default Message;
