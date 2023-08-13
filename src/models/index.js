// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Message, User, MessageChat, MessageChatUser } = initSchema(schema);

export {
  Message,
  User,
  MessageChat,
  MessageChatUser
};