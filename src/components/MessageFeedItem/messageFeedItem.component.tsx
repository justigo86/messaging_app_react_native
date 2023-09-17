import React, { useEffect, useState } from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import styles from './messageFeedItem.styles';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Auth } from 'aws-amplify';
// import { useNavigation } from '@react-navigation/native';

dayjs.extend(relativeTime);

export type MessageFeedParamList = {
  name: string;
  params: {
    id: string;
    name: string;
  };
};

const MessageFeedItem = ({ chat, navigation }) => {
  const [otherUser, setOtherUser] = useState(null);
  // const navigation = useNavigation();

  // console.log(chat);

  useEffect(() => {
    const fetchUser = async () => {
      const authUser = await Auth.currentAuthenticatedUser();
      // const userItem = chat.Users.items[0].find((item) => {
      //   item.user.id !== authUser.attributes.sub;
      // });
      if (chat.Users.items[0].user.id === authUser.attributes.sub) {
        setOtherUser(chat.Users.items[1].user);
      } else {
        setOtherUser(chat.Users.items[0].user);
      }
      // setOtherUser(userItem?.user);
    };
    fetchUser();
  }, []);

  const onClick = () => {
    navigation.navigate('Chat', {
      id: chat.id,
      // name: chat.user?.name,
      name: otherUser?.name,
    });
  };

  return (
    <Pressable style={styles.container} onPress={onClick}>
      <Image
        source={otherUser?.image ? { uri: otherUser?.image } : null}
        style={styles.avatar}
      ></Image>
      <View style={styles.messageContent}>
        <View style={styles.row}>
          <Text style={styles.username} numberOfLines={1}>
            {otherUser?.name}
          </Text>
          <Text style={styles.time}>{dayjs(chat.MostRecentMessage?.createdAt).fromNow(true)}</Text>
          {/* wrapped created time in dayjs for relative time to local - .fromNow(true) removes "ago" */}
        </View>
        <Text style={styles.messageText} numberOfLines={2}>
          {chat.MostRecentMessage?.text}
        </Text>
      </View>
    </Pressable>
  );
};

export default MessageFeedItem;
