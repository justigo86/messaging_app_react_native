import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MessageFeed from '../pages/messageFeed/messageFeed';
import MessageChat from '../pages/messageChat/messageChat';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: 'whitesmoke' },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name="MessageFeed" component={MessageFeed} />
        <Stack.Screen name="Chat" component={MessageChat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
