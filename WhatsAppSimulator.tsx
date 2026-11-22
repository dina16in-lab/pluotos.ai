import React, { useState } from 'react';
import { MessageSquare, Send, CheckCheck, Bot, Sparkles, User, RefreshCw } from 'lucide-react';

export const WhatsAppSimulator: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'user',
      text: 'Hi, I need an emergency appointment for severe toothache tomorrow morning.',
      time: '10:14 PM'
    },
    {
      id: 2,
      sender: 'bot',
      text: 'Hello! I am Dr. Reynolds\' automated clinic assistant at Apex Smiles. I am sorry to hear you are in pain. Let me help you right away.',
      time: '10:14 PM'
    },
    {
      id: 3,
      sender: 'bot',
      text: 'I checked our live doctor schedule. We have an Emergency Slot open tomorrow with Dr. Reynolds at 10:30 AM. Would that time work for you?',
      time: '10:14 PM'
    }
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputVal;
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botReply = {
        id: Date.now() + 1,
        sender: 'bot',
        text: 'Awesome! Your 10:30 AM appointment is now locked in our PMS. I just emailed your intake paperwork and dispatched a calendar invite. See you tomorrow!',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botReply]);
    }, 1200);
  };

  const resetChat = () => {
    setMessages([
      {
        id: 1,
        sender: 'user',
        text: 'Hi, I saw your Instagram Reel about custom AI workflow automations!',
        time: '10:14 PM'
      },
      {
        id: 2,
        sender: 'bot',
        text: 'Hey there! Welcome to PLUOTOS AI. We help businesses eliminate manual busywork with n8n and WhatsApp.',
        time: '10:14 PM'
      },
      {
        id: 3,
        sender: 'bot',
        text: 'Which industry does your business operate in? (Creators, Healthcare/Dental, Real Estate, or Agency?)',
        time: '10:14 PM'
      }
    ]);
  };

  return (
    <section className="py-24 bg-[#FBFBF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Why WhatsApp Automation Matters */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEF9] border border-[#9F7ACB]/30 text-xs font-semibold text-[#9F7ACB] mb-4">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Official Meta Cloud API</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17151B] tracking-tight mb-5">
              Turn WhatsApp Into A{' '}
              <span className="text-[#9F7ACB]">24/7 Revenue Channel.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#68636D] leading-relaxed mb-6">
              Customers don't want to fill out static 10-field website forms or wait 4 hours for an email reply. WhatsApp delivers 98% open rates and instant conversational conversions.
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-2xl bg-white border border-[#E8E4EE] flex items-start gap-3 shadow-subtle">
                <div className="w-8 h-8 rounded-xl bg-[#F3EEF9] text-[#9F7ACB] flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#17151B]">Intelligent Conversational Triage</h4>
                  <p className="text-xs text-[#68636D] mt-0.5">
                    Understands natural language, typos, audio voice notes, and multilingual inquiries effortlessly.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8E4EE] flex items-start gap-3 shadow-subtle">
                <div className="w-8 h-8 rounded-xl bg-[#F3EEF9] text-[#9F7ACB] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#17151B]">Instant Calendar & Database Sync</h4>
                  <p className="text-xs text-[#68636D] mt-0.5">
                    Direct integration with Google Calendar, Outlook, Dental PMS, HubSpot, and custom SQL databases.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={resetChat}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F6F4F8] border border-[#E8E4EE] text-xs font-semibold text-[#17151B] hover:bg-[#F3EEF9] transition"
              >
                <RefreshCw className="w-3.5 h-3.5 text-[#9F7ACB]" />
                <span>Reset Demo Chat</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Phone Screen WhatsApp Simulator */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-sm rounded-[36px] bg-[#17151B] p-3 shadow-elevated border-4 border-[#E8E4EE]">
              {/* Phone Inner Screen */}
              <div className="rounded-[28px] bg-[#EFEAE2] overflow-hidden flex flex-col h-[520px]">
                {/* WhatsApp Chat Header */}
                <div className="bg-[#9F7ACB] text-white p-3.5 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs">
                      P
                    </div>
                    <div>
                      <div className="text-xs font-bold leading-tight">PLUOTOS AI Assistant</div>
                      <div className="text-[10px] text-white/80 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                        <span>Online (24/7 Verified)</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-mono">
                    Official API
                  </span>
                </div>

                {/* Message Bubble Thread */}
                <div className="flex-1 p-3.5 overflow-y-auto space-y-2.5 text-xs">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[82%] rounded-2xl p-2.5 shadow-xs ${
                          msg.sender === 'user'
                            ? 'bg-[#E1FFC7] text-[#17151B] rounded-tr-none'
                            : 'bg-white text-[#17151B] rounded-tl-none'
                        }`}
                      >
                        <p className="leading-snug">{msg.text}</p>
                        <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-[#68636D]">
                          <span>{msg.time}</span>
                          {msg.sender === 'user' && (
                            <CheckCheck className="w-3 h-3 text-sky-500" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white rounded-2xl rounded-tl-none p-2.5 shadow-xs flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9F7ACB] animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9F7ACB] animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9F7ACB] animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Reply Suggestions */}
                <div className="p-2 bg-white/80 border-t border-[#E8E4EE] flex gap-1.5 overflow-x-auto">
                  <button
                    onClick={() => handleSend('Yes, please book 10:30 AM!')}
                    className="shrink-0 px-2.5 py-1 rounded-full bg-[#F3EEF9] border border-[#9F7ACB]/30 text-[10px] text-[#9F7ACB] font-semibold hover:bg-[#9F7ACB] hover:text-white transition"
                  >
                    "Yes, please book 10:30 AM!"
                  </button>
                  <button
                    onClick={() => handleSend('Do you take my insurance?')}
                    className="shrink-0 px-2.5 py-1 rounded-full bg-[#F3EEF9] border border-[#9F7ACB]/30 text-[10px] text-[#9F7ACB] font-semibold hover:bg-[#9F7ACB] hover:text-white transition"
                  >
                    "Do you take insurance?"
                  </button>
                </div>

                {/* Input Bar */}
                <div className="p-2.5 bg-[#F6F4F8] border-t border-[#E8E4EE] flex items-center gap-2">
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type a simulated message..."
                    className="flex-1 px-3 py-1.5 rounded-full border border-[#E8E4EE] text-xs focus:outline-none focus:border-[#9F7ACB] bg-white"
                  />
                  <button
                    onClick={() => handleSend()}
                    className="w-8 h-8 rounded-full bg-[#9F7ACB] text-white flex items-center justify-center hover:bg-[#8F6AB9] transition shrink-0"
                    aria-label="Send"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
