import { Button, View } from 'react-native';
import styles from './settings.styles';
import { Auth } from 'aws-amplify';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Button onPress={() => Auth.signOut()} title="Sign out" />
    </View>
  );
};

export default Settings;
