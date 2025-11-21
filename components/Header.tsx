import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shadow-sm">
            <Bot size={24} />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-800 tracking-tight">Eliza</h1>
            <p className="text-xs text-gray-500 font-medium flex items-center gap-1">
              <Sparkles size={10} />
              Psychotherapist AI (1966 Edition)
            </p>
          </div>
        </div>
        <div className="hidden sm:block">
           <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
             Dual Language: EN / 中文
           </span>
        </div>
      </div>
    </header>
  );
};

export default Header;