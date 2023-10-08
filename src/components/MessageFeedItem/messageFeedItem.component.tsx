import React, { useEffect, useState } from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import styles from './messageFeedItem.styles';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { GraphQLSubscription } from '@aws-amplify/api';
import { Observable } from 'rxjs';
import { onUpdateMessageChat } from '../../graphql/subscriptions';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/navigator.component';
import { useNavigation } from '@react-navigation/native';

dayjs.extend(relativeTime);

export type MessageFeedParamList = {
  name: string;
  params: {
    id: string;
    name: string;
  };
};

type OnUpdateMessageChatSubscription = {
  id: string;
  name: string;
  image: string;
  Messages: {
    items: {
      id: string;
      text: string;
      createdAt: string;
      messagechatID: string;
      userID: string;
      updatedAt: string;
    };
    nextToken: string;
    startedAt: string;
  };
  Users: {
    items: {
      id: string;
      userId: string;
      messageChatId: string;
      createdAt: string;
      updatedAt: string;
    };
    nextToken: string;
    startedAt: string;
  };
  MostRecentMessage: {
    id: string;
    text: string;
    createdAt: string;
    messagechatID: string;
    userID: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

type MessageFeedPageProp = NativeStackNavigationProp<RootStackParamList, 'MessageFeed'>;

const MessageFeedItem = ({ chat }) => {
  const [otherUser, setOtherUser] = useState(null);
  const [messageChat, setMessageChat] = useState(chat);
  const navigation = useNavigation<MessageFeedPageProp>();

  // console.log('messageFeedItemUser:', chat.Users.items);
  // chat.Users.items.forEach((x) => console.log(x.user));

  useEffect(() => {
    const fetchUser = async () => {
      const authUser = await Auth.currentAuthenticatedUser();
      const userItem = chat.Users?.items?.find(
        (item) => item?.user?.id !== authUser.attributes.sub
      );
      if (userItem.user !== null) {
        setOtherUser(userItem?.user);
      }
    };
    fetchUser();
    // console.log('other', otherUser);
    // console.log('messageChat', messageChat);
  }, []);

  useEffect(() => {
    const chatSubscription = (
      API.graphql<GraphQLSubscription<OnUpdateMessageChatSubscription>>(
        graphqlOperation(onUpdateMessageChat, { filter: { id: { eq: chat.id } } })
      ) as unknown as Observable<any>
    ).subscribe({
      next: ({ value }) => {
        console.log('update subscription', value.data);
        setMessageChat((chatData) => ({
          ...(chatData || {}),
          ...value.data.onUpdateMessageChat,
        }));
      },
      error: (err) => console.log('feed update subscription error', err),
    });

    return () => chatSubscription.unsubscribe();
  }, [chat.id]);

  const onClick = () => {
    navigation.navigate('Chat', {
      id: messageChat.id,
      // name: chat.user?.name,
      name: messageChat.name || otherUser?.name,
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
            {messageChat.name || otherUser?.name}
          </Text>
          <Text style={styles.time}>
            {dayjs(messageChat.MostRecentMessage?.createdAt).fromNow(true)}
          </Text>
          {/* wrapped created time in dayjs for relative time to local - .fromNow(true) removes "ago" */}
        </View>
        <Text style={styles.messageText} numberOfLines={2}>
          {messageChat.MostRecentMessage?.text}
        </Text>
      </View>
    </Pressable>
  );
};

export default MessageFeedItem;
