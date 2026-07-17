import { useState, useRef, useEffect, useCallback } from 'react'
import { MessageSquare, X, Bot, RotateCcw } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import type { ChatMessage, ChatOption } from '../../constants/chatbot'
import {
  CHAT_ROOT_ID,
  createRootBotMessage,
  getChatNode,
} from '../../constants/chatbot'
import { LANDING_CONTACT_HREF } from '../../constants/navMenu'
import { PRICING_ROUTE } from '../../constants/pricingPage'
import { scrollToHashWhenReady } from '../../lib/scrollToSection'
import './Chatbot.css'

const TYPING_DELAY_MS = 700

function Chatbot() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([createRootBotMessage()])
  const [currentNodeId, setCurrentNodeId] = useState(CHAT_ROOT_ID)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const scrollPosRef = useRef(0)

  const currentNode = getChatNode(currentNodeId)
  const canSelectOptions = !isTyping

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isTyping, isOpen, currentNodeId])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop = scrollPosRef.current
        }
      }, 0)
    }
  }, [isOpen])

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      scrollPosRef.current = scrollContainerRef.current.scrollTop
    }
  }

  const runNodeAction = useCallback(
    (nodeId: string) => {
      const node = getChatNode(nodeId)

      if (node.action === 'contact') {
        navigate(LANDING_CONTACT_HREF)
        scrollToHashWhenReady('#contact-us')
        window.setTimeout(() => setIsOpen(false), 1400)
      }

      if (node.action === 'pricing') {
        navigate(PRICING_ROUTE)
        window.setTimeout(() => setIsOpen(false), 900)
      }
    },
    [navigate],
  )

  const resetConversation = () => {
    setMessages([createRootBotMessage()])
    setCurrentNodeId(CHAT_ROOT_ID)
    setIsTyping(false)
  }

  const handleOptionClick = (option: ChatOption) => {
    if (!canSelectOptions) return

    const nextNode = getChatNode(option.nextNodeId)
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      type: 'user',
      text: option.label,
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    window.setTimeout(() => {
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        type: 'bot',
        text: nextNode.message,
      }

      setMessages((prev) => [...prev, botMessage])
      setCurrentNodeId(nextNode.id)
      setIsTyping(false)
      runNodeAction(nextNode.id)
    }, TYPING_DELAY_MS)
  }

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
            <div className="chatbot-header">
              <div className="chatbot-header-info">
                <div className="chatbot-avatar">
                  <Bot size={20} />
                </div>
                <div className="chatbot-header-text">
                  <h3>Avyro Assistant</h3>
                  <p>
                    <span className="chatbot-status-dot" />
                    Guided help
                  </p>
                </div>
              </div>

              <div className="chatbot-header-actions">
                <button
                  type="button"
                  className="chatbot-reset"
                  onClick={resetConversation}
                  aria-label="Start over"
                  title="Start over"
                >
                  <RotateCcw size={18} />
                </button>
                <button
                  type="button"
                  className="chatbot-close"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div
              className="chatbot-body"
              ref={scrollContainerRef}
              onScroll={handleScroll}
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`chat-message ${msg.type}`}
                >
                  {msg.text}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="chat-message bot chat-message--typing"
                >
                  <div className="typing-indicator">
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                  </div>
                </motion.div>
              )}

              {!isTyping && currentNode.options.length > 0 && (
                <motion.div
                  className="chat-options"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <p className="chat-options__label">Choose a topic</p>
                  {currentNode.options.map((option) => (
                    <button
                      key={`${currentNodeId}-${option.nextNodeId}-${option.label}`}
                      type="button"
                      className="chat-option-btn"
                      onClick={() => handleOptionClick(option)}
                      disabled={!canSelectOptions}
                    >
                      {option.label}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-footer">
              <p>Select a question above to continue the conversation.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        className="chatbot-trigger"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
        animate={{
          rotate: isOpen ? 90 : 0,
          opacity: isOpen ? 0 : 1,
          scale: isOpen ? 0.8 : 1,
          pointerEvents: isOpen ? 'none' : 'auto',
        }}
        style={{
          position: isOpen ? 'absolute' : 'relative',
        }}
      >
        <MessageSquare size={28} />
      </motion.button>
    </div>
  )
}

export default Chatbot
