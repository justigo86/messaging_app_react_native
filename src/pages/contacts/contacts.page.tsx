import { FlatList } from 'react-native';
// import chats from '../../../assets/data/chats.json';
import ContactListItem from '../../components/contactList/contactListItem.component';
import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../../graphql/queries';
// import { createMessageChat, createMessageChatUser } from '../../graphql/mutations';
import { GraphQLResult } from '@aws-amplify/api';
// import { useNavigation } from '@react-navigation/native';
// import { getUserChat } from '../../services/chatService';
// import { RootStackParamList } from '../../navigation/navigator.component';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { Message, ModelMessageChatUserConnection, ModelMessageConnection } from '../../API';

type UsersData = {
  listUsers: {
    __typename: string;
    items: [
      {
        id: string;
        name: string;
        image: string | null;
        status: string;
        Messages: {
          nextToken: string | null;
          startedAt: string | null;
          __typename: string;
        };
        messagechats: {
          nextToken: string | null;
          startedAt: string | null;
          __typename: string;
        };
        createdAt: string | null;
        updatedAt: string | null;
        _version: string;
        _deleted: string;
        _lastChangedAt: string;
        __typename: string;
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

// type CreateMessageChat = {
//   createMessageChat: {
//     id: string;
//     Messages: {
//       items: {
//         id: string;
//         Messages: ModelMessageConnection;
//         Users: ModelMessageChatUserConnection;
//         MostRecentMessage: Message;
//         createdAt: string;
//         updatedAt: string;
//         _version: number;
//         _deleted: Boolean;
//         _lastChangedAt: string;
//         messageChatMostRecentMessageId: string;
//         __typename: 'messageChatItem';
//       };
//       Users: {
//         items: {
//           id: string;
//           userId: string;
//           messageChatId: string;
//           createdAt: string;
//           updatedAt: string;
//           _version: number;
//           _deleted: Boolean;
//           _lastChangedAt: string;
//           __typename: 'messageUserItem';
//         };
//         nextToken;
//         startedAt: string;
//         __typename: 'messageUser';
//       };
//       MostRecentMessage: {
//         id: string;
//         text: string;
//         createdAt: string;
//         messagechatID: string;
//         userID: string;
//         updatedAt: string;
//         _version: number;
//         _deleted: Boolean;
//         _lastChangedAt: string;
//         __typename: 'mostRecentMessage';
//       };
//       createdAt: string;
//       updatedAt: string;
//       _version: number;
//       _deleted: Boolean;
//       _lastChangedAt: string;
//       messageChatMostRecentMessageId: string;
//       __typename: 'messageChat';
//     };
//   };
// };

// type ContactPageProp = NativeStackNavigationProp<RootStackParamList, 'Contacts'>;
//needed to set a prop type for useNavigation with Chat params used below

const Contacts = () => {
  const [users, setUsers] = useState([]);
  // const navigation = useNavigation<ContactPageProp>();

  useEffect(() => {
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

  // const createUserChat = async (user) => {
  //   const existingChat = await getUserChat(user.id);
  //   if (existingChat) {
  //     navigation.navigate('Chat', { id: existingChat.id });
  //     return;
  //   }
  //   console.log(user);

  //   //create chat
  //   const newMessageChatData = (await API.graphql(
  //     graphqlOperation(createMessageChat, { input: {} })
  //   )) as { data: CreateMessageChat };
  //   // console.log(newMessageChatData);
  //   if (!newMessageChatData.data?.createMessageChat) {
  //     console.log('Chat error.');
  //   }
  //   const newMessageChat = newMessageChatData.data.createMessageChat;

  //   //add user to chat
  //   await API.graphql(
  //     graphqlOperation(createMessageChatUser, {
  //       input: { messageChatId: newMessageChat.id, userId: user.id },
  //     })
  //   );

  //   //add auth user to chat
  //   const authUser = await Auth.currentAuthenticatedUser();
  //   await API.graphql(
  //     graphqlOperation(createMessageChatUser, {
  //       input: { messageChatId: newMessageChat.id, userId: authUser.attributes.sub },
  //     })
  //   );

  //   //navigate user to chat
  //   navigation.navigate('Chat', { id: newMessageChat.id });
  // };

  return (
    <FlatList
      // data={chats} - changed when API incorporated
      data={users}
      renderItem={({ item }) => <ContactListItem user={item} />}
      style={{ backgroundColor: 'white' }}
    />
  );
};

export default Contacts;
