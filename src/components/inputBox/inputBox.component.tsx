import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './inputBox.styles';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createMessage, updateMessageChat } from '../../graphql/mutations';

type NewMessageData = {
  createMessage: {
    __typename: string;
    _deleted: Boolean;
    _lastChangedAt: string;
    _version: Number;
    createdAt: string;
    id: string;
    messagechatID: string;
    text: string;
    updatedAt: string;
    userID: string;
  };
};

const InputBox = ({ chat }) => {
  const [newMessage, setNewMessage] = useState('');
  const onMessageSend = async () => {
    try {
      // console.warn('Sending message:', newMessage);
      const authUser = await Auth.currentAuthenticatedUser();

      const newMessageData = {
        messagechatID: chat.id,
        userID: authUser.attributes.sub,
        text: newMessage,
      };

      const createNewMessage = (await API.graphql(
        graphqlOperation(createMessage, { input: newMessageData })
      )) as { data: NewMessageData };

      setNewMessage('');

      await API.graphql(
        graphqlOperation(updateMessageChat, {
          input: {
            _version: chat._version,
            id: chat.id,
            messageChatMostRecentMessageId: createNewMessage.data.createMessage.id,
          },
        })
      );
    } catch (e) {
      console.log('message send failed', e);
    }
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <AntDesign name="plus" size={22} />
      <TextInput style={styles.input} value={newMessage} onChangeText={setNewMessage} multiline />
      <MaterialIcons
        name="send"
        size={20}
        color="white"
        style={styles.send}
        onPress={onMessageSend}
      />
    </SafeAreaView>
  );
};

export default InputBox;
