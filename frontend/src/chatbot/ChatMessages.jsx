import ChatBubble from './ChatBubble';
import TypingIndicator from './TypingIndicator';

const ChatMessages = ({ messages, isTyping, messagesEndRef }) => (
  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
    {messages.map(msg => (
      <ChatBubble key={msg.id} message={msg} />
    ))}
    {isTyping && <TypingIndicator />}
    <div ref={messagesEndRef} />
  </div>
);

export default ChatMessages;
