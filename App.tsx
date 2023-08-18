import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './App.styles';
// import MessageChat from './src/pages/messageChat/messageChat.page';
import Navigator from './src/navigation/navigator.component';
import { API, Amplify, Auth, graphqlOperation } from 'aws-amplify';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';
import awsmobile from './src/aws-exports';
import { getUser } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';
import { GraphQLResult } from '@aws-amplify/api';

type UserData = {
  getUser: {
    __typename: 'userData';
    Session: null;
    attributes: {
      email: string;
      email_verified: Boolean;
      phone_number: string;
      phone_number_verified: Boolean;
      sub: string;
    };
    authenticationFlowType: string;
    client: {
      endpoint: string;
      fetchOptions: {};
    };
    deviceKey: string;
    keyPrefix: string;
    pool: {
      advancedSecurityDataCollectionFlag: Boolean;
      client: {
        endpoint: string;
        fetchOptions: [{}];
      };
      clientId: string;
      storage: [];
      userPoolId: string;
      wrapRefreshSessionCallback: [];
    };
    preferredMFA: string;
    signInUserSession: {
      accessToken: {
        jwtToken: string;
        payload: [{}];
      };
      clockDrift: number;
      idToken: {
        jwtToken: string;
        payload: [{}];
      };
      refreshToken: {
        token: string;
      };
    };
    storage: [];
    userDataKey: string;
    username: string;
  };
};

// Amplify.configure(awsmobile);
Amplify.configure({ ...awsmobile, Analytics: { disabled: true } }); //if needed

const randomImages = [
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg',
];

function App() {
  const getRandomImage = () => {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  };

  useEffect(() => {
    const fetchUser = async () => {
      //pull current user data to assign to variable
      const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
      console.log(authUser);
      //bypassCache prevents using cache for user authentication to check DB each time
      //import getUser query to pull SubID from user DB data
      const userData = (await API.graphql(
        graphqlOperation(getUser, { id: authUser.attributes.sub })
      )) as { data: UserData };
      console.log(userData);
      //check if user in DB
      if (userData.data?.getUser) {
        console.log('User already in DB.');
        return;
      }
      //if user is not in DB, create using createUser from \queries.ts
      const newUser = {
        id: authUser.attributes.sub,
        name: authUser.username,
        image: getRandomImage(),
        status: 'Placeholder status.',
      };
      console.log(newUser);

      await API.graphql(graphqlOperation(createUser, { input: newUser }));
    };
    fetchUser();
  }, []);
  return (
    <View style={styles.container}>
      {/* <MessageChat /> */}
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}

export default withAuthenticator(App);
