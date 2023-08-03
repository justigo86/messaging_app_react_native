import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MessageFeed from '../pages/messageFeed/messageFeed';

const Tab = createBottomTabNavigator();

import { View, Text, StyleSheet } from 'react-native';
export const DummyComponent = () => {
  return (
    <View style={dummyStyles.container}>
      <Text>Placeholder</Text>
    </View>
  );
};
const dummyStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Status" component={DummyComponent} />
      <Tab.Screen name="Calls" component={DummyComponent} />
      <Tab.Screen name="Camera" component={DummyComponent} />
      <Tab.Screen name="Chats" component={MessageFeed} />
      <Tab.Screen name="Settings" component={DummyComponent} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
