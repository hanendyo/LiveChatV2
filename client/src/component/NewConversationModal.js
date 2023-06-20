import React, { useState } from "react";
import { Button, Form, FormCheck, FormGroup, Modal } from "react-bootstrap";
import { useContacts } from "../context/ContactContext";
import { useConversations } from "../context/ConversationContext";

const NewConversationModal = ({ closeModal }) => {
  const [selectedContactId, setSelectedContactId] = useState([]);
  const { contacts } = useContacts();
  const { createConversation } = useConversations();

  const handleCheckboxChange = (contactId) => {
    setSelectedContactId((prev) => {
      if (prev.includes(contactId)) {
        return prev.filter((prevId) => {
          return prevId !== contactId;
        });
      } else {
        return [...prev, contactId];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createConversation(selectedContactId);
    closeModal();
  };
  return (
    <>
      <Modal.Header closeButton className="border-1">
        Conversation
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <FormGroup controlId={contact.id} key={contact.id} className="mb-2">
              <FormCheck
                type="checkbox"
                value={selectedContactId.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </FormGroup>
          ))}
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default NewConversationModal;
