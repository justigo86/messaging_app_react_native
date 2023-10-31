import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MessageFeed from '../pages/messageFeed/messageFeed.page';
import { Ionicons, Entypo } from '@expo/vector-icons';
import styles from './tabNavigator.styles';

const Tab = createBottomTabNavigator();

import { View, Text, StyleSheet } from 'react-native';
import Settings from '../pages/settings/settings.page';
export const DummyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Greetings!</Text>
      <Text>Welcome to a small, bare-bones personal project app.</Text>
      <Text>This is just a bare-bones chat app for now.</Text>
      <Text>Feel free to chat with other users via contacts.</Text>
      <Text>Hopefully your experience is seamless.</Text>
    </View>
  );
};

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
      {/* <Tab.Screen
        name="Calls"
        component={DummyComponent}
        options={{ tabBarIcon: () => <Ionicons size={32} name="call" /> }}
      /> */}
      {/* <Tab.Screen
        name="Camera"
        component={DummyComponent}
        options={{ tabBarIcon: () => <Ionicons size={32} name="camera" /> }}
      /> */}
      <Tab.Screen
        name="Chats"
        component={MessageFeed}
        options={({ navigation }) => ({
          tabBarIcon: () => <Ionicons size={32} name="chatbubbles-sharp" />,
          headerRight: () => (
            <Entypo
              name="new-message"
              onPress={() => navigation.navigate('Contacts')}
              size={18}
              color={'royalblue'}
              style={{ marginRight: 15 }}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ tabBarIcon: () => <Ionicons size={32} name="settings" /> }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
