import { Text, Image, Pressable, View } from 'react-native';
import styles from './contactListItem.styles';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

dayjs.extend(relativeTime);

const ContactListItem = ({ user, onPress = () => {}, groupSelect = false, isSelected = false }) => {
  // console.log('userListItem', user);
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={user.image ? { uri: user.image } : null} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {user.name}
        </Text>

        <Text numberOfLines={2} style={styles.subTitle}>
          {user.status}
        </Text>
      </View>
      {groupSelect &&
        (isSelected ? (
          <AntDesign name="checkcircle" size={24} color="royalblue" />
        ) : (
          <FontAwesome name="circle-thin" size={24} color="lightgray" />
        ))}
    </Pressable>
  );
};

export default ContactListItem;

// import { API, Auth, graphqlOperation } from 'aws-amplify';
// import { createMessageChat, createMessageChatUser } from '../../graphql/mutations';
// import { Message, ModelMessageChatUserConnection, ModelMessageConnection } from '../../API';
// import { getUserChat } from '../../services/chatService';

// type MessageChatData = {
//   createMessageChat: {
//     id: string;
//     Messages: {
//       items: {
//         id: string;
//         Messages: ModelMessageConnection;
//         Users: ModelMessageChatUserConnection;
//         MostRecentMessage: Message;
//         createdAt: string;
//         updatedAt: string;
//         _version: number;
//         _deleted: Boolean;
//         _lastChangedAt: string;
//         messageChatMostRecentMessageId: string;
//         __typename: 'messageChatItem';
//       };
//       Users: {
//         items: {
//           id: string;
//           userId: string;
//           messageChatId: string;
//           createdAt: string;
//           updatedAt: string;
//           _version: number;
//           _deleted: Boolean;
//           _lastChangedAt: string;
//           __typename: 'messageUserItem';
//         };
//         nextToken: string;
//         startedAt: string;
//         __typename: 'messageUser';
//       };
//       MostRecentMessage: {
//         id: string;
//         text: string;
//         createdAt: string;
//         messagechatID: string;
//         userID: string;
//         updatedAt: string;
//         _version: number;
//         _deleted: Boolean;
//         _lastChangedAt: string;
//         __typename: 'mostRecentMessage';
//       };
//       createdAt: string;
//       updatedAt: string;
//       _version: number;
//       _deleted: Boolean;
//       _lastChangedAt: string;
//       messageChatMostRecentMessageId: string;
//       __typename: 'messageChat';
//     };
//   };
// };

// type MessageChatUserData = {
//   createMessageChatUser: {
//     id: string;
//     userId: string;
//     messageChatId: string;
//     user: {
//       id: string;
//       name: string;
//       image: string;
//       status: string;
//       Messages: {
//         nextToken: string;
//         startedAt: string;
//       };
//       messagechats: {
//         nextToken: string;
//         startedAt: string;
//       };
//       createdAt: string;
//       updatedAt: string;
//     };
//     messageChat: {
//       id: string;
//       name: string;
//       Messages: {
//         nextToken: string;
//         startedAt: string;
//       };
//       Users: {
//         nextToken: string;
//         startedAt: string;
//       };
//       MostRecentMessage: {
//         id: string;
//         text: string;
//         createdAt: string;
//         messagechatID: string;
//         userID: string;
//         updatedAt: string;
//       };
//       createdAt: string;
//       updatedAt: string;
//       messageChatMostRecentMessageId: string;
//     };
//     createdAt: string;
//     updatedAt: string;
//   };
// };

// type ContactPageProp = NativeStackNavigationProp<RootStackParamList, 'Contacts'>;
//needed to set a prop type for useNavigation with Chat params used below

// dayjs.extend(relativeTime);

// const ContactListItem = ({ user, onPress = () => {} }, groupSelect = false) => {
// const navigation = useNavigation<ContactPageProp>();
// console.log('listItemUser: ', user);

//MOVED to contacts.page
// const onPress = async () => {
//   try {
//     // check if user chat exists
//     const existingChat = await getUserChat(user.id);
//     if (existingChat) {
//       navigation.navigate('Chat', { id: existingChat.id });
//       return;
//     }

//     //create chat
//     const newMessageChatData = (await API.graphql(
//       graphqlOperation(createMessageChat, { input: {} })
//     )) as { data: MessageChatData };
//     // console.log(newMessageChatData);
//     if (!newMessageChatData.data?.createMessageChat) {
//       console.log('Chat error.');
//     }
//     const newMessageChat = newMessageChatData.data.createMessageChat;

//     //add user to chat
//     (await API.graphql(
//       graphqlOperation(createMessageChatUser, {
//         input: { messageChatId: newMessageChat.id, userId: user.id },
//       })
//     )) as { data: MessageChatUserData };

//     //add auth user to chat
//     const authUser = await Auth.currentAuthenticatedUser();
//     (await API.graphql(
//       graphqlOperation(createMessageChatUser, {
//         input: { messageChatId: newMessageChat.id, userId: authUser.attributes.sub },
//       })
//     )) as { data: MessageChatUserData };

//     //navigate user to chat
//     navigation.navigate('Chat', { id: newMessageChat.id });
//   } catch (e) {
//     console.log('contactListItem chat failed', e);
//   }
// };

//   return (
//     <Pressable onPress={onPress} style={styles.container}>
//       <Image source={user.image ? { uri: user.image } : null} style={styles.image} />

//       <View style={styles.content}>
//         <Text style={styles.name} numberOfLines={1}>
//           {user.name}
//         </Text>

//         <Text numberOfLines={2} style={styles.subTitle}>
//           {user.status}
//         </Text>
//       </View>
//     </Pressable>
//   );
// };

// export default ContactListItem;
