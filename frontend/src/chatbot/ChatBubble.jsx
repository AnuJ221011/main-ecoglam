const ChatBubble = ({ message }) => (
  <div className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
    <div className={`max-w-[80%] p-3 rounded-2xl ${message.isBot ? 'bg-white text-gray-800 shadow-sm' : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'}`}>
      <p className="text-sm whitespace-pre-line">{message.text}</p>

      {message.products && (
        <div className="mt-3 space-y-3">
          {message.products.map((product, idx) => (
            <div key={idx} className="flex items-start space-x-3 bg-gray-100 p-3 rounded-xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <p className="font-semibold text-gray-800">{product.name}</p>
                <p className="text-purple-600 font-medium">{product.price}</p>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="text-xs opacity-70 mt-2">
        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </p>
    </div>
  </div>
);

export default ChatBubble;
