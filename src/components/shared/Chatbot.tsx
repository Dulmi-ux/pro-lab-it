'use client';

import { useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { MessageSquare, Bot, User, X } from 'lucide-react';
import { Input } from '../ui/input';
import { ScrollArea } from '../ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { AnimatePresence, motion } from 'framer-motion';

const staticFAQ = {
  'shipping': "We offer worldwide shipping. Standard shipping takes 5-7 business days, and express shipping takes 2-3 business days.",
  'return policy': "You can return any product within 30 days of purchase for a full refund. Please visit our returns page for more details.",
  'warranty': "All our products come with a 2-year manufacturer warranty covering hardware defects.",
  'track order': "To track your order, please visit the order tracking page and enter your order ID.",
  'contact support': "You can contact our support team via the 'Contact Us' page or by emailing support@prolab.com.",
};

type Message = {
    sender: 'user' | 'bot';
    text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: "Hello! How can I help you today? You can ask about shipping, returns, warranty, etc." }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);

    const lowerInput = input.toLowerCase();
    let botResponse = "I'm sorry, I don't understand that question. Please try asking something else, like 'What is your return policy?'";

    for (const key in staticFAQ) {
        if (lowerInput.includes(key)) {
            botResponse = staticFAQ[key as keyof typeof staticFAQ];
            break;
        }
    }
    
    setTimeout(() => {
        setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }, 500);

    setInput('');
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="primary"
          className="fixed bottom-4 right-4 h-16 w-16 rounded-full shadow-lg flex items-center justify-center"
          aria-label="Open Chatbot"
        >
          <AnimatePresence>
            {isOpen ? (
               <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><X className="h-8 w-8" /></motion.div>
            ) : (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><MessageSquare className="h-8 w-8" /></motion.div>
            )}
          </AnimatePresence>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 md:w-96 mr-4" sideOffset={20}>
        <div className="flex flex-col h-[28rem]">
          <div className="flex items-center p-2 border-b">
            <Bot className="h-8 w-8 text-primary mr-2" />
            <div>
              <h3 className="font-bold">Prolab Assistant</h3>
              <p className="text-xs text-muted-foreground">At your service</p>
            </div>
          </div>
          <ScrollArea className="flex-grow p-4">
             <div className="space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                        {msg.sender === 'bot' && <Avatar className="h-8 w-8"><AvatarFallback><Bot size={20}/></AvatarFallback></Avatar>}
                        <div className={`rounded-lg px-3 py-2 max-w-[80%] ${msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                            {msg.text}
                        </div>
                        {msg.sender === 'user' && <Avatar className="h-8 w-8"><AvatarFallback><User size={20}/></AvatarFallback></Avatar>}
                    </div>
                ))}
            </div>
          </ScrollArea>
          <div className="p-2 border-t">
            <div className="flex gap-2">
                <Input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask a question..."
                />
                <Button onClick={handleSend}>Send</Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
