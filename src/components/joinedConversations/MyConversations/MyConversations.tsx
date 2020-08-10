import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { getCurrentConversationId } from "components/currentConversation/currentConversationModel";
import { setLayoutDefault } from "components/layout/actions";
import { getConversationsByUserId } from "../joinedConversationModel";
import { MembershipHash } from "../joinedConversationModel";
import {
  ConversationsIndexedById,
  getConversationsById
} from "components/conversations/conversationModel";
import { focusOnConversation } from "components/currentConversation/currentConversationModel";
import { getLoggedInUserId } from "components/authentication/authenticationModel";
import { ConversationItem } from "../ConversationItem";
import {
  Wrapper,
  Title,
  ConversationList
} from "./MyConversations.style";

export interface ConversationFragment {
  id: string;
  name: string;
}

export const getJoinedConversations = createSelector(
  [getConversationsById, getLoggedInUserId, getConversationsByUserId],
  (
    conversations: ConversationsIndexedById,
    userId: string,
    userConversations: MembershipHash
  ): ConversationFragment[] => {
    return userConversations[userId]
      ? userConversations[userId].map(conversation => {
          return {
            id: conversation.id,
            name: conversations[conversation.id].name
          };
        })
      : [];
  }
);

const MyConversations = () => {
  const conversationsById = useSelector(getConversationsById);
  const conversations: ConversationFragment[] = useSelector(
    getJoinedConversations
  );
  const currentConversationId: string = useSelector(getCurrentConversationId);

  const dispatch = useDispatch();

  if (conversationsById === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Title>
        Conversations
      </Title>
      <ConversationList>
        {conversations.map(conversation => (
          <ConversationItem
            id={conversation.id}
            name={conversation.name}
            selected={conversation.id === currentConversationId}
            key={conversation.id}
            unreadMessageCount={0}
            onClick={() => {
              dispatch(focusOnConversation(conversation.id));
              dispatch(setLayoutDefault());
            }}
          />
        ))}
      </ConversationList>
    </Wrapper>
  );
};

export { MyConversations };
