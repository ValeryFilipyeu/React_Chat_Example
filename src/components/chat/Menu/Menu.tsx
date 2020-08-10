import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Breakpoint } from "components/layout/layoutModel";
import { getPanelStates, getBreakpoint } from "components/layout/selectors";
import { MyUserDetails } from "components/currentUser/MyUserDetails/MyUserDetails";
import { MyConversations } from "components/joinedConversations/MyConversations/MyConversations";
import { Wrapper, AnimatedWrapper } from "./Menu.style";

const Menu = () => {
  const panel = useRef<HTMLElement>(null);
  const panels = useSelector(getPanelStates);
  const breakpoint = useSelector(getBreakpoint);
  const Panel = breakpoint === Breakpoint.Small ? Wrapper : AnimatedWrapper;

    return (
    <Panel ref={panel} pose={panels.Left ? "open" : "closed"}>
      <MyUserDetails />
      <MyConversations />
    </Panel>
  );
};

export { Menu };
