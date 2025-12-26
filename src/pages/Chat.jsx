import { useNavigate } from "react-router-dom";
import ChatUI from "../components/ChatUI";

const Chat = () => {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      {/* ---------- NAVBAR ---------- */}
      <nav className="navbar" style={{ marginBottom: "20px" }}>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/chat")} style={{ marginLeft: "10px" }}>
          Chat
        </button>
        <button onClick={() => navigate("/admin")} style={{ marginLeft: "10px" }}>
          Admin
        </button>
      </nav>

      {/* ---------- PAGE TITLE ---------- */}
      <h1 className="app-title">OpsMind AI Chat</h1>
      <p className="app-subtitle">
        Ask questions about SOP documents and get instant AI responses
      </p>

      {/* ---------- Chat Component ---------- */}
      <ChatUI />
    </div>
  );
};

export default Chat;
