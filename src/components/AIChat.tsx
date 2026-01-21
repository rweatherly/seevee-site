import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { profile } from '@/data/profile';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIChatProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const suggestedQuestions = [
  "What are Rob's key strengths?",
  "What experience does Rob have with cloud migrations?",
  "How does Rob approach DevOps and automation?",
  "Is Rob a good fit for a technical leadership role?",
];

export default function AIChat({ open, onOpenChange }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  // Demo response function - can be replaced with real AI API call
  const getResponse = async (question: string): Promise<string> => {
    // Check for matching demo response
    const lowerQuestion = question.toLowerCase();

    for (const demo of profile.demoResponses) {
      const keywords = demo.question.toLowerCase().split(' ');
      const matchCount = keywords.filter(keyword =>
        keyword.length > 3 && lowerQuestion.includes(keyword)
      ).length;

      if (matchCount >= 2) {
        return demo.answer;
      }
    }

    // Generic response for unmatched questions
    return `Thanks for your question about "${question}". This is a demo version of the AI chat feature. In the full version, I would provide detailed responses about Rob's experience, skills, and background based on his complete profile data. For now, try asking one of the suggested questions to see example responses.`;
  };

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

      const response = await getResponse(messageText);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I apologize, but I encountered an error. Please try again.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] h-[80vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            Ask About Rob
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            Ask questions about Rob's experience, skills, and background (demo mode)
          </p>
        </DialogHeader>

        <div className="flex-1 flex flex-col overflow-hidden px-6">
          {/* Messages */}
          <ScrollArea className="flex-1 pr-4" ref={scrollRef}>
            <div className="space-y-4 py-4">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <Bot className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-4">
                    Hi! I can answer questions about Rob's professional background.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Try asking:</p>
                    {suggestedQuestions.map((q, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        onClick={() => handleSend(q)}
                      >
                        {q}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.role === 'assistant' && (
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                  {message.role === 'user' && (
                    <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <User className="h-4 w-4" />
                    </div>
                  )}
                </div>
              ))}

              {loading && (
                <div className="flex gap-3 justify-start">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div className="bg-muted rounded-lg px-4 py-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="border-t border-border pt-4 pb-6">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question..."
                aria-label="Ask a question about Rob's background"
                className="flex-1 bg-secondary rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={loading}
              />
              <Button
                onClick={() => handleSend()}
                disabled={!input.trim() || loading}
                size="icon"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
