import React from "react";
import {
  Wrapper,
  Body,
  ConversationIcon,
  Name,
  MessageCount
} from "./ConversationItem.style";

interface ConversationItemProps {
  selected: boolean;
  id: string;
  name: string;
  unreadMessageCount: number;
  onClick: () => void;
}

const ConversationItem = ({
  selected,
  id,
  name,
  onClick,
  unreadMessageCount
}: ConversationItemProps) => {
  return (
    <Wrapper
      selected={selected}
      emphasized={unreadMessageCount > 0}
      onClick={onClick}
    >
      <Body>
        <ConversationIcon selected={selected}>#</ConversationIcon>
        <Name>{name}</Name>
      </Body>
      <MessageCount>{unreadMessageCount}</MessageCount>
    </Wrapper>
  );
};

export { ConversationItem };
