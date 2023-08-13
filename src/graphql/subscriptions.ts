/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateMessageChat = /* GraphQL */ `
  subscription OnCreateMessageChat(
    $filter: ModelSubscriptionMessageChatFilterInput
  ) {
    onCreateMessageChat(filter: $filter) {
      id
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
export const onUpdateMessageChat = /* GraphQL */ `
  subscription OnUpdateMessageChat(
    $filter: ModelSubscriptionMessageChatFilterInput
  ) {
    onUpdateMessageChat(filter: $filter) {
      id
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
export const onDeleteMessageChat = /* GraphQL */ `
  subscription OnDeleteMessageChat(
    $filter: ModelSubscriptionMessageChatFilterInput
  ) {
    onDeleteMessageChat(filter: $filter) {
      id
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
export const onCreateMessageChatUser = /* GraphQL */ `
  subscription OnCreateMessageChatUser(
    $filter: ModelSubscriptionMessageChatUserFilterInput
  ) {
    onCreateMessageChatUser(filter: $filter) {
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
export const onUpdateMessageChatUser = /* GraphQL */ `
  subscription OnUpdateMessageChatUser(
    $filter: ModelSubscriptionMessageChatUserFilterInput
  ) {
    onUpdateMessageChatUser(filter: $filter) {
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
export const onDeleteMessageChatUser = /* GraphQL */ `
  subscription OnDeleteMessageChatUser(
    $filter: ModelSubscriptionMessageChatUserFilterInput
  ) {
    onDeleteMessageChatUser(filter: $filter) {
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
