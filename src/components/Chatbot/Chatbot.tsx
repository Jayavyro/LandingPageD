import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ChatMessage } from '../../constants/chatbot';
import { 
  INITIAL_GREETING, 
  INITIAL_OPTIONS, 
  getBotResponse,
  FALLBACK_MESSAGE
} from '../../constants/chatbot';

const isAffirmative = (text: string) => {
  const normalized = text.toLowerCase().trim();
  const affirmatives = ['yes', 'yeah', 'sure', 'ok', 'okay', 'please', 'yep', 'y', 'yup'];
  return affirmatives.includes(normalized);
};
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    INITIAL_GREETING,
    INITIAL_OPTIONS
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollPosRef = useRef(0);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Only scroll to bottom when new messages arrive
    if (isOpen && messages.length > 2) {
      scrollToBottom();
    }
  }, [messages]);

  useEffect(() => {
    // Restore scroll position when opening
    if (isOpen) {
      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop = scrollPosRef.current;
        }
      }, 0);
    }
  }, [isOpen]);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      scrollPosRef.current = scrollContainerRef.current.scrollTop;
    }
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Check if the previous message was the fallback message and the user is answering affirmatively
    const lastBotMsg = messages.filter(m => m.type === 'bot').pop();
    const isAnsweringFallback = lastBotMsg?.text === FALLBACK_MESSAGE && isAffirmative(text);

    // Add user message
    const newUserMsg: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      text: text.trim()
    };
    
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate network delay for bot response
    setTimeout(() => {
      let responseText = getBotResponse(text);

      if (isAnsweringFallback) {
        responseText = "Taking you to the Contact Us section now!";
        // Trigger navigation
        const contactSection = document.getElementById('contact-us');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        // Close the chat after a short delay so they can see the form
        setTimeout(() => setIsOpen(false), 2000);
      }

      const newBotMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: responseText
      };
      
      setMessages(prev => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 1000); // 1s delay
  };

  const handleOptionClick = (option: string) => {
    handleSendMessage(option);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage(inputValue);
    }
  };

  return (
    <div className="chatbot-wrapper">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="chatbot-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-header-info">
                <div className="chatbot-avatar">
                  <Bot size={20} />
                </div>
                <div className="chatbot-header-text">
                  <h3>Avyro Assistant</h3>
                  <p>
                    <span className="chatbot-status-dot"></span> Online
                  </p>
                </div>
              </div>
              <button 
                className="chatbot-close" 
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              className="chatbot-body"
              ref={scrollContainerRef}
              onScroll={handleScroll}
            >
              {messages.map((msg) => (
                <div key={msg.id} style={{ display: 'flex', flexDirection: 'column' }}>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`chat-message ${msg.type}`}
                  >
                    {msg.text}
                  </motion.div>
                  
                  {msg.isOptions && msg.options && (
                    <motion.div 
                      className="chat-options"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {msg.options.map((opt, idx) => (
                        <button 
                          key={idx}
                          className="chat-option-btn"
                          onClick={() => handleOptionClick(opt)}
                        >
                          {opt}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="chat-message bot"
                  style={{ width: 'fit-content' }}
                >
                  <div className="typing-indicator">
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="chatbot-input-area">
              <div className="chatbot-input-container">
                <input 
                  type="text" 
                  className="chatbot-input"
                  placeholder="Type your question..." 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <button 
                  className="chatbot-send-btn"
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        className="chatbot-trigger"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
        animate={{
          rotate: isOpen ? 90 : 0,
          opacity: isOpen ? 0 : 1,
          scale: isOpen ? 0.8 : 1,
          pointerEvents: isOpen ? 'none' : 'auto'
        }}
        style={{
          position: isOpen ? 'absolute' : 'relative',
        }}
      >
        <MessageSquare size={28} />
      </motion.button>
    </div>
  );
};

export default Chatbot;
