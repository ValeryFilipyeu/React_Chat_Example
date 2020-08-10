import { combineReducers } from "redux";

import { currentConversationStateReducer } from "components/currentConversation/currentConversationModel";
import { LayoutStateReducer } from "components/layout/layoutModel";
import { UsersReducer } from "components/users/userModel";
import { AuthenticationStateReducer } from "components/authentication/authenticationModel";
import { MessageStateReducer } from "components/messages/messageModel";
import { conversationStateReducer } from "components/conversations/conversationModel";
import { JoinedConversationsStateReducer } from "components/joinedConversations/joinedConversationModel";

const rootReducer = combineReducers({
  layout: LayoutStateReducer,
  users: UsersReducer,
  conversations: conversationStateReducer,
  joinedConversations: JoinedConversationsStateReducer,
  messages: MessageStateReducer,
  authentication: AuthenticationStateReducer,
  currentConversation: currentConversationStateReducer
});

export default rootReducer;

export type RootState = Readonly<ReturnType<typeof rootReducer>>;
