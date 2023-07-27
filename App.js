import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MessageFeedItem from './src/components/MessageFeedItem/messageFeedItem.component';

export default function App() {
  return (
    <View style={styles.container}>
      <MessageFeedItem />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
