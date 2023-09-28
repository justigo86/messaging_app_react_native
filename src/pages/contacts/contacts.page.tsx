import { FlatList, Pressable, Text } from 'react-native';
// import chats from '../../../assets/data/chats.json';
import ContactListItem from '../../components/contactList/contactListItem.component';
import { useEffect, useState } from 'react';
import styles from './contacts.styles';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { listUsers } from '../../graphql/queries';
import { createMessageChat, createMessageChatUser } from '../../graphql/mutations';
import { GraphQLResult } from '@aws-amplify/api';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { getUserChat } from '../../services/chatService';
import { RootStackParamList } from '../../navigation/navigator.component';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Message, ModelMessageChatUserConnection, ModelMessageConnection } from '../../API';

type UsersData = {
  listUsers: {
    items: [
      {
        id: string;
        name: string;
        image: string | null;
        status: string;
        Messages: {
          nextToken: string | null;
          startedAt: string | null;
        };
        messagechats: {
          nextToken: string | null;
          startedAt: string | null;
        };
        createdAt: string | null;
        updatedAt: string | null;
      },
    ];
    nextToken: null;
    startedAt: null;
  };
};

type MessageChatData = {
  messageChat: {
    id: string;
    Users: {
      items: {
        id: string;
        user: {
          id: string;
          image: string;
          name: string;
        };
      };
    };
    MostRecentMessage: {
      id: string;
      createdAt: string;
      text: string;
    };
  };
  id: string;
};

// type GetUserData = {
//   getUser: {
//     name: string;
//     id: string;
//     messagechats: {
//       items: MessageChatData[];
//     };
//   };
// };

type CreateMessageChat = {
  createMessageChat: {
    id: string;
    Messages: {
      items: {
        id: string;
        Messages: ModelMessageConnection;
        Users: ModelMessageChatUserConnection;
        MostRecentMessage: Message;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted: Boolean;
        _lastChangedAt: string;
        messageChatMostRecentMessageId: string;
        __typename: 'messageChatItem';
      };
      Users: {
        items: {
          id: string;
          userId: string;
          messageChatId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted: Boolean;
          _lastChangedAt: string;
          __typename: 'messageUserItem';
        };
        nextToken;
        startedAt: string;
        __typename: 'messageUser';
      };
      MostRecentMessage: {
        id: string;
        text: string;
        createdAt: string;
        messagechatID: string;
        userID: string;
        updatedAt: string;
        _version: number;
        _deleted: Boolean;
        _lastChangedAt: string;
        __typename: 'mostRecentMessage';
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted: Boolean;
      _lastChangedAt: string;
      messageChatMostRecentMessageId: string;
      __typename: 'messageChat';
    };
  };
};

type MessageChatUserData = {
  createMessageChatUser: {
    id: string;
    userId: string;
    messageChatId: string;
    user: {
      id: string;
      name: string;
      image: string;
      status: string;
      Messages: {
        nextToken: string;
        startedAt: string;
      };
      messagechats: {
        nextToken: string;
        startedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    };
    messageChat: {
      id: string;
      Messages: {
        nextToken: string;
        startedAt: string;
      };
      Users: {
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
      messageChatMostRecentMessageId: string;
    };
    createdAt: string;
    updatedAt: string;
  };
};

type ContactPageProp = NativeStackNavigationProp<RootStackParamList, 'Contacts'>;
//needed to set a prop type for useNavigation with Chat params used below

const Contacts = () => {
  const [users, setUsers] = useState([]);
  const navigation = useNavigation<ContactPageProp>();

  useEffect(() => {
    console.log('contacts');
    const fetchUsers = async () => {
      try {
        //graphql API module - that uses graphqlOperation (async) to query users
        const usersData = (await API.graphql(
          graphqlOperation(listUsers)
        )) as GraphQLResult<UsersData>; //necessary due to typing restrictions
        setUsers(usersData?.data?.listUsers?.items);
        // console.log('contacts page', users[0]);
      } catch (e) {
        console.log('contact error', e);
      }
    };
    fetchUsers();
  }, []);

  const createUserChat = async (user) => {
    const existingChat = await getUserChat(user.id);
    if (existingChat) {
      // console.log('existingChat', existingChat);
      navigation.navigate('Chat', { id: existingChat.messageChat.id });
      return;
    }

    //create chat
    const newMessageChatData = (await API.graphql(
      graphqlOperation(createMessageChat, { input: {} })
    )) as { data: CreateMessageChat };
    // console.log(newMessageChatData);
    if (!newMessageChatData.data?.createMessageChat) {
      console.log('Chat error.');
    }
    const newMessageChat = newMessageChatData.data.createMessageChat;

    //add user to chat
    (await API.graphql(
      graphqlOperation(createMessageChatUser, {
        input: { messageChatId: newMessageChat.id, userId: user.id },
      })
    )) as { data: MessageChatUserData };

    //add auth user to chat
    const authUser = await Auth.currentAuthenticatedUser();
    (await API.graphql(
      graphqlOperation(createMessageChatUser, {
        input: { messageChatId: newMessageChat.id, userId: authUser.attributes.sub },
      })
    )) as { data: MessageChatUserData };

    //navigate user to chat
    navigation.navigate('Chat', { id: newMessageChat.id });
  };

  return (
    <FlatList
      // data={chats} - changed when API incorporated
      data={users}
      renderItem={({ item }) => (
        <ContactListItem user={item} onPress={() => createUserChat(item)} />
      )}
      style={styles.contactList}
      ListHeaderComponent={() => (
        <Pressable
          onPress={() => {
            navigation.navigate('NewGroup');
          }}
          style={styles.groupList}
        >
          <MaterialIcons name="group" size={24} color="royalblue" style={styles.groupIcon} />
          <Text style={styles.groupText}>New Group</Text>
        </Pressable>
      )}
    />
  );
};

export default Contacts;
