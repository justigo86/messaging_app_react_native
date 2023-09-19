/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const listMessagesByMessageChat = /* GraphQL */ `
  query ListMessagesByMessageChat(
    $messagechatID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessagesByMessageChat(
      messagechatID: $messagechatID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const messagesByUserID = /* GraphQL */ `
  query MessagesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getMessageChat = /* GraphQL */ `
  query GetMessageChat($id: ID!) {
    getMessageChat(id: $id) {
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
export const listMessageChats = /* GraphQL */ `
  query ListMessageChats(
    $filter: ModelMessageChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessageChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncMessageChats = /* GraphQL */ `
  query SyncMessageChats(
    $filter: ModelMessageChatFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessageChats(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getMessageChatUser = /* GraphQL */ `
  query GetMessageChatUser($id: ID!) {
    getMessageChatUser(id: $id) {
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
export const listMessageChatUsers = /* GraphQL */ `
  query ListMessageChatUsers(
    $filter: ModelMessageChatUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessageChatUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        messageChatId
        user {
          id
          name
          image
          status
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncMessageChatUsers = /* GraphQL */ `
  query SyncMessageChatUsers(
    $filter: ModelMessageChatUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessageChatUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userId
        messageChatId
        user {
          id
          name
          image
          status
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const messageChatUsersByUserId = /* GraphQL */ `
  query MessageChatUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageChatUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messageChatUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        messageChatId
        user {
          id
          name
          image
          status
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const messageChatUsersByMessageChatId = /* GraphQL */ `
  query MessageChatUsersByMessageChatId(
    $messageChatId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageChatUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messageChatUsersByMessageChatId(
      messageChatId: $messageChatId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        messageChatId
        user {
          id
          name
          image
          status
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
      nextToken
      startedAt
      __typename
    }
  }
`;
