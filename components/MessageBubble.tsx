import React from 'react';
import { Message } from '../types';
import { Bot, User } from 'lucide-react';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex w-full mb-6 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex max-w-[85%] sm:max-w-[75%] gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 
          ${isUser ? 'bg-blue-100 text-blue-600' : 'bg-emerald-100 text-emerald-600'}`}>
          {isUser ? <User size={16} /> : <Bot size={16} />}
        </div>

        {/* Content */}
        <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
          <div 
            className={`px-5 py-3 rounded-2xl shadow-sm text-sm sm:text-base leading-relaxed
            ${isUser 
              ? 'bg-blue-600 text-white rounded-tr-none' 
              : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
            }`}
          >
            {/* If it's the bot, we use a slightly different font for that "machine" feel, optionally */}
            <p className={!isUser ? 'font-mono' : ''}>{message.text}</p>
          </div>
          <span className="text-[10px] text-gray-400 mt-1 px-1">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>

      </div>
    </div>
  );
};

export default MessageBubble;