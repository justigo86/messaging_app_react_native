/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      text
      createdAt
      messagechatID
      userID
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      text
      createdAt
      messagechatID
      userID
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      text
      createdAt
      messagechatID
      userID
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      image
      status
      Messages {
        items {
          id
          text
          createdAt
          messagechatID
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      messagechats {
        items {
          id
          userId
          messageChatId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      image
      status
      Messages {
        items {
          id
          text
          createdAt
          messagechatID
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      messagechats {
        items {
          id
          userId
          messageChatId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      image
      status
      Messages {
        items {
          id
          text
          createdAt
          messagechatID
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      messagechats {
        items {
          id
          userId
          messageChatId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createMessageChat = /* GraphQL */ `
  mutation CreateMessageChat(
    $input: CreateMessageChatInput!
    $condition: ModelMessageChatConditionInput
  ) {
    createMessageChat(input: $input, condition: $condition) {
      id
      name
      image
      Messages {
        items {
          id
          text
          createdAt
          messagechatID
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Users {
        items {
          id
          userId
          messageChatId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      MostRecentMessage {
        id
        text
        createdAt
        messagechatID
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      messageChatMostRecentMessageId
      __typename
    }
  }
`;
export const updateMessageChat = /* GraphQL */ `
  mutation UpdateMessageChat(
    $input: UpdateMessageChatInput!
    $condition: ModelMessageChatConditionInput
  ) {
    updateMessageChat(input: $input, condition: $condition) {
      id
      name
      image
      Messages {
        items {
          id
          text
          createdAt
          messagechatID
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Users {
        items {
          id
          userId
          messageChatId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      MostRecentMessage {
        id
        text
        createdAt
        messagechatID
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      messageChatMostRecentMessageId
      __typename
    }
  }
`;
export const deleteMessageChat = /* GraphQL */ `
  mutation DeleteMessageChat(
    $input: DeleteMessageChatInput!
    $condition: ModelMessageChatConditionInput
  ) {
    deleteMessageChat(input: $input, condition: $condition) {
      id
      name
      image
      Messages {
        items {
          id
          text
          createdAt
          messagechatID
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Users {
        items {
          id
          userId
          messageChatId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      MostRecentMessage {
        id
        text
        createdAt
        messagechatID
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      messageChatMostRecentMessageId
      __typename
    }
  }
`;
export const createMessageChatUser = /* GraphQL */ `
  mutation CreateMessageChatUser(
    $input: CreateMessageChatUserInput!
    $condition: ModelMessageChatUserConditionInput
  ) {
    createMessageChatUser(input: $input, condition: $condition) {
      id
      userId
      messageChatId
      user {
        id
        name
        image
        status
        Messages {
          nextToken
          startedAt
          __typename
        }
        messagechats {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      messageChat {
        id
        name
        image
        Messages {
          nextToken
          startedAt
          __typename
        }
        Users {
          nextToken
          startedAt
          __typename
        }
        MostRecentMessage {
          id
          text
          createdAt
          messagechatID
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        messageChatMostRecentMessageId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateMessageChatUser = /* GraphQL */ `
  mutation UpdateMessageChatUser(
    $input: UpdateMessageChatUserInput!
    $condition: ModelMessageChatUserConditionInput
  ) {
    updateMessageChatUser(input: $input, condition: $condition) {
      id
      userId
      messageChatId
      user {
        id
        name
        image
        status
        Messages {
          nextToken
          startedAt
          __typename
        }
        messagechats {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      messageChat {
        id
        name
        image
        Messages {
          nextToken
          startedAt
          __typename
        }
        Users {
          nextToken
          startedAt
          __typename
        }
        MostRecentMessage {
          id
          text
          createdAt
          messagechatID
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        messageChatMostRecentMessageId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteMessageChatUser = /* GraphQL */ `
  mutation DeleteMessageChatUser(
    $input: DeleteMessageChatUserInput!
    $condition: ModelMessageChatUserConditionInput
  ) {
    deleteMessageChatUser(input: $input, condition: $condition) {
      id
      userId
      messageChatId
      user {
        id
        name
        image
        status
        Messages {
          nextToken
          startedAt
          __typename
        }
        messagechats {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      messageChat {
        id
        name
        image
        Messages {
          nextToken
          startedAt
          __typename
        }
        Users {
          nextToken
          startedAt
          __typename
        }
        MostRecentMessage {
          id
          text
          createdAt
          messagechatID
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        messageChatMostRecentMessageId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
