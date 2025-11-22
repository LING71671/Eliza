import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import MessageBubble from './components/MessageBubble';
import TypingIndicator from './components/TypingIndicator';
import { ElizaBot } from './services/ElizaBot';
import { Message } from './types';
import { Send, Trash2 } from 'lucide-react';

// Initialize logic engine outside component to persist state
const eliza = new ElizaBot();

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize with a greeting
  useEffect(() => {
    const initialGreeting: Message = {
      id: 'init-1',
      text: "Hello, I am Eliza. I am here to listen. You can speak to me in English or Chinese.\n\n你好，我是伊莉莎。我在这里倾听。你可以用中文或英文与我交谈。",
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages([initialGreeting]);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userText = inputText.trim();
    const newMessage: Message = {
      id: Date.now().toString(),
      text: userText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate processing time for realism
    const delay = Math.min(1000, Math.max(500, userText.length * 20));

    setTimeout(() => {
      const responseText = eliza.processInput(userText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, delay);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReset = () => {
    if (window.confirm('Restart conversation? This will clear current history.')) {
      eliza.reset(); // Clear the bot's internal memory
      const initialGreeting: Message = {
        id: Date.now().toString(),
        text: "Hello. How are you feeling now?",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([initialGreeting]);
      setInputText('');
      inputRef.current?.focus();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Chat Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto scrollbar-hide pr-2 relative">
          {/* Background Decoration */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex justify-center items-center">
             <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4ZM12 6C11.45 6 11 6.45 11 7V13C11 13.55 11.45 14 12 14C12.55 14 13 13.55 13 13V7C13 6.45 12.55 6 12 6ZM12 16C11.45 16 11 16.45 11 17C11 17.55 11.45 18 12 18C12.55 18 13 17.55 13 17C13 16.45 12.55 16 12 16Z" />
             </svg>
          </div>

          <div className="py-4">
             {messages.map((msg) => (
               <MessageBubble key={msg.id} message={msg} />
             ))}
             {isTyping && <TypingIndicator />}
             <div ref={messagesEndRef} />
          </div>
        </div>
      </main>

      {/* Input Area */}
      <footer className="bg-white border-t border-gray-200 p-4 sticky bottom-0">
        <div className="max-w-4xl mx-auto flex gap-3 items-center">
          <button 
            onClick={handleReset}
            title="Clear Chat"
            className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
          >
            <Trash2 size={20} />
          </button>
          
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message here / 请在此输入..."
              className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 border-0 rounded-full py-3 pl-5 pr-12 focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
              autoComplete="off"
            />
            <div className="absolute right-1 top-1 bottom-1">
              <button
                onClick={handleSend}
                disabled={!inputText.trim() || isTyping}
                className={`h-full aspect-square rounded-full flex items-center justify-center transition-all
                  ${!inputText.trim() || isTyping 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-lg'
                  }`}
              >
                <Send size={18} className={!inputText.trim() ? '' : 'ml-0.5'} />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-2 text-center">
            <p className="text-[10px] text-gray-400">
                Eliza (1966) Simulation - No data is sent to a server.
            </p>
        </div>
      </footer>
    </div>
  );
}

export default App;