import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MessageFeed from '../pages/messageFeed/messageFeed';
import { Ionicons, Entypo } from '@expo/vector-icons';

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
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarStyle: { backgroundColor: 'whitesmoke' },
        headerStyle: { backgroundColor: 'whitesmoke' },
        headerTitleAlign: 'center',
      }}
    >
      <Tab.Screen
        name="Home"
        component={DummyComponent}
        options={{ tabBarIcon: () => <Ionicons size={32} name="home" /> }}
      />
      <Tab.Screen
        name="Calls"
        component={DummyComponent}
        options={{ tabBarIcon: () => <Ionicons size={32} name="call" /> }}
      />
      <Tab.Screen
        name="Camera"
        component={DummyComponent}
        options={{ tabBarIcon: () => <Ionicons size={32} name="camera" /> }}
      />
      <Tab.Screen
        name="Chats"
        component={MessageFeed}
        options={{
          tabBarIcon: () => <Ionicons size={32} name="chatbubbles-sharp" />,
          headerRight: () => (
            <Entypo name="new-message" size={18} color={'royalblue'} style={{ marginRight: 15 }} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={DummyComponent}
        options={{ tabBarIcon: () => <Ionicons size={32} name="settings" /> }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
