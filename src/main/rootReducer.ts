import { combineReducers } from "redux";

import { currentConversationStateReducer } from "features/currentConversation/currentConversationModel";
import { LayoutStateReducer } from "features/layout/layoutModel";
import { UsersReducer } from "features/users/userModel";
import { AuthenticationStateReducer } from "features/authentication/authenticationModel";
import { MessageStateReducer } from "features/messages/messageModel";
import { conversationStateReducer } from "features/conversations/conversationModel";
import { JoinedConversationsStateReducer } from "features/joinedConversations/joinedConversationModel";

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
