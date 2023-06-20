import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversations } from "../context/ConversationContext";

const Conversations = () => {
  const { Conversations, selectConversationIndex } = useConversations();
  return (
    <ListGroup variant="flush">
      {Conversations.map((conversation, index) => (
        <ListGroup.Item
          key={index}
          action
          active={conversation.selected}
          onClick={() => selectConversationIndex(index)}
        >
          {conversation.recipients
            .map((recipient) => recipient.name)
            .join(", ")}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Conversations;
