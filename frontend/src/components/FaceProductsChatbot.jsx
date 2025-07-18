import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Sparkles, X } from 'lucide-react';
import ChatHeader from '../chatbot/ChatHeader';
import ChatMessages from '../chatbot/ChatMessages';
import ChatInput from '../chatbot/ChatInput';
import productsData from '../data/myProducts.json';

const FaceProductsChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! 👋 I'm your skincare assistant. I can help you find the perfect face products for your skin type. I have products for:\n\n• Normal skin\n• Dry skin\n• Oily skin\n• Combination skin\n• Sensitive skin\n\nWhat's your skin type or what can I help you with today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const filterProductsByCategory = (category) => {
    return productsData.filter(product =>
      product.category.toLowerCase() === category.toLowerCase()
    );
  };

  const detectSkinType = (message) => {
    const msg = message.toLowerCase();
    if (msg.includes('dry')) return 'dry skin';
    if (msg.includes('oily')) return 'oily skin';
    if (msg.includes('normal')) return 'normal skin';
    if (msg.includes('combination') || msg.includes('combo')) return 'combination skin';
    if (msg.includes('sensitive')) return 'sensitive skin';
    return null;
  };

  const generateBotResponse = (message) => {
    const lowerMsg = message.toLowerCase();
    const skinType = detectSkinType(lowerMsg);

    if (/hello|hi|hey/.test(lowerMsg)) {
      return { text: "Hello! 😊 What's your skin type? (normal, dry, oily, combination, or sensitive)" };
    }

    if (skinType) {
      const products = filterProductsByCategory(skinType);
      return {
        text: products.length > 0
          ? `Great! Here are recommended products for ${skinType}:\n\n${products.map(p => `• ${p.name} - ${p.price}\n  ${p.description}`).join('\n\n')}`
          : `I don't have specific products for ${skinType} right now.`,
        products
      };
    }

    if (/product|recommend|suggest/.test(lowerMsg)) {
      return {
        text: "I'd love to recommend something! What's your skin type?\n\n• Normal\n• Dry\n• Oily\n• Combination\n• Sensitive"
      };
    }

    if (/price|cost|expensive/.test(lowerMsg)) {
      return {
        text: "Our products range from $22.99 to $42.99. Want to see products for your skin type?"
      };
    }

    return {
      text: "I'm here to help! Tell me your skin type:\n• Normal\n• Dry\n• Oily\n• Combination\n• Sensitive"
    };
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMsg = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botRes = generateBotResponse(inputMessage);
      setMessages(prev => [
        ...prev,
        {
          id: prev.length + 1,
          text: botRes.text,
          isBot: true,
          timestamp: new Date(),
          products: botRes.products
        }
      ]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
        >
          <MessageCircle size={24} />
        </button>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl w-96 h-[500px] flex flex-col overflow-hidden border border-gray-200">
          <ChatHeader onClose={() => setIsOpen(false)} />
          <ChatMessages messages={messages} isTyping={isTyping} messagesEndRef={messagesEndRef} />
          <ChatInput
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
            handleSendMessage={handleSendMessage}
          />
        </div>
      )}
    </div>
  );
};

export default FaceProductsChatbot;
