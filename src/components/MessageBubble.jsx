const MessageBubble = ({ message }) => {
  return (
    <div className={message.sender === "user" ? "user" : "ai"}>
      <b>{message.sender.toUpperCase()}:</b> {message.text}
    </div>
  );
};

export default MessageBubble;
