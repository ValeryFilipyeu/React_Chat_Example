import React from "react";
import { Wrapper } from "./ChatUI.style";
import { Menu } from "features/chat/Menu/Menu";
import { CurrentConversation } from "features/currentConversation/CurrentConversation/CurrentConversation";

const ChatUI = () => {
  return (
    <Wrapper>
      <Menu />
      <CurrentConversation />
    </Wrapper>
  );
};

export { ChatUI };
