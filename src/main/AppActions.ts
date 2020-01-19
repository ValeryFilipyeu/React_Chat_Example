import {
  focusOnConversationAction,
  updateConversationMessageInputValueAction
} from "features/currentConversation/currentConversationModel";
import {
  setLayoutAction,
  setBreakpointAction
} from "features/layout/layoutModel";
import {
  logingInAction,
  loginSucceededAction
} from "features/authentication/authenticationModel";

export type AppActions =
  | focusOnConversationAction
  | setLayoutAction
  | setBreakpointAction
  | logingInAction
  | loginSucceededAction
  | updateConversationMessageInputValueAction;
