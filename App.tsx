import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './App.styles';
import MessageFeed from './src/pages/messageFeed/messageFeed';
import MessageChat from './src/pages/messageChat/messageChat';

export default function App() {
  return (
    <View style={styles.container}>
      <MessageChat />
      {/* <MessageFeed /> */}
      <StatusBar style="auto" />
    </View>
  );
}
