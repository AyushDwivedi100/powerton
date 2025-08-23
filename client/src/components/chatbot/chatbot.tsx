import React, { useState, useEffect, useRef } from 'react';
import { X, MessageCircle, Send, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FRONTEND_CONFIG } from '@/lib/frontend-config';
import { COMPANY_INFO } from '@/data/constants';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const KEYWORDS_RESPONSES: Record<string, string> = {
  // Services related
  'services': 'We offer comprehensive industrial automation services including installation, maintenance, calibration, consultation, custom solutions, supply chain management, technical support, and solar EPC services.',
  'installation': 'Our installation and commissioning services include equipment installation, system integration, performance testing, and compliance certification.',
  'maintenance': 'We provide preventive maintenance, emergency repairs, component replacement, and system upgrades for all electrical and automation systems.',
  'calibration': 'Our calibration services ensure instrument accuracy with precision calibration, performance testing, compliance verification, and accuracy certification.',
  'solar': 'We provide complete solar EPC services including system design, project management, installation, and grid connection for solar power projects.',
  
  // Products related  
  'products': 'We supply instrumentation components, electrical components, measurement instruments, solar products, automation systems, safety devices, pumps, industrial tools, and BLDC motors.',
  'instrumentation': 'Our instrumentation components include sensors, transmitters, controllers, switches, valves, analyzers, and signal conditioners.',
  'electrical': 'We provide cables, connectors, circuit breakers, power supplies, enclosures, and heating elements.',
  'measurement': 'Our measurement instruments include multimeters, oscilloscopes, spectrum analyzers, power quality analyzers, and calibration equipment.',
  'automation': 'We offer PLCs, SCADA systems, DCS, and HMI solutions for industrial automation.',
  'safety': 'Our safety products include surge protectors, grounding systems, safety relays, and intrinsically safe equipment.',
  
  // Company related
  'company': 'Powerton Engineering Pvt. Ltd. is your trusted partner in industrial automation and electrical engineering, serving clients across India.',
  'contact': 'You can reach us at +91-94627-71662 or email us at info.powerton@gmail.com. We are located in Noida, Uttar Pradesh.',
  'location': 'We are located at 2nd Floor, F-25, F Block, Sector 6, Noida, Uttar Pradesh - 201301. Nearest metro: Sector 15.',
  'hours': 'Monday - Saturday: 9:00 AM - 6:00 PM. Sunday: Emergency Support Only',
  
  // General
  'price': 'For pricing information, please request a quote through our quote form or contact our sales team directly.',
  'quote': 'For pricing information, please request a quote through our quote form or contact our sales team directly.',
  'support': 'We provide 24/7 technical support with remote assistance, on-site support, and emergency response services.',
  'training': 'We offer comprehensive training programs for electrical systems, automation, and industrial engineering solutions.'
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chatbot opens for the first time
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content: FRONTEND_CONFIG.chatbot.welcomeMessage,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const getResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Check for keyword matches
    for (const [keywords, response] of Object.entries(KEYWORDS_RESPONSES)) {
      const keywordList = keywords.split(' | ');
      if (keywordList.some(keyword => input.includes(keyword))) {
        return response;
      }
    }

    // Fallback response
    return FRONTEND_CONFIG.chatbot.fallbackMessage;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getResponse(inputMessage),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot toggle button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Open chatbot"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Chatbot window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 sm:w-96 h-96 chatbot-container">
          <Card className="h-full flex flex-col shadow-2xl border-2 border-primary/20">
            <CardHeader className="bg-primary text-white rounded-t-lg py-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Powerton Assistant
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1 p-0 flex flex-col">
              {/* Messages area */}
              <div className="flex-1 overflow-y-auto p-4 chatbot-messages space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 ${
                        message.type === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-lg px-3 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Quick actions */}
              <div className="border-t border-border p-2">
                <div className="flex gap-1 mb-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs"
                    onClick={() => setInputMessage('What services do you offer?')}
                  >
                    Services
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs"
                    onClick={() => setInputMessage('Show me your products')}
                  >
                    Products
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs"
                    onClick={() => setInputMessage('Contact information')}
                  >
                    Contact
                  </Button>
                </div>
              </div>

              {/* Input area */}
              <div className="border-t border-border p-3">
                <div className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    disabled={!inputMessage.trim() || isTyping}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex justify-center gap-4 mt-2 text-xs text-muted-foreground">
                  <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-1 hover:text-primary">
                    <Phone className="h-3 w-3" />
                    Call
                  </a>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-1 hover:text-primary">
                    <Mail className="h-3 w-3" />
                    Email
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}