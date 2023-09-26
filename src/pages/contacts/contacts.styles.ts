import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contactList: {
    backgroundColor: 'white',
  },
  groupList: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingHorizontal: 20,
  },
  groupIcon: {
    marginRight: 20,
    backgroundColor: 'gainsboro',
    padding: 7,
    borderRadius: 20,
    overflow: 'hidden',
  },
  groupText: {
    color: 'royalblue',
    fontSize: 16,
  },
});

export default styles;
