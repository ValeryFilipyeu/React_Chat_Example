import { ThunkAction } from "main/storeTypes";
import { getCurrentConversationId } from "components/currentConversation/currentConversationModel";
import { MessageContent } from "./messageModel";
import { sendMessage } from "pubnub-redux";
import { getLoggedInUserId } from "components/authentication/authenticationModel";

export const sendMessageAction = (message: MessageContent): ThunkAction => {
  return (dispatch, getState) => {
    const state = getState();
    return dispatch(
      sendMessage({
        channel: getCurrentConversationId(state),
        message: {
          content: message,
          sender: getLoggedInUserId(state)
        }
      })
    );
  };
};
