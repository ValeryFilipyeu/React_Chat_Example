import React from "react";
import {
  Wrapper,
  Body,
  ConversationIcon,
  Name
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
    </Wrapper>
  );
};

export { ConversationItem };
