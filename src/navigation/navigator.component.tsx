import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MessageFeed from '../pages/messageFeed/messageFeed.page';
import MessageChat from '../pages/messageChat/messageChat.page';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator.component';
import Contacts from '../pages/contacts/contacts.page';
import NewGroup from '../pages/newGroup/newGroup.page';
import GroupInfo from '../pages/groupInfo/groupInfo.page';

export type RootStackParamList = {
  Tabs: undefined;
  MessageFeed: undefined;
  Chat: { id: any };
  GroupInfo: { id: any };
  Contacts: undefined;
  NewGroup: undefined;
};

const Navigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: 'whitesmoke' },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="MessageFeed" component={MessageFeed} />
        <Stack.Screen name="Chat" component={MessageChat} />
        <Stack.Screen name="GroupInfo" component={GroupInfo} />
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="NewGroup" component={NewGroup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
