import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './App.styles';
import MessageChat from './src/pages/messageChat/messageChat';
import Navigator from './src/navigation/navigator.component';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MessageChat /> */}
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}
