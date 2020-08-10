import React, { useRef, useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Message, MessageFragment } from "../Message";
import { getCurrentConversationId } from "../currentConversationModel";
import { getUsersById } from "components/users/userModel";
import { getMessagesById } from "components/messages/messageModel";
import { Wrapper } from "./MessageList.style";
import WelcomeMessage from "./WelcomeMessage";

export const getCurrentConversationMessages = createSelector(
  [getMessagesById, getCurrentConversationId, getUsersById],
  (messages, conversationId, users): MessageFragment[] => {
    if (!messages) {
      throw new Error(`error!`);
    }
    if (!conversationId) {
      throw new Error(`error!`);
    }
    if (!users) {
      throw new Error(`error!`);
    }

    return messages[conversationId]
      ? Object.values(messages[conversationId])
          .filter(message => message.channel === conversationId)
          .map(message => {
            return {
              ...message,
              timetoken: String(message.timetoken),
              sender: users[message.message.sender]
            };
          })
      : [];
  }
);
const MessageList = () => {
  type ConversationScrollPositionsType = { [conversationId: string]: number };
  const conversationId: string = useSelector(getCurrentConversationId);
  const [
    conversationsScrollPositions,
    setConversationsScrollPositions
  ] = useState<ConversationScrollPositionsType>({});

  const updateCurrentConversationScrollPosition = (scrollPosition: number) => {
    setConversationsScrollPositions({
      ...conversationsScrollPositions,
      [conversationId]: scrollPosition
    });
  };

  const handleScroll = (e: any) => {
    const scrollPosition = e.target.scrollTop;
    if (scrollPosition !== 0) {
      updateCurrentConversationScrollPosition(scrollPosition);
    }
  };

  const restoreConversationScrollPosition = (conversationId: string) => {
    const conversationScrollPosition: number =
      conversationsScrollPositions[conversationId];
    if (conversationScrollPosition) {
      wrapper.current.scrollTo(0, conversationScrollPosition);
    }
  };

  const memoizedRestoreConversationScrollPositionCallback = useCallback(
    restoreConversationScrollPosition,
    [conversationId]
  );

  const messages: MessageFragment[] = useSelector(
    getCurrentConversationMessages
  );
  const wrapper = useRef<HTMLDivElement>(document.createElement("div"));
  const el = wrapper.current;

  const scrollToBottom = useCallback(() => {
    return (el.scrollTop = el.scrollHeight - el.clientHeight);
  }, [el]);

  const hasReachedBottom = el.scrollHeight - el.clientHeight === el.scrollTop;

  useEffect(() => {
    if (hasReachedBottom) {
      scrollToBottom();
    }
  }, [messages.length, hasReachedBottom, scrollToBottom]);

  useEffect(() => {
    memoizedRestoreConversationScrollPositionCallback(conversationId);
  }, [memoizedRestoreConversationScrollPositionCallback, conversationId]);

  return (
    <Wrapper ref={wrapper} onScroll={handleScroll}>
      <WelcomeMessage />
      {messages.map(message => (
        <Message message={message} key={message.timetoken} />
      ))}
    </Wrapper>
  );
};

export { MessageList };
