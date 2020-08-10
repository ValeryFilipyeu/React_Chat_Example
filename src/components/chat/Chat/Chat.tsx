import React from "react";
import { Wrapper } from "./ChatUI.style";
import { Menu } from "components/chat/Menu/Menu";
import { CurrentConversation } from "components/currentConversation/CurrentConversation/CurrentConversation";

const ChatUI = () => {
  return (
    <Wrapper>
      <Menu />
      <CurrentConversation />
    </Wrapper>
  );
};

export { ChatUI };
