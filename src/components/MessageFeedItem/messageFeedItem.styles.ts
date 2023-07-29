import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
  },
  messageContent: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  username: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
  },
  time: {
    fontSize: 14,
    color: 'grey',
  },
  messageText: {
    fontSize: 16,
    color: 'grey',
  },
});

export default styles;
