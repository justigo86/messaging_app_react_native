import React, { useState, useEffect } from 'react';
import { FlatList, View, TextInput, StyleSheet, Button } from 'react-native';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
import { listUsers } from '../../graphql/queries';
import ContactListItem from '../../components/contactList/contactListItem.component';
import styles from './newGroup.styles';
import { GraphQLResult } from '@aws-amplify/api';
import { createMessageChat, createMessageChatUser } from '../../graphql/mutations';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/navigator.component';
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

type CreateMessageChat = {
  createMessageChat: {
    id: string;
    name: string;
    image: string | null;
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
      name: string;
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

const ContactsScreen = () => {
  const [users, setUsers] = useState([]);
  const [groupUsers, setGroupUsers] = useState([]);
  const [name, setName] = useState('');

  const navigation = useNavigation<ContactPageProp>();

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = (await API.graphql(
        graphqlOperation(listUsers)
      )) as GraphQLResult<UsersData>;
      // console.log(usersData.data?.listUsers?.items);

      setUsers(usersData.data?.listUsers?.items);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Create"
          disabled={!name || groupUsers.length < 1}
          onPress={createGroupChat}
        />
      ),
    });
  }, [name, groupUsers]);

  const createGroupChat = async () => {
    //create chat
    const newMessageChatData = (await API.graphql(
      graphqlOperation(createMessageChat, { input: { name } })
    )) as { data: CreateMessageChat };
    // console.log(newMessageChatData);
    if (!newMessageChatData.data?.createMessageChat) {
      console.log('Chat error.');
    }
    const newMessageChat = newMessageChatData.data.createMessageChat;

    //add user to group chat
    await Promise.all(
      groupUsers.map((userId) =>
        API.graphql(
          graphqlOperation(createMessageChatUser, {
            input: { messageChatId: newMessageChat.id, userId },
          })
        )
      )
    );

    //add auth user to chat
    const authUser = await Auth.currentAuthenticatedUser();
    (await API.graphql(
      graphqlOperation(createMessageChatUser, {
        input: { messageChatId: newMessageChat.id, userId: authUser.attributes.sub },
      })
    )) as { data: MessageChatUserData };

    //clear chat members and reset group name
    setGroupUsers([]);
    setName('');

    //navigate user to chat
    navigation.navigate('Chat', { id: newMessageChat.id, name: newMessageChat.name });
  };

  const onPress = (userID) => {
    setGroupUsers((users) => {
      if (users.includes(userID)) {
        //if user has already been selected, remove
        return [...users].filter((user) => user !== userID);
      } else {
        //add user
        return [...users, userID];
      }
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Group name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <ContactListItem
            user={item}
            groupSelect
            onPress={() => onPress(item.id)}
            isSelected={groupUsers.includes(item.id)}
          />
        )}
      />
    </View>
  );
};

export default ContactsScreen;
