import { MessageCircle, X } from 'lucide-react';

const ChatHeader = ({ onClose }) => (
  <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 flex items-center justify-between">
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
        <MessageCircle size={20} />
      </div>
      <div>
        <h3 className="font-semibold text-lg">Skincare Assistant</h3>
        <p className="text-sm opacity-90">Online now</p>
      </div>
    </div>
    <button onClick={onClose} className="text-white hover:bg-white/20 p-1 rounded-full">
      <X size={20} />
    </button>
  </div>
);

export default ChatHeader;
