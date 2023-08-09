import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './App.styles';
import MessageChat from './src/pages/messageChat/messageChat';
import Navigator from './src/navigation/navigator.component';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);
// Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });  //if needed

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MessageChat /> */}
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}
