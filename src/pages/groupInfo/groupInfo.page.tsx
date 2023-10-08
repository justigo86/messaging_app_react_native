import { useEffect, useState } from 'react';
import { FlatList, View, Text, ActivityIndicator, Alert } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import ContactListItem from '../../components/contactList/contactListItem.component';
import { onUpdateMessageChat } from '../../graphql/subscriptions';
import { Observable } from 'rxjs';
import { GraphQLSubscription } from '@aws-amplify/api';
import styles from './groupInfo.styles';
import { deleteMessageChatUser } from '../../graphql/mutations';

type MessageChatData = {
  getMessageChat: {
    id: string;
    name: string;
    updatedAt: string;
    Users: {
      items: {
        id: string;
        messageChatID: string;
        userId: string;
        createdAt: string;
        updatedAt: string;
        _deleted?: boolean | null;
        _version: string;
        user: {
          id: string;
          name: string;
          status: string;
          image: string;
        };
      };
      nextToken: string;
      startedAt: string;
    };
    createdAt: string;
    messageChatLastMessageId: string;
    _deleted?: boolean | null;
    _version: string;
  };
};

type OnUpdateMessageChatSubscription = {
  onUpdateMessageChat: {
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
        _deleted?: boolean | null;
        _version: string;
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
        _deleted?: boolean | null;
        _version: string;
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
      _deleted?: boolean | null;
      _version: string;
    };
    createdAt: string;
    updatedAt: string;
    messageChatMostRecentMessageId: string;
    _deleted?: boolean | null;
    _version: string;
  };
};

// type UserToDelete = {
//   deleteMessageChatUser: {
//     id: string;
//     userId: string;
//     messageChatId: string;
//     user: {
//       id: string;
//       name: string;
//       image: string;
//       status: string;
//       Messages: {
//         nextToken: string;
//         startedAt: string;
//       };
//       messagechats: {
//         nextToken: string;
//         startedAt: string;
//       };
//       createdAt: string;
//       updatedAt: string;
//       _version: string;
//       _deleted?: boolean | null;
//     };
//     messageChat: {
//       id: string;
//       name: string;
//       image: string;
//       Messages: {
//         nextToken: string;
//         startedAt: string;
//       };
//       Users: {
//         nextToken: string;
//         startedAt: string;
//       };
//       MostRecentMessage: {
//         id: string;
//         text: string;
//         createdAt: string;
//         messagechatID: string;
//         userID: string;
//         updatedAt: string;
//         _version: string;
//         _deleted?: boolean | null;
//       };
//       createdAt: string;
//       updatedAt: string;
//       _version: string;
//       _deleted?: boolean | null;
//       messageChatMostRecentMessageId: string;
//     };
//     createdAt: string;
//     updatedAt: string;
//     _version: string;
//     _deleted?: boolean | null;
//   };
// };

// type AlertType = {
//   alert: (title: string, message?: string, buttons?: AlertButton[], options?: AlertOptions) => void;
// };

type AlertButton = {
  text: string;
  style: 'default' | 'cancel' | 'destructive';
  onPress?: () => void;
};

// type AlertOptions = {
//   cancelable: boolean;
//   userInterfaceStyle: string;
//   onDismiss: Function;
// };

export const getMessageChat = /* GraphQL */ `
  query GetMessageChat($id: ID!) {
    getMessageChat(id: $id) {
      id
      updatedAt
      name
      Users {
        items {
          id
          messageChatId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          user {
            id
            name
            status
            image
          }
        }
        nextToken
        startedAt
      }
      createdAt
      _version
      _deleted
      _lastChangedAt
      messageChatMostRecentMessageId
    }
  }
`;

const GroupInfo = ({ route }) => {
  const [messageChat, setMessageChat] = useState(null);

  const messageChatID = route.params.id;
  console.log('routeID', messageChatID);

  useEffect(() => {
    const fetchChat = async () => {
      const chat = (await API.graphql(graphqlOperation(getMessageChat, { id: messageChatID }))) as {
        data: MessageChatData;
      };
      setMessageChat(chat.data?.getMessageChat);
    };
    fetchChat();
    console.log('groupChat', messageChat);

    // Subscribe to onUpdateMessageChat
    const groupInfoSubscription = (
      API.graphql<GraphQLSubscription<OnUpdateMessageChatSubscription>>(
        graphqlOperation(onUpdateMessageChat, {
          filter: { id: { eq: messageChatID } },
        })
      ) as unknown as Observable<any>
    ).subscribe({
      next: ({ value }) => {
        setMessageChat((cr) => ({
          ...(cr || {}),
          ...value.data.onUpdateMessageChat,
        }));
      },
      error: (err) => console.warn('GroupInfo subscription error', err),
    });

    // Stop receiving data updates from the subscription
    return () => groupInfoSubscription.unsubscribe();
  }, [messageChatID]);

  const removeUser = async (user) => {
    const deleteUser = await API.graphql(
      graphqlOperation(deleteMessageChatUser, { input: { id: user.id, _version: user._version } })
    );
    console.log('User deletion.', deleteUser);
  };

  const selectContact = (user) => {
    const alertButtons: AlertButton[] = [
      {
        style: 'cancel',
        text: 'Cancel',
      },
      {
        style: 'destructive',
        text: 'Remove',
        onPress: () => removeUser(user),
      },
    ];

    const alertConfig = {
      title: 'Alert Title',
      message: 'This is the alert message.',
      buttons: alertButtons,
      options: { cancelable: false },
    };

    Alert.alert(alertConfig.title, alertConfig.message, alertConfig.buttons, alertConfig.options);
  };

  if (!messageChat) {
    return <ActivityIndicator />;
  }

  //filter out users that have been deleted - need to do this because deleted contacts remain for TTL (time to leave)
  const groupContacts = messageChat.Users.items.filter((contact) => !contact._deleted);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{messageChat.name}</Text>

      <Text style={styles.sectionTitle}>{groupContacts.length} Participants</Text>
      <View style={styles.section}>
        <FlatList
          data={groupContacts}
          renderItem={({ item }) => (
            <ContactListItem user={item.user} onPress={() => selectContact(item)} />
          )}
        />
      </View>
    </View>
  );
};

export default GroupInfo;
