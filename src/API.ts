/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMessageInput = {
  id?: string | null,
  text: string,
  createdAt?: string | null,
  messagechatID: string,
  userID: string,
  _version?: number | null,
};

export type ModelMessageConditionInput = {
  text?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  messagechatID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  text: string,
  createdAt: string,
  messagechatID: string,
  userID: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMessageInput = {
  id: string,
  text?: string | null,
  createdAt?: string | null,
  messagechatID?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeleteMessageInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  image?: string | null,
  status?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  image?: string | null,
  status?: string | null,
  Messages?: ModelMessageConnection | null,
  messagechats?: ModelMessageChatUserConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMessageChatUserConnection = {
  __typename: "ModelMessageChatUserConnection",
  items:  Array<MessageChatUser | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type MessageChatUser = {
  __typename: "MessageChatUser",
  id: string,
  userId: string,
  messageChatId: string,
  user: User,
  messageChat: MessageChat,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type MessageChat = {
  __typename: "MessageChat",
  id: string,
  name?: string | null,
  image?: string | null,
  Messages?: ModelMessageConnection | null,
  Users?: ModelMessageChatUserConnection | null,
  MostRecentMessage?: Message | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  messageChatMostRecentMessageId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  status?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateMessageChatInput = {
  id?: string | null,
  name?: string | null,
  image?: string | null,
  _version?: number | null,
  messageChatMostRecentMessageId?: string | null,
};

export type ModelMessageChatConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelMessageChatConditionInput | null > | null,
  or?: Array< ModelMessageChatConditionInput | null > | null,
  not?: ModelMessageChatConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  messageChatMostRecentMessageId?: ModelIDInput | null,
};

export type UpdateMessageChatInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  _version?: number | null,
  messageChatMostRecentMessageId?: string | null,
};

export type DeleteMessageChatInput = {
  id: string,
  _version?: number | null,
};

export type CreateMessageChatUserInput = {
  id?: string | null,
  userId: string,
  messageChatId: string,
  _version?: number | null,
};

export type ModelMessageChatUserConditionInput = {
  userId?: ModelIDInput | null,
  messageChatId?: ModelIDInput | null,
  and?: Array< ModelMessageChatUserConditionInput | null > | null,
  or?: Array< ModelMessageChatUserConditionInput | null > | null,
  not?: ModelMessageChatUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateMessageChatUserInput = {
  id: string,
  userId?: string | null,
  messageChatId?: string | null,
  _version?: number | null,
};

export type DeleteMessageChatUserInput = {
  id: string,
  _version?: number | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  messagechatID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMessageChatFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelMessageChatFilterInput | null > | null,
  or?: Array< ModelMessageChatFilterInput | null > | null,
  not?: ModelMessageChatFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  messageChatMostRecentMessageId?: ModelIDInput | null,
};

export type ModelMessageChatConnection = {
  __typename: "ModelMessageChatConnection",
  items:  Array<MessageChat | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMessageChatUserFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  messageChatId?: ModelIDInput | null,
  and?: Array< ModelMessageChatUserFilterInput | null > | null,
  or?: Array< ModelMessageChatUserFilterInput | null > | null,
  not?: ModelMessageChatUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  text?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  messagechatID?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionMessageChatFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageChatFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageChatFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionMessageChatUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  messageChatId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMessageChatUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageChatUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    text: string,
    createdAt: string,
    messagechatID: string,
    userID: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    text: string,
    createdAt: string,
    messagechatID: string,
    userID: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    text: string,
    createdAt: string,
    messagechatID: string,
    userID: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    status?: string | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string,
        messagechatID: string,
        userID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    messagechats?:  {
      __typename: "ModelMessageChatUserConnection",
      items:  Array< {
        __typename: "MessageChatUser",
        id: string,
        userId: string,
        messageChatId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    status?: string | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string,
        messagechatID: string,
        userID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    messagechats?:  {
      __typename: "ModelMessageChatUserConnection",
      items:  Array< {
        __typename: "MessageChatUser",
        id: string,
        userId: string,
        messageChatId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    status?: string | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string,
        messagechatID: string,
        userID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    messagechats?:  {
      __typename: "ModelMessageChatUserConnection",
      items:  Array< {
        __typename: "MessageChatUser",
        id: string,
        userId: string,
        messageChatId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMessageChatMutationVariables = {
  input: CreateMessageChatInput,
  condition?: ModelMessageChatConditionInput | null,
};

export type CreateMessageChatMutation = {
  createMessageChat?:  {
    __typename: "MessageChat",
    id: string,
    name?: string | null,
    image?: string | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string,
        messagechatID: string,
        userID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Users?:  {
      __typename: "ModelMessageChatUserConnection",
      items:  Array< {
        __typename: "MessageChatUser",
        id: string,
        userId: string,
        messageChatId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MostRecentMessage?:  {
      __typename: "Message",
      id: string,
      text: string,
      createdAt: string,
      messagechatID: string,
      userID: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    messageChatMostRecentMessageId?: string | null,
  } | null,
};

export type UpdateMessageChatMutationVariables = {
  input: UpdateMessageChatInput,
  condition?: ModelMessageChatConditionInput | null,
};

export type UpdateMessageChatMutation = {
  updateMessageChat?:  {
    __typename: "MessageChat",
    id: string,
    name?: string | null,
    image?: string | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string,
        messagechatID: string,
        userID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Users?:  {
      __typename: "ModelMessageChatUserConnection",
      items:  Array< {
        __typename: "MessageChatUser",
        id: string,
        userId: string,
        messageChatId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MostRecentMessage?:  {
      __typename: "Message",
      id: string,
      text: string,
      createdAt: string,
      messagechatID: string,
      userID: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    messageChatMostRecentMessageId?: string | null,
  } | null,
};

export type DeleteMessageChatMutationVariables = {
  input: DeleteMessageChatInput,
  condition?: ModelMessageChatConditionInput | null,
};

export type DeleteMessageChatMutation = {
  deleteMessageChat?:  {
    __typename: "MessageChat",
    id: string,
    name?: string | null,
    image?: string | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string,
        messagechatID: string,
        userID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Users?:  {
      __typename: "ModelMessageChatUserConnection",
      items:  Array< {
        __typename: "MessageChatUser",
        id: string,
        userId: string,
        messageChatId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MostRecentMessage?:  {
      __typename: "Message",
      id: string,
      text: string,
      createdAt: string,
      messagechatID: string,
      userID: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    messageChatMostRecentMessageId?: string | null,
  } | null,
};

export type CreateMessageChatUserMutationVariables = {
  input: CreateMessageChatUserInput,
  condition?: ModelMessageChatUserConditionInput | null,
};

export type CreateMessageChatUserMutation = {
  createMessageChatUser?:  {
    __typename: "MessageChatUser",
    id: string,
    userId: string,
    messageChatId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      status?: string | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messagechats?:  {
        __typename: "ModelMessageChatUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    messageChat:  {
      __typename: "MessageChat",
      id: string,
      name?: string | null,
      image?: string | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Users?:  {
        __typename: "ModelMessageChatUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      MostRecentMessage?:  {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string,
        messagechatID: string,
        userID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      messageChatMostRecentMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMessageChatUserMutationVariables = {
  input: UpdateMessageChatUserInput,
  condition?: ModelMessageChatUserConditionInput | null,
};

export type UpdateMessageChatUserMutation = {
  updateMessageChatUser?:  {
    __typename: "MessageChatUser",
    id: string,
    userId: string,
    messageChatId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      status?: string | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messagechats?:  {
        __typename: "ModelMessageChatUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    messageChat:  {
      __typename: "MessageChat",
      id: string,
      name?: string | null,
      image?: string | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Users?:  {
        __typename: "ModelMessageChatUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      MostRecentMessage?:  {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string,
        messagechatID: string,
        userID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      messageChatMostRecentMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMessageChatUserMutationVariables = {
  input: DeleteMessageChatUserInput,
  condition?: ModelMessageChatUserConditionInput | null,
};

export type DeleteMessageChatUserMutation = {
  deleteMessageChatUser?:  {
    __typename: "MessageChatUser",
    id: string,
    userId: string,
    messageChatId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      status?: string | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messagechats?:  {
        __typename: "ModelMessageChatUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    messageChat:  {
      __typename: "MessageChat",
      id: string,
      name?: string | null,
      image?: string | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Users?:  {
        __typename: "ModelMessageChatUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      MostRecentMessage?:  {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string,
        messagechatID: string,
        userID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      messageChatMostRecentMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    text: string,
    createdAt: string,
    messagechatID: string,
    userID: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      text: string,
      createdAt: string,
      messagechatID: string,
      userID: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMessagesQuery = {
  syncMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      text: string,
      createdAt: string,
      messagechatID: string,
      userID: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ListMessagesByMessageChatQueryVariables = {
  messagechatID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesByMessageChatQuery = {
  listMessagesByMessageChat?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      text: string,
      createdAt: string,
      messagechatID: string,
      userID: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type MessagesByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByUserIDQuery = {
  messagesByUserID?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      text: string,
      createdAt: string,
      messagechatID: string,
      userID: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    status?: string | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string,
        messagechatID: string,
        userID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    messagechats?:  {
      __typename: "ModelMessageChatUserConnection",
      items:  Array< {
        __typename: "MessageChatUser",
        id: string,
        userId: string,
        messageChatId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      status?: string | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messagechats?:  {
        __typename: "ModelMessageChatUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      status?: string | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messagechats?:  {
        __typename: "ModelMessageChatUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMessageChatQueryVariables = {
  id: string,
};

export type GetMessageChatQuery = {
  getMessageChat?:  {
    __typename: "MessageChat",
    id: string,
    name?: string | null,
    image?: string | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string,
        messagechatID: string,
        userID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Users?:  {
      __typename: "ModelMessageChatUserConnection",
      items:  Array< {
        __typename: "MessageChatUser",
        id: string,
        userId: string,
        messageChatId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MostRecentMessage?:  {
      __typename: "Message",
      id: string,
      text: string,
      createdAt: string,
      messagechatID: string,
      userID: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    messageChatMostRecentMessageId?: string | null,
  } | null,
};

export type ListMessageChatsQueryVariables = {
  filter?: ModelMessageChatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessageChatsQuery = {
  listMessageChats?:  {
    __typename: "ModelMessageChatConnection",
    items:  Array< {
      __typename: "MessageChat",
      id: string,
      name?: string | null,
      image?: string | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Users?:  {
        __typename: "ModelMessageChatUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      MostRecentMessage?:  {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string,
        messagechatID: string,
        userID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      messageChatMostRecentMessageId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMessageChatsQueryVariables = {
  filter?: ModelMessageChatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMessageChatsQuery = {
  syncMessageChats?:  {
    __typename: "ModelMessageChatConnection",
    items:  Array< {
      __typename: "MessageChat",
      id: string,
      name?: string | null,
      image?: string | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Users?:  {
        __typename: "ModelMessageChatUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      MostRecentMessage?:  {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string,
        messagechatID: string,
        userID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      messageChatMostRecentMessageId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMessageChatUserQueryVariables = {
  id: string,
};

export type GetMessageChatUserQuery = {
  getMessageChatUser?:  {
    __typename: "MessageChatUser",
    id: string,
    userId: string,
    messageChatId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      status?: string | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messagechats?:  {
        __typename: "ModelMessageChatUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    messageChat:  {
      __typename: "MessageChat",
      id: string,
      name?: string | null,
      image?: string | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Users?:  {
        __typename: "ModelMessageChatUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      MostRecentMessage?:  {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string,
        messagechatID: string,
        userID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      messageChatMostRecentMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMessageChatUsersQueryVariables = {
  filter?: ModelMessageChatUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessageChatUsersQuery = {
  listMessageChatUsers?:  {
    __typename: "ModelMessageChatUserConnection",
    items:  Array< {
      __typename: "MessageChatUser",
      id: string,
      userId: string,
      messageChatId: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      messageChat:  {
        __typename: "MessageChat",
        id: string,
        name?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        messageChatMostRecentMessageId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMessageChatUsersQueryVariables = {
  filter?: ModelMessageChatUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMessageChatUsersQuery = {
  syncMessageChatUsers?:  {
    __typename: "ModelMessageChatUserConnection",
    items:  Array< {
      __typename: "MessageChatUser",
      id: string,
      userId: string,
      messageChatId: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      messageChat:  {
        __typename: "MessageChat",
        id: string,
        name?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        messageChatMostRecentMessageId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type MessageChatUsersByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageChatUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessageChatUsersByUserIdQuery = {
  messageChatUsersByUserId?:  {
    __typename: "ModelMessageChatUserConnection",
    items:  Array< {
      __typename: "MessageChatUser",
      id: string,
      userId: string,
      messageChatId: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      messageChat:  {
        __typename: "MessageChat",
        id: string,
        name?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        messageChatMostRecentMessageId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type MessageChatUsersByMessageChatIdQueryVariables = {
  messageChatId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageChatUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessageChatUsersByMessageChatIdQuery = {
  messageChatUsersByMessageChatId?:  {
    __typename: "ModelMessageChatUserConnection",
    items:  Array< {
      __typename: "MessageChatUser",
      id: string,
      userId: string,
      messageChatId: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      messageChat:  {
        __typename: "MessageChat",
        id: string,
        name?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        messageChatMostRecentMessageId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    text: string,
    createdAt: string,
    messagechatID: string,
    userID: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    text: string,
    createdAt: string,
    messagechatID: string,
    userID: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    text: string,
    createdAt: string,
    messagechatID: string,
    userID: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    status?: string | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string,
        messagechatID: string,
        userID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    messagechats?:  {
      __typename: "ModelMessageChatUserConnection",
      items:  Array< {
        __typename: "MessageChatUser",
        id: string,
        userId: string,
        messageChatId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    status?: string | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string,
        messagechatID: string,
        userID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    messagechats?:  {
      __typename: "ModelMessageChatUserConnection",
      items:  Array< {
        __typename: "MessageChatUser",
        id: string,
        userId: string,
        messageChatId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    status?: string | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string,
        messagechatID: string,
        userID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    messagechats?:  {
      __typename: "ModelMessageChatUserConnection",
      items:  Array< {
        __typename: "MessageChatUser",
        id: string,
        userId: string,
        messageChatId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMessageChatSubscriptionVariables = {
  filter?: ModelSubscriptionMessageChatFilterInput | null,
};

export type OnCreateMessageChatSubscription = {
  onCreateMessageChat?:  {
    __typename: "MessageChat",
    id: string,
    name?: string | null,
    image?: string | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string,
        messagechatID: string,
        userID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Users?:  {
      __typename: "ModelMessageChatUserConnection",
      items:  Array< {
        __typename: "MessageChatUser",
        id: string,
        userId: string,
        messageChatId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MostRecentMessage?:  {
      __typename: "Message",
      id: string,
      text: string,
      createdAt: string,
      messagechatID: string,
      userID: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    messageChatMostRecentMessageId?: string | null,
  } | null,
};

export type OnUpdateMessageChatSubscriptionVariables = {
  filter?: ModelSubscriptionMessageChatFilterInput | null,
};

export type OnUpdateMessageChatSubscription = {
  onUpdateMessageChat?:  {
    __typename: "MessageChat",
    id: string,
    name?: string | null,
    image?: string | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string,
        messagechatID: string,
        userID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Users?:  {
      __typename: "ModelMessageChatUserConnection",
      items:  Array< {
        __typename: "MessageChatUser",
        id: string,
        userId: string,
        messageChatId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MostRecentMessage?:  {
      __typename: "Message",
      id: string,
      text: string,
      createdAt: string,
      messagechatID: string,
      userID: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    messageChatMostRecentMessageId?: string | null,
  } | null,
};

export type OnDeleteMessageChatSubscriptionVariables = {
  filter?: ModelSubscriptionMessageChatFilterInput | null,
};

export type OnDeleteMessageChatSubscription = {
  onDeleteMessageChat?:  {
    __typename: "MessageChat",
    id: string,
    name?: string | null,
    image?: string | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string,
        messagechatID: string,
        userID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Users?:  {
      __typename: "ModelMessageChatUserConnection",
      items:  Array< {
        __typename: "MessageChatUser",
        id: string,
        userId: string,
        messageChatId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MostRecentMessage?:  {
      __typename: "Message",
      id: string,
      text: string,
      createdAt: string,
      messagechatID: string,
      userID: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    messageChatMostRecentMessageId?: string | null,
  } | null,
};

export type OnCreateMessageChatUserSubscriptionVariables = {
  filter?: ModelSubscriptionMessageChatUserFilterInput | null,
};

export type OnCreateMessageChatUserSubscription = {
  onCreateMessageChatUser?:  {
    __typename: "MessageChatUser",
    id: string,
    userId: string,
    messageChatId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      status?: string | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messagechats?:  {
        __typename: "ModelMessageChatUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    messageChat:  {
      __typename: "MessageChat",
      id: string,
      name?: string | null,
      image?: string | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Users?:  {
        __typename: "ModelMessageChatUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      MostRecentMessage?:  {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string,
        messagechatID: string,
        userID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      messageChatMostRecentMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMessageChatUserSubscriptionVariables = {
  filter?: ModelSubscriptionMessageChatUserFilterInput | null,
};

export type OnUpdateMessageChatUserSubscription = {
  onUpdateMessageChatUser?:  {
    __typename: "MessageChatUser",
    id: string,
    userId: string,
    messageChatId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      status?: string | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messagechats?:  {
        __typename: "ModelMessageChatUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    messageChat:  {
      __typename: "MessageChat",
      id: string,
      name?: string | null,
      image?: string | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Users?:  {
        __typename: "ModelMessageChatUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      MostRecentMessage?:  {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string,
        messagechatID: string,
        userID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      messageChatMostRecentMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMessageChatUserSubscriptionVariables = {
  filter?: ModelSubscriptionMessageChatUserFilterInput | null,
};

export type OnDeleteMessageChatUserSubscription = {
  onDeleteMessageChatUser?:  {
    __typename: "MessageChatUser",
    id: string,
    userId: string,
    messageChatId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      status?: string | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      messagechats?:  {
        __typename: "ModelMessageChatUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    messageChat:  {
      __typename: "MessageChat",
      id: string,
      name?: string | null,
      image?: string | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Users?:  {
        __typename: "ModelMessageChatUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      MostRecentMessage?:  {
        __typename: "Message",
        id: string,
        text: string,
        createdAt: string,
        messagechatID: string,
        userID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      messageChatMostRecentMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
