import { API, Auth, graphqlOperation } from 'aws-amplify';

type GetUserData = {
  getUser: {
    id: string;
    messagechats: {
      items: {
        messageChat: {
          id: string;
          Users: {
            items: {
              user: {
                id: string;
              };
            };
          };
        };
      };
    };
  };
};

export const getUserChat = async (userID) => {
  const authUser = await Auth.currentAuthenticatedUser();

  //retrieve user chat rooms
  const userData = (await API.graphql(
    graphqlOperation(getUser, { id: authUser.attributes.sub })
  )) as { data: GetUserData };
  const userChats = userData.data?.getUser?.messagechats?.items[0] || [];

  const userChat = userChats.find((chat) => {
    return chat.messageChat.Users.items.some((users) => users.user.id === userID);
  });

  return userChat;
};

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      messagechats {
        items {
          messageChat {
            id
            Users {
              items {
                user {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;
