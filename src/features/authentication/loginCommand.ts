import { ThunkAction } from "main/storeTypes";
import { loggingIn, loginSucceeded } from "./authenticationModel";
import { fetchUserById, fetchMemberships } from "pubnub-redux";
import { getConversationsByUserId } from "features/joinedConversations/joinedConversationModel";

export const login = (userId: string): ThunkAction<Promise<void>> => {
  return (dispatch, getState, context) => {
    dispatch(loggingIn());

    const timer = new Promise(resolve => setTimeout(resolve, 2000));

    context.pubnub.api.setUUID(userId);

    const isLoginSuccessful = dispatch(fetchUserById({ userId }))
      .then(() => {
        context.pubnub.api.subscribe({
          channels: [userId],
          withPresence: true
        });
      })
      .then(() => {
        return dispatch(
          fetchMemberships({
            userId,
            include: {
              spaceFields: true,
              customSpaceFields: false,
              customFields: false,
              totalCount: false
            }
          })
        );
      })
      .then(() => {
        const conversationChannels = getConversationsByUserId(getState())[
          userId
        ].map(membership => membership.id);

        context.pubnub.api.subscribe({
          channels: conversationChannels,
          withPresence: true
        });
      });

    return Promise.all([timer, isLoginSuccessful]).then(() => {
      dispatch(loginSucceeded({ loggedInUserId: userId }));
    });
  };
};
