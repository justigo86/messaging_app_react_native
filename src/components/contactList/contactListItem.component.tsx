import { Text, Image, Pressable, View } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import styles from './contactListItem.styles';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createMessageChat, createMessageChatUser } from '../../graphql/mutations';
import { Message, ModelMessageChatUserConnection, ModelMessageConnection } from '../../API';

type MessageChatData = {
  createMessageChat: {
    id: string;
    Messages: {
      items: {
        id: string;
        Messages: ModelMessageConnection;
        Users: ModelMessageChatUserConnection;
        MostRecentMessage: Message;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted: Boolean;
        _lastChangedAt: string;
        messageChatMostRecentMessageId: string;
        __typename: 'messageChatItem';
      };
      Users: {
        items: {
          id: string;
          userId: string;
          messageChatId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted: Boolean;
          _lastChangedAt: string;
          __typename: 'messageUserItem';
        };
        nextToken;
        startedAt: string;
        __typename: 'messageUser';
      };
      MostRecentMessage: {
        id: string;
        text: string;
        createdAt: string;
        messagechatID: string;
        userID: string;
        updatedAt: string;
        _version: number;
        _deleted: Boolean;
        _lastChangedAt: string;
        __typename: 'mostRecentMessage';
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted: Boolean;
      _lastChangedAt: string;
      messageChatMostRecentMessageId: string;
      __typename: 'messageChat';
    };
  };
};

dayjs.extend(relativeTime);

const ContactListItem = ({ user, navigation }) => {
  // const navigation = useNavigation();

  const onPress = async () => {
    console.warn('Pressed');

    //create chat
    const newMessageChatData = (await API.graphql(
      graphqlOperation(createMessageChat, { input: {} })
    )) as { data: MessageChatData };
    console.log(newMessageChatData);
    if (!newMessageChatData.data?.createMessageChat) {
      console.log('Chat error.');
    }
    const newMessageChat = newMessageChatData.data.createMessageChat;

    //add user to chat
    await API.graphql(
      graphqlOperation(createMessageChatUser, {
        input: { messageChatId: newMessageChat.id, userId: user.id },
      })
    );

    //add auth user to chat
    const authUser = await Auth.currentAuthenticatedUser();
    await API.graphql(
      graphqlOperation(createMessageChatUser, {
        input: { messageChatId: newMessageChat.id, userId: authUser.attributes.sub },
      })
    );

    //navigate user to chat
    navigation.navigate('Chat', { id: newMessageChat.id });
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{ uri: user.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {user.name}
        </Text>

        <Text numberOfLines={2} style={styles.subTitle}>
          {user.status}
        </Text>
      </View>
    </Pressable>
  );
};

export default ContactListItem;
