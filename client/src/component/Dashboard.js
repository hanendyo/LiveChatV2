import React from "react";
import Sidebar from "./Sidebar";
import OpenConversation from "./OpenConversation";
import { useConversations } from "../context/ConversationContext";

const Dashboard = () => {
  const { selectedConversation } = useConversations();
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar />
      {selectedConversation && <OpenConversation />}
    </div>
  );
};

export default Dashboard;
