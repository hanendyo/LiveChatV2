import React, { useCallback, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useConversations } from "../context/ConversationContext";

const OpenConversation = () => {
  const [text, setText] = useState("");
  const { sendMessage, selectedConversation } = useConversations();
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(
      selectedConversation.recipients.map((rec) => rec.id),
      text
    );
    setText("");
  };

  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 overflow-auto">
        <div className=" d-flex flex-column align-items-start justify-content-end px-3">
          {selectedConversation.messages.map((message, index) => {
            const lastMessage =
              selectedConversation.messages.length - 1 === index;
            return (
              <div
                ref={lastMessage ? setRef : null}
                key={index}
                className={`my-1 d-flex flex-column ${
                  message.fromMe ? "align-self-end" : ""
                }`}
              >
                <div
                  className={`rounded px-2 py-1 ${
                    message.fromMe ? "bg-primary text-white" : "border"
                  }`}
                >
                  {message.text}
                </div>
                <div
                  className={`text-muted small ${
                    message.fromMe ? "text-right align-self-end" : ""
                  } `}
                >
                  <p>{message.fromMe ? "You" : message.senderName}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Form className="m-2">
        <Form.Group>
          <InputGroup>
            <Form.Control
              className="input-group"
              required
              placeholder="Input message here..."
              as="textarea"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ height: "72px", resize: "none" }}
            />
            <div className="input-group-append">
              <Button
                onClick={(e) => handleSubmit(e)}
                className="input-group-text rounded-0"
                style={{ height: "72px", resize: "none" }}
              >
                Send
              </Button>
            </div>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
};

export default OpenConversation;
