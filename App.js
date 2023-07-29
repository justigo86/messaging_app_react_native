import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MessageFeedItem from './src/components/MessageFeedItem/messageFeedItem.component';

const chatDummyData = {
  id: '1',
  user: {
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg',
    name: 'Lukas',
  },
  mostRecentMessage: {
    text: 'Oke',
    createdAt: '07:30',
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <MessageFeedItem chat={chatDummyData} />
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
