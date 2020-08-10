import {
  focusOnConversationAction,
  updateConversationMessageInputValueAction
} from "components/currentConversation/currentConversationModel";
import {
  setLayoutAction,
  setBreakpointAction
} from "components/layout/layoutModel";
import {
  logingInAction,
  loginSucceededAction
} from "components/authentication/authenticationModel";

export type AppActions =
  | focusOnConversationAction
  | setLayoutAction
  | setBreakpointAction
  | logingInAction
  | loginSucceededAction
  | updateConversationMessageInputValueAction;
