import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  User,
  X,
} from 'lucide-react';
import { format } from 'date-fns';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export const LiveChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

    // Enhanced constant replies with comprehensive information
  const getConstantReply = (userInput: string): string | null => {
    const lowerInput = userInput.toLowerCase();

    // Developer/Creator information
    if (
      lowerInput.includes('developer') ||
      lowerInput.includes('creator') ||
      lowerInput.includes('who made you') ||
      lowerInput.includes('your creator') ||
      lowerInput.includes('zisan') ||
      lowerInput.includes('ridoan') ||
      lowerInput.includes('who are you') ||
      lowerInput.includes('about')
    ) {
      return `I was created by Md Ridoan Mahmud Zisan, a passionate web developer, Islamic researcher, and student from Bogura, Bangladesh. 
      \n\n👤 Personal Information:
      \n- 📫 Email: ridoan.zisan@gmail.com
      \n- 📞 Phone: +8801712525910
      \n- 📍 Location: Bogura, Bangladesh
      \n- 🔗 LinkedIn: https://linkedin.com/in/ridoan2007
      \n- 🩸 Blood Group: B+
      \n- 🎂 Date of Birth: December 31, 2007 (Age: 16)
      \n- 🌐 Religion: Islam
      \n- 🏠 Family: Father (Md Rokibul Hasan Shekh), Mother (Mst. Zosna Khatun), 1 Sister
      \n\n🎓 Current Status: HSC Student at Karatoa Multimedia School and College
      \n💻 Skills: Web Development, React.js, Firebase, AI/ML, Islamic Studies
      \n🩸 Volunteer: BOBDO (Blood Donation Organization)`;
    }

    // Education information
    if (
      lowerInput.includes('education') ||
      lowerInput.includes('study') ||
      lowerInput.includes('school') ||
      lowerInput.includes('college')
    ) {
      return `Md Ridoan Mahmud Zisan's Education:
      \n🎓 Higher Secondary Certificate (HSC)
      \n- Institution: Karatoa Multimedia School and College
      \n- Year: 2023-2024
      \n- GPA: 5.00/5.00 (Science)
      \n- Major: Higher Mathematics
      \n\n🎓 Secondary School Certificate (SSC)
      \n- Institution: Dhunat Govt N.U. Pilot Model High School
      \n- Year: 2021-2022
      \n- GPA: 5.00/5.00 (Science)
      \n- Group: Science
      \n- Major: Higher Mathematics`;
    }

    // Skills information
    if (
      lowerInput.includes('skill') ||
      lowerInput.includes('expertise') ||
      lowerInput.includes('what can you do') ||
      lowerInput.includes('ability')
    ) {
      return `Md Ridoan Mahmud Zisan's Skills:
      \n💻 Technical Skills:
      \n- Web Development (HTML, CSS, JavaScript)
      \n- React.js, Firebase
      \n- AI & Machine Learning basics
      \n\n🗣️ Language Skills:
      \n- Bengali (Fluent)
      \n- English (Professional)
      \n\n🏆 Core Professional Skills:
      \n- MS Office Suite
      \n- Email Communication
      \n- Team Collaboration
      \n- Time Management
      \n- Problem Solving
      \n- Professional Ethics
      \n\n🎨 Additional Skills:
      \n- Canva/Photoshop
      \n- Social Media Management
      \n- Customer Service
      \n- Basic Troubleshooting`;
    }

    // Projects information
    if (
      lowerInput.includes('project') ||
      lowerInput.includes('work') ||
      lowerInput.includes('build') ||
      lowerInput.includes('developed') ||
      lowerInput.includes('portfolio')
    ) {
      return `Md Ridoan Mahmud Zisan's Notable Projects:
      \n🩸 BOBDO (Bogura Online Blood Donation Organization)
      \n- React + Firebase blood management system
      \n- Real-time donor database serving 68k+ members
      \n- Reduced emergency response time by 40%
      \n- Integrated donation history tracking
      \n- Link: https://bobdo.netlify.app
      \n\n📐 UniConverter
      \n- Comprehensive unit converter (50+ categories)
      \n- Progressive Web App (PWA) functionality
      \n- Offline capability & responsive design
      \n- Link: https://uniconverter.netlify.app
      \n\n💻 Personal Portfolio Website
      \n- Multi-language support (English/Bengali)
      \n- Research & Blog sections
      \n- PWA-enabled with modern design
      \n- Features: Contact forms, certificates display
      \n\n🔬 Research Work:
      \n- "The Role of Prayer in Islamic Spirituality"
      \n- "The Concept of Tawhid in Islamic Theology"
      \n- Academic papers on Islamic studies`;
    }

    // Certificates information
    if (
      lowerInput.includes('certificate') ||
      lowerInput.includes('certification') ||
      lowerInput.includes('achievement') ||
      lowerInput.includes('award') ||
      lowerInput.includes('olympiad')
    ) {
      return `Md Ridoan Mahmud Zisan's Certifications & Achievements:
      \n🏅 Academic Olympiads & Competitions:
      \n- Zero Olympiad (UN SDGs & Climate Action) - Semi-Final
      \n- Bangladesh AI Olympiad - Semi-Final 
      \n- ICT Olympiad Bangladesh - Semi-Final
      \n- Mathematics Olympiad - Selective Round
      \n- Various programming contests participant
      
      \n📜 Professional Certifications:
      \n- AI, Machine Learning & Cyber Security (Simplilearn)
      \n- Complete Web Development Course (Programming Hero)
      \n- Digital Marketing Certification (HubSpot Academy)
      \n- Corporate Skills Development (10 Minute School)
      \n- Firebase & React.js Development
      \n- Progressive Web App (PWA) Development
      \n\n🎓 Academic Excellence:
      \n- HSC GPA: 5.00/5.00 (Science - Higher Mathematics)
      \n- SSC GPA: 5.00/5.00 (Science - Higher Mathematics)
      \n- Consistent top performer in academics`;
    }

    // Contact information
    if (
      lowerInput.includes('contact') ||
      lowerInput.includes('email') ||
      lowerInput.includes('phone') ||
      lowerInput.includes('address') ||
      lowerInput.includes('reach') ||
      lowerInput.includes('connect')
    ) {
      return `You can contact Md Ridoan Mahmud Zisan through:
      \n📧 Email: ridoan.zisan@gmail.com
      \n📞 Phone: +8801712525910
      \n📍 Location: Bogura, Bangladesh
      \n🔗 LinkedIn: https://linkedin.com/in/ridoan2007
      \n\nYou can also use the email button in the bottom right corner to send him a message directly.`;
    }

    // Volunteer work
    if (
      lowerInput.includes('volunteer') ||
      lowerInput.includes('blood') ||
      lowerInput.includes('donation') ||
      lowerInput.includes('bobdo')
    ) {
      return `Md Ridoan Mahmud Zisan's Volunteer Work:
      \n🩸 Bogura Online Blood Donation Organization
      \n- Role: Volunteer & Developer (2023-Present)
      \n- Responsibilities:
      \n  • Developed blood donor platform serving 68k+ members
      \n  • Implemented digital system reducing response time by 40%
      \n  • First aid and CPR training
      \n  • Organizing donation campaigns
      \n\n🔗 Blood Management App: https://bobdo.netlify.app`;
    }

    // Family information
    if (
      lowerInput.includes('family') ||
      lowerInput.includes('father') ||
      lowerInput.includes('mother') ||
      lowerInput.includes('parent') ||
      lowerInput.includes('sibling')
    ) {
      return `Md Ridoan Mahmud Zisan's Family:
      \n👨‍👩‍👧‍👦 Family Members:
      \n- Father: Md Rokibul Hasan Shekh
      \n- Mother: Mst. Zosna Khatun
      \n- Siblings: 1 Younger Sister`;
    }

    // Research & Academic work
    if (
      lowerInput.includes('research') ||
      lowerInput.includes('academic') ||
      lowerInput.includes('paper') ||
      lowerInput.includes('study') ||
      lowerInput.includes('islamic') ||
      lowerInput.includes('religion')
    ) {
      return `Md Ridoan Mahmud Zisan's Research & Academic Work:
      \n📚 Current Research Areas:
      \n- Islamic Spirituality & Theology
      \n- Islamic Prayer (Salah) Studies
      \n- Tawhid (Islamic Monotheism)
      \n- Contemporary Islamic Thought
      
      \n📝 Published Research Papers:
      \n1. "The Role of Prayer in Islamic Spirituality"
      \n   - Explores spiritual dimensions of Salah
      \n   - Analysis of psychological & spiritual benefits
      \n   - Community aspects of congregational prayer
      
      \n2. "The Concept of Tawhid in Islamic Theology"
      \n   - In-depth theological analysis
      \n   - Three dimensions: Rububiyyah, Uluhiyyah, Asma wa Sifat
      \n   - Practical implications in Muslim life
      
      \n🎯 Research Focus:
      \n- Bridging classical Islamic knowledge with modern understanding
      \n- Practical application of Islamic principles
      \n- Contemporary relevance of traditional practices`;
    }

    // Blog & Poetry
    if (
      lowerInput.includes('blog') ||
      lowerInput.includes('poetry') ||
      lowerInput.includes('poem') ||
      lowerInput.includes('writing') ||
      lowerInput.includes('literature')
    ) {
      return `Md Ridoan Mahmud Zisan's Creative Writing:
      \n✍️ Blog & Poetry:
      \n- Bilingual content (English & Bengali)
      \n- Inspirational poetry and life reflections
      \n- Thought-provoking social commentary
      \n- Personal experiences and insights
      
      \n📖 Writing Themes:
      \n- Life philosophy and motivation
      \n- Social awareness and responsibility
      \n- Spiritual and personal growth
      \n- Youth perspectives on contemporary issues
      
      \n🌟 Featured Works:
      \n- Various motivational poems
      \n- Social awareness content
      \n- Personal journey reflections
      \n- Educational and inspirational posts`;
    }

    // Basic greetings
    if (
      lowerInput.includes('hello') ||
      lowerInput.includes('hi') ||
      lowerInput.includes('hey') ||
      lowerInput.includes('assalam') ||
      lowerInput.includes('salam')
    ) {
      return "👻 Assalamu Alaikum! Hello there! I'm Ghost AI, here to tell you everything about Md Ridoan Mahmud Zisan. How can I help you today?\n\n🔍 You can ask about:\n- Personal information & background\n- Education & academic achievements\n- Technical skills & expertise\n- Projects & development work\n- Research & Islamic studies\n- Blog & creative writing\n- Certifications & awards\n- Volunteer work & community service\n- Contact information\n- Family & personal life\n- Or anything else you're curious about!";
    }

    // Thank you responses
    if (lowerInput.includes('thank') || lowerInput.includes('thanks')) {
      return "You're welcome! Let me know if you need any more information about Md Ridoan Mahmud Zisan.";
    }

    // Age information
    if (
      lowerInput.includes('age') ||
      lowerInput.includes('old') ||
      lowerInput.includes('birth')
    ) {
      const birthDate = new Date('2007-12-31');
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      return `Md Ridoan Mahmud Zisan is ${age} years old (born December 31, 2007).`;
    }

    // Blood group
    if (lowerInput.includes('blood') && lowerInput.includes('group')) {
      return "Md Ridoan Mahmud Zisan's blood group is B+ (B positive).";
    }

    return null;
  };

  useEffect(() => {
    if (isChatOpen) {
      inputRef.current?.focus();
    }
  }, [isChatOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        // Don't close chat when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const callAPI = async (prompt: string) => {
    setIsLoading(true);

    // Check for constant replies first
    const constantReply = getConstantReply(prompt);
    if (constantReply) {
      return constantReply;
    }

    try {
      const apiUrl =
        'https://backend.buildpicoapps.com/aero/run/llm-api?pk=v1-Z0FBQUFBQm5HUEtMSjJkakVjcF9IQ0M0VFhRQ0FmSnNDSHNYTlJSblE0UXo1Q3RBcjFPcl9YYy1OZUhteDZWekxHdWRLM1M1alNZTkJMWEhNOWd4S1NPSDBTWC12M0U2UGc9PQ==';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      return data.status === 'success'
        ? data.text
        : 'Sorry, I could not process your request.';
    } catch (error) {
      console.error('API Error:', error);
      return 'Sorry, there was an error processing your request.';
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const response = await callAPI(userMessage.content);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          'Sorry, I could not connect to the server. Please try again later.',
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  // Realistic ghost icon component with animation
  const GhostIcon = ({ size = 24, className = '', isFloating = true }) => (
    <svg 
      className={`ghost-icon ${className} ${isFloating ? 'animate-float' : ''}`}
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
    >
      <path 
        d="M12 2C6.48 2 2 6.48 2 12v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6c0-5.52-4.48-10-10-10zm0 18H4v-6c0-4.41 3.59-8 8-8s8 3.59 8 8v6h-8zm-4-9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm8 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-4-5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" 
        fill="currentColor"
      />
      <circle cx="9" cy="13" r="1.5" fill="currentColor" />
      <circle cx="15" cy="13" r="1.5" fill="currentColor" />
      <path 
        d="M10 17h4v1.5c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5V17z" 
        fill="currentColor"
      />
    </svg>
  );

  return (
    <div
      className="fixed bottom-6 right-6 flex flex-col items-end gap-2 z-[9999]"
      ref={containerRef}
    >
      {/* Main Ghost Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="bg-purple-700 text-white p-4 rounded-full shadow-lg hover:bg-purple-800 transition-colors duration-300"
        title="Open Ghost AI"
        style={{
          boxShadow: '0 0 15px rgba(124, 58, 237, 0.7)'
        }}
      >
        <GhostIcon size={24} isFloating={false} />
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-5 right-6 w-100 max-w-[calc(101vw-3rem)] bg-gray-900 rounded-lg shadow-xl z-[9999] flex flex-col max-h-[440px] border border-purple-500">
          {/* Chat Header */}
          <div className="bg-purple-800 text-white p-3 rounded-t-lg flex justify-between items-center border-b border-purple-500">
            <div className="flex items-center gap-3">
              <GhostIcon className="w-6 h-6" isFloating={false} />
              <h2 className="font-bold text-lg">Ghost AI</h2>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[400px] bg-gray-800">
            {messages.length === 0 && (
              <div className="text-center text-purple-100 mt-8">
                <div className="mb-4">
                  <GhostIcon className="w-16 h-16 mx-auto text-purple-300" />
                </div>
                <p className="text-xl font-medium">Boo! 👻</p>
                <p className="text-purple-200 mt-2">
                  I'm Ghost AI. Ask me anything about Md Ridoan Mahmud Zisan
                </p>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.role === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center ${
                    message.role === 'user' 
                      ? 'bg-blue-500' 
                      : 'bg-purple-600 shadow-[0_0_8px_rgba(147,51,234,0.6)]'
                  }`}
                >
                  {message.role === 'user' ? (
                    <User className="w-5 h-5 text-white" />
                  ) : (
                    <GhostIcon className="w-5 h-5 text-white" isFloating={false} />
                  )}
                </div>
                <div
                  className={`rounded-xl px-4 py-3 max-w-[80%] ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-purple-700 text-purple-50 shadow-[0_0_8px_rgba(147,51,234,0.3)]'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">
                    {message.content}
                  </p>
                  <p className="text-xs mt-2 opacity-70 text-right">
                    {format(message.timestamp, 'h:mm a')}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center shadow-[0_0_8px_rgba(147,51,234,0.6)]">
                  <GhostIcon className="w-5 h-5 text-white" isFloating={false} />
                </div>
                <div className="bg-purple-700 rounded-xl px-4 py-3 shadow-[0_0_8px_rgba(147,51,234,0.3)]">
                  <div className="flex gap-2">
                    <div className="animate-bounce">
                      <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                    </div>
                    <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>
                      <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                    </div>
                    <div className="animate-bounce" style={{ animationDelay: '0.4s' }}>
                      <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <div className="border-t border-purple-700 p-3 bg-gray-900 rounded-b-lg">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask the ghost..."
                disabled={isLoading}
                className="flex-1 rounded-lg bg-gray-800 text-white border border-purple-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed placeholder-purple-300"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-purple-600 text-white rounded-lg px-4 py-2 hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-[0_0_8px_rgba(147,51,234,0.5)]"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Add CSS animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }
        .animate-bounce {
          animation: bounce 1.5s infinite;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
};

export default LiveChat;
