import { API, Auth, graphqlOperation } from 'aws-amplify';

type GetUserData = {
  getUser: {
    id: string;
    name: string;
    messagechats: {
      items: [
        {
          messageChat: {
            id: string;
            name: string;
            Users: {
              items: [
                {
                  user: {
                    id: string;
                    name: string;
                  };
                },
              ];
            };
          };
        },
      ];
    };
  };
};

export const getUserChat = async (userID) => {
  console.log('chatServices userID:', userID);
  const authUser = await Auth.currentAuthenticatedUser();

  //retrieve user chat rooms
  const userData = (await API.graphql(
    graphqlOperation(getUser, { id: authUser.attributes.sub })
  )) as { data: GetUserData };
  const filteredUserData = userData.data.getUser.messagechats.items.filter(
    (user) => user.messageChat
  );
  // console.log('filteredUser: ', filteredUserData);
  const userChats = filteredUserData || [];
  // const userChat = userChats.find((chat) => {
  //   chat.messageChat.Users.items.some((users) => users.user.id === userID);
  // });
  // return userChat;

  const userWithMatchingID = userChats.find((chat) => {
    return (
      //=== Number(2) for conversion to as === 2 causes error with types overlap
      chat.messageChat.Users.items.length === Number(2) &&
      chat.messageChat?.Users.items.some((users) => users?.user?.id === userID)
      // .find((user) => user !== undefined)
    );
  });
  // console.log('matching user', userWithMatchingID.messageChat.Users.items[2].user);
  return userWithMatchingID;
};

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      messagechats {
        items {
          messageChat {
            id
            name
            Users {
              items {
                user {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;
