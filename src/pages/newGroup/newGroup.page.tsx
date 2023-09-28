import React, { useState, useEffect } from 'react';
import { FlatList, View, TextInput, StyleSheet, Button } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
import { listUsers } from '../../graphql/queries';
import ContactListItem from '../../components/contactList/contactListItem.component';
import styles from './newGroup.styles';
import { GraphQLResult } from '@aws-amplify/api';

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

const ContactsScreen = () => {
  const [users, setUsers] = useState([]);
  const [groupUsers, setGroupUsers] = useState([]);
  const [name, setName] = useState('');

  const navigation = useNavigation();

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
          onPress={onCreateGroupPress}
        />
      ),
    });
  }, [name, groupUsers]);

  const onCreateGroupPress = () => {};

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
