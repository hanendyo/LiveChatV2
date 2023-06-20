import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { SocketProvider } from "../context/SocketContext";
import { ContactsProvider } from "../context/ContactContext";
import { ConversationsProvider } from "../context/ConversationContext";
import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {
  const [id, setId] = useLocalStorage("id", "");

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );

  return id ? dashboard : <Login onIdSubmit={setId} />;
}

export default App;
