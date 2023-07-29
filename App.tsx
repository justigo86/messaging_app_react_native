import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './App.styles';
import MessageFeed from './src/Pages/MessageFeed';

export default function App() {
  return (
    <View style={styles.container}>
      <MessageFeed />
      <StatusBar style="auto" />
    </View>
  );
}
