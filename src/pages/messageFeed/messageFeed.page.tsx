import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import MessageFeedItem from '../../components/messageFeedItem/messageFeedItem.component';
// import chatData from '../../../assets/data/chats.json';
import styles from './messageFeed.styles';
import { API, Auth, graphqlOperation } from 'aws-amplify';
// import { getUser } from '../../graphql/queries';
import { getUserEdit } from './queries';

// const chatDummyData = {
//   id: '1',
//   user: {
//     image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg',
//     name: 'Lukas',
//   },
//   mostRecentMessage: {
//     text: 'Oke',
//     createdAt: '07:30',
//   },
// };

// type UsersItems = {
//   id: string;
//   user?: {
//     id: string;
//     image: string;
//     name: string;
//   } | null;
// };

// type MessageChatData = {
//   _deleted?: boolean | null;
//   messageChat?: {
//     id: string;
//     messageChatMostRecentMessageId: string;
//     createdAt: string;
//     updatedAt: string;
//     name: string;
//     Users?: {
//       items?: UsersItems[] | null;
//     } | null;
//     MostRecentMessage?: {
//       id: string;
//       createdAt: string;
//       text: string;
//     } | null;
//   } | null;
//   id: string;
// };

// type GetUserData = {
//   getUser: {
//     name: string;
//     id: string;
//     createdAt: string;
//     updatedAt: string;
//     messagechats: {
//       items: MessageChatData[];
//     };
//   };
// };

type GetUserType = {
  getUser: {
    id: string;
    name: string;
    image: string;
    status: string;
    Messages: [
      {
        items: [
          {
            id: string;
            text: string;
            createdAt: string;
            messagechatID: string;
            userID: string;
            updatedAt: string;
            _version: string;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            __typename: string;
          },
        ];
        nextToken?: string | null;
        startedAt?: string | null;
        __typename: string;
      },
    ];
    messagechats: {
      items: MessageChatType[];
      id: string;
      nextToken: string;
      startedAt: string;
      __typename: string;
    };
    createdAt: string;
    updatedAt: string;
    _version: string;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    __typename: string;
  };
};

type MessageChatType = {
  id: string;
  userId: string;
  messageChatId: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  _version: string;
  _deleted: boolean;
  _lastChangedAt: string;
  __typename: string;
};

const MessageFeed = () => {
  const [messageChats, setMessageChats] = useState<MessageChatType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMessageChats = async () => {
    setLoading(true);
    try {
      const authUser = await Auth.currentAuthenticatedUser();

      const userData = (await API.graphql(
        graphqlOperation(getUserEdit, { id: authUser.attributes.sub })
      )) as { data: GetUserType };
      // console.log('Feed log', userData.data.getUser.messagechats);

      const chats =
        userData.data?.getUser?.messagechats?.items.filter((item) => !item._deleted) || [];
      const chatSort = chats.sort((chat1, chat2) => {
        // return (
        //   new Date(chat2?.messageChat.updatedAt).valueOf() -
        //   new Date(chat1?.messageChat.updatedAt).valueOf()
        // );
        return new Date(chat2?.updatedAt).valueOf() - new Date(chat1?.updatedAt).valueOf();
      });
      // console.log('After messageFeed chat', chatSort);
      setMessageChats(chatSort);
    } catch (e) {
      console.log(
        'messageFeed error',
        e,
        e.data.getUser.messagechats.items.map((item) => item.messageChat[1])
      );
    }
    setLoading(false);
  };

  useEffect(() => {
    console.log('messageFeed');
    fetchMessageChats();
  }, []);

  return (
    <View>
      <FlatList
        data={messageChats}
        style={styles.list}
        renderItem={({ item }) => <MessageFeedItem chat={item} />}
        onRefresh={fetchMessageChats}
        refreshing={loading}
      />
    </View>
  );
};

export default MessageFeed;
