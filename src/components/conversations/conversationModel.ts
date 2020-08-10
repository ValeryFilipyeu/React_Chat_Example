import { AppState } from "main/storeTypes";
import { createSelector } from "reselect";
import { combineReducers } from "redux";
import {
  createSpaceReducer,
  createSpaceListReducer,
  Space
} from "pubnub-redux";

export type Conversation = Required<Pick<Space, "id" | "name" | "description">>;

export type ConversationsIndexedById = { [id: string]: Conversation };

const conversationStateReducer = combineReducers({
  conversations: createSpaceReducer<Conversation>(),
  allConversations: createSpaceListReducer<Conversation>()
});
export { conversationStateReducer };

const getConversationsSlice = (state: AppState) => state.conversations;

export const getConversationsById = createSelector(
  [getConversationsSlice],
  (conversations): ConversationsIndexedById => {
    return conversations.conversations.byId;
  }
);