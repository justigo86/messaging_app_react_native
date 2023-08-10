import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './App.styles';
import MessageChat from './src/pages/messageChat/messageChat.page';
import Navigator from './src/navigation/navigator.component';
import { Amplify } from 'aws-amplify';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';
import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);
// Amplify.configure({ ...awsconfig, Analytics: { disabled: true } }); //if needed

function App() {
  return (
    <View style={styles.container}>
      {/* <MessageChat /> */}
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}

export default withAuthenticator(App);
