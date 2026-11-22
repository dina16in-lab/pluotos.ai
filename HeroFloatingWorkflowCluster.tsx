import React, { useState, useEffect } from 'react';
import { Bot, MessageSquare, Check, Sparkles } from 'lucide-react';

export const HeroFloatingWorkflowCluster: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Cycle active block: 0 (n8n) -> 1 (AI Agent) -> 2 (WhatsApp) -> 0
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  const stepStatuses = [
    { label: 'n8n: Webhook Received', latency: '14ms' },
    { label: 'AI: Intent Parsed', latency: '42ms' },
    { label: 'WhatsApp: Lead Dispatched', latency: '100% OK' },
  ];

  return (
    <div className="w-full mb-6">
      <div className="flex flex-wrap items-center gap-3">
        {/* Brand Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7FDE6] border border-[#BDF208]/60 text-xs font-bold text-[#17151B] shadow-subtle shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#BDF208] shadow-lime-badge animate-ping" />
          <span>PLUOTOS AI</span>
          <span className="text-[#68636D] font-normal">•</span>
          <span className="text-[#68636D] font-semibold">Live Pipeline Simulation</span>
        </div>

        {/* Live Working Automation Chain */}
        <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#17151B] border border-neutral-800 shadow-elevated">
          {/* BLOCK 1: n8n */}
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-400 ${
              activeStep === 0
                ? 'bg-white text-[#17151B] shadow-lime-badge scale-102 ring-2 ring-[#BDF208]'
                : 'bg-[#201D25] text-neutral-400 opacity-70'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-md flex items-center justify-center p-0.5 transition-colors ${
                activeStep === 0 ? 'bg-[#17151B] text-[#BDF208]' : 'bg-[#17151B] text-neutral-400'
              }`}
            >
              <svg viewBox="0 0 36 36" fill="none" className="w-3.5 h-3.5">
                <circle cx="9" cy="18" r="3" fill="#BDF208" />
                <circle cx="18" cy="11" r="3" fill="#BDF208" />
                <circle cx="18" cy="25" r="3" fill="#BDF208" />
                <circle cx="27" cy="18" r="3" fill="#BDF208" />
                <path d="M12 18h3M18 14v8M21 11l3 4.5M21 25l3-4.5" stroke="#BDF208" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-[11px] font-extrabold tracking-tight">n8n</span>
          </div>

          {/* Data Wire 1 -> 2 */}
          <div className="flex items-center px-1">
            <span
              className={`h-0.5 w-3.5 transition-all duration-300 ${
                activeStep === 0 ? 'bg-[#BDF208] shadow-lime-glow w-4' : 'bg-neutral-700'
              }`}
            />
            <span
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                activeStep === 0 ? 'bg-[#BDF208] scale-125' : 'bg-neutral-600'
              }`}
            />
          </div>

          {/* BLOCK 2: AI Agent */}
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-400 ${
              activeStep === 1
                ? 'bg-white text-[#17151B] shadow-lime-badge scale-102 ring-2 ring-[#BDF208]'
                : 'bg-[#201D25] text-neutral-400 opacity-70'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-md flex items-center justify-center p-0.5 transition-colors ${
                activeStep === 1 ? 'bg-[#17151B] text-[#BDF208]' : 'bg-[#17151B] text-neutral-400'
              }`}
            >
              <Bot className="w-3.5 h-3.5 text-[#BDF208]" />
            </div>
            <span className="text-[11px] font-extrabold tracking-tight">AI Agent</span>
          </div>

          {/* Data Wire 2 -> 3 */}
          <div className="flex items-center px-1">
            <span
              className={`h-0.5 w-3.5 transition-all duration-300 ${
                activeStep === 1 ? 'bg-[#BDF208] shadow-lime-glow w-4' : 'bg-neutral-700'
              }`}
            />
            <span
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                activeStep === 1 ? 'bg-[#BDF208] scale-125' : 'bg-neutral-600'
              }`}
            />
          </div>

          {/* BLOCK 3: WhatsApp */}
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-400 ${
              activeStep === 2
                ? 'bg-white text-[#17151B] shadow-lime-badge scale-102 ring-2 ring-[#BDF208]'
                : 'bg-[#201D25] text-neutral-400 opacity-70'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-md flex items-center justify-center p-0.5 transition-colors ${
                activeStep === 2 ? 'bg-[#17151B] text-[#BDF208]' : 'bg-[#17151B] text-neutral-400'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#BDF208]" />
            </div>
            <span className="text-[11px] font-extrabold tracking-tight">WhatsApp</span>
          </div>

          {/* Real-time Status Badge */}
          <div className="hidden md:flex items-center gap-1.5 pl-2.5 pr-2 py-0.5 border-l border-neutral-700 text-[10px] font-mono text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BDF208] animate-pulse" />
            <span className="text-white font-semibold">{stepStatuses[activeStep].label}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
