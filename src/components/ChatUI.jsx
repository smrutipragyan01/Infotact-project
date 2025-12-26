// In ChatUI.jsx
import { useState, useEffect } from "react";
import MessageBubble from "./MessageBubble";

const ChatUI = () => {
  const [messages, setMessages] = useState(() => {
    return JSON.parse(localStorage.getItem("chatHistory")) || [];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
  }, [messages]);

  const send = () => {
    if (!input) return;
    setMessages([...messages, { sender: "user", text: input }]);

    setTimeout(() => {
      const reply =
        input.toLowerCase().includes("salary")
          ? "I don't know. This is not in SOP documents."
          : "Refunds are processed within 7 working days.";

      setMessages((prev) => [...prev, { sender: "ai", text: reply }]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="card">
      {messages.map((m, i) => (
        <MessageBubble key={i} message={m} />
      ))}

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask SOP question"
      />
      <button onClick={send}>Send</button>
    </div>
  );
};

export default ChatUI;
