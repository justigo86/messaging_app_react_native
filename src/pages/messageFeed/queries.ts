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
        }
        messagechats {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
      }
      messageChat {
        id
        name
        image
        Messages {
          nextToken
          startedAt
        }
        Users {
          nextToken
          startedAt
        }
        MostRecentMessage {
          id
          text
          createdAt
          messagechatID
          userID
          updatedAt
        }
        createdAt
        updatedAt
        messageChatMostRecentMessageId
      }
      createdAt
      updatedAt
    }
  }
`;
