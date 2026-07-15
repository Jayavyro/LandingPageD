import { FAQ_ITEMS } from './faq';

export interface ChatMessage {
  id: string;
  type: 'bot' | 'user';
  text: string;
  isOptions?: boolean;
  options?: string[];
}

export const INITIAL_GREETING: ChatMessage = {
  id: 'greeting-1',
  type: 'bot',
  text: "Hi there! 👋 I'm the Avyro Assistant. How can I help you today?",
};

export const INITIAL_OPTIONS: ChatMessage = {
  id: 'greeting-options',
  type: 'bot',
  text: 'You can type your question below, or choose from these common topics:',
  isOptions: true,
  options: [
    'What is Avyro?',
    'Pricing',
    'Who is it for?',
    'Integrations',
  ],
};

export const FALLBACK_MESSAGE = 
  "I'm sorry, I couldn't find a specific answer to that. Would you like to reach out to our team via the Contact Us section for more detailed help?";

// Simple static logic matching user text against FAQ items
export function getBotResponse(userText: string): string {
  const normalizedText = userText.toLowerCase();

  // Keyword mappings to specific FAQ IDs or custom answers
  const keywordMappings: Record<string, string> = {
    'pricing': 'pricing',
    'cost': 'pricing',
    'much is': 'pricing',
    'what is avyro': 'what-is-avyro',
    'who is it for': 'who-is-it-for',
    'target audience': 'who-is-it-for',
    'different': 'how-different',
    'compare': 'how-different',
    'procore': 'how-different',
    'deltek': 'how-different',
    'implement': 'easy-implement',
    'setup': 'easy-implement',
    'integrations': 'integrations',
    'connect': 'integrations',
    'security': 'security',
    'safe': 'security',
    'support': 'support',
    'help': 'support'
  };

  for (const [keyword, faqId] of Object.entries(keywordMappings)) {
    if (normalizedText.includes(keyword)) {
      const faq = FAQ_ITEMS.find((item) => item.id === faqId);
      if (faq) {
        return faq.answer;
      }
    }
  }

  // Fallback if no keywords match
  return FALLBACK_MESSAGE;
}
