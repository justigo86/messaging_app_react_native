import { FlatList } from 'react-native';
// import chats from '../../../assets/data/chats.json';
import ContactListItem from '../../components/contactList/contactListItem.component';
import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../../graphql/queries';
import { GraphQLResult } from '@aws-amplify/api';
import { useNavigation } from '@react-navigation/native';

type UsersData = {
  listUsers: {
    __typename: string;
    items: [
      {
        id: string;
        name: string;
        image?: string;
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

const Contacts = () => {
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUsers = async () => {
      console.log('contacts page');
      try {
        //graphql API module - that uses graphqlOperation (async) to query users
        const usersData = (await API.graphql(
          graphqlOperation(listUsers)
        )) as GraphQLResult<UsersData>; //necessary due to typing restrictions
        // console.log(usersData); //check user data when accessing Contacts
        setUsers(usersData?.data?.listUsers?.items);
      } catch (e) {
        console.log('contact error', e);
      }
    };
    fetchUsers();
  }, []);

  return (
    <FlatList
      // data={chats} - changed when API incorporated
      data={users}
      renderItem={({ item }) => <ContactListItem user={item} navigation={navigation} />}
      style={{ backgroundColor: 'white' }}
    />
  );
};

export default Contacts;
