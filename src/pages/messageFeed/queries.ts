// mutation MyMutation {
//   __typename
// }
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      name
      id
      messagechats {
        items {
          messageChat {
            id
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
