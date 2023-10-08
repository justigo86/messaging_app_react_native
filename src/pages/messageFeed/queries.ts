// mutation MyMutation {
//   __typename
// }
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      name
      id
      createdAt
      updatedAt
      messagechats {
        items {
          _deleted
          messageChat {
            id
            createdAt
            updatedAt
            messageChatMostRecentMessageId
            name
            Users {
              items {
                id
                user {
                  id
                  image
                  name
                }
              }
            }
            MostRecentMessage {
              id
              createdAt
              text
            }
          }
          id
        }
      }
    }
  }
`;

export const getUserEdit = /* GraphQL */ `
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
          items {
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
          }
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
