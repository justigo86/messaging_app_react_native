import { FlatList } from 'react-native';
// import chats from '../../../assets/data/chats.json';
import ContactListItem from '../../components/contactList/contactListItem.component';
import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../../graphql/queries';
import { GraphQLResult } from '@aws-amplify/api';

export interface UsersData {
  listUsers: {
    __typename: string;
    items: [];
    nextToken: null;
    startedAt: null;
  };
}

const Contacts = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        //graphql API module - that uses graphqlOperation (async) to query users
        const usersData = (await API.graphql(
          graphqlOperation(listUsers)
        )) as GraphQLResult<UsersData>; //necessary due to typing restrictions
        // console.log(usersData); //check user data when accessing Contacts
        setUsers(usersData?.data?.listUsers?.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUsers();
  }, []);

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
