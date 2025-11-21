import React from 'react';
import { Bot } from 'lucide-react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex w-full mb-6 justify-start">
      <div className="flex max-w-[75%] gap-3 flex-row">
        <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 bg-emerald-100 text-emerald-600">
          <Bot size={16} />
        </div>
        <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;