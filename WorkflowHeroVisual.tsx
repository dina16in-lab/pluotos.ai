import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Database, 
  Calendar,
  Layers,
  Workflow
} from 'lucide-react';

export const WorkflowHeroVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Cycle animation through steps
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      id: 0,
      badge: 'Step 1: Inbound Webhook',
      title: 'Multichannel Lead Trigger',
      desc: 'Incoming WhatsApp query or Instagram DM',
      icon: MessageSquare,
      color: '#9F7ACB',
      status: 'Payload Received (32ms)'
    },
    {
      id: 1,
      badge: 'Step 2: AI Intent Engine',
      title: 'Context & Urgency Parsing',
      desc: 'LLM extracts budget, slot & urgency',
      icon: Sparkles,
      color: '#9F7ACB',
      status: 'Intent: High-Priority Booking'
    },
    {
      id: 2,
      badge: 'Step 3: n8n Smart Orchestration',
      title: 'Automated CRM & Schedule Sync',
      desc: 'Real-time database lookup & slot reservation',
      icon: Database,
      color: '#B99FDF',
      status: 'Calendar Slot Locked'
    },
    {
      id: 3,
      badge: 'Step 4: Real-time Dispatch',
      title: 'WhatsApp Instant Confirmation',
      desc: 'Dispatches custom prep guide & invite',
      icon: CheckCircle2,
      color: '#9F7ACB',
      status: 'Delivery: 100% Success (< 1.2s)'
    }
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Ambient background glow - subtle lavender */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[#9F7ACB]/15 via-[#B99FDF]/10 to-[#F3EEF9] rounded-3xl blur-2xl -z-10" />

      {/* Main interactive workflow terminal canvas */}
      <div className="bg-white/90 backdrop-blur-xl border border-[#E8E4EE] rounded-3xl p-6 sm:p-7 shadow-elevated">
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-5 border-b border-[#E8E4EE]/80">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#E8E4EE]" />
            <span className="w-3 h-3 rounded-full bg-[#E8E4EE]" />
            <span className="w-3 h-3 rounded-full bg-[#9F7ACB]/40" />
            <span className="text-xs font-mono font-medium text-[#68636D] ml-2 flex items-center gap-1.5">
              <Workflow className="w-3.5 h-3.5 text-[#9F7ACB]" />
              pluotos-orchestrator.v2 // live-stream
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9F7ACB] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9F7ACB]"></span>
            </span>
            <span className="text-[11px] font-mono text-[#9F7ACB] font-semibold uppercase tracking-wider">
              Automated
            </span>
          </div>
        </div>

        {/* Visual Pipeline Nodes */}
        <div className="mt-6 space-y-3.5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            const isCompleted = activeStep > idx;

            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`group relative p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#F3EEF9]/60 border-[#9F7ACB] shadow-sm translate-x-1'
                    : isCompleted
                    ? 'bg-white border-[#E8E4EE] opacity-90'
                    : 'bg-white/50 border-[#E8E4EE]/60 opacity-60 hover:opacity-90'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                        isActive
                          ? 'bg-[#9F7ACB] text-white shadow-glow'
                          : isCompleted
                          ? 'bg-[#F3EEF9] text-[#9F7ACB]'
                          : 'bg-[#F6F4F8] text-[#68636D]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-semibold text-[#9F7ACB] tracking-wide uppercase">
                          {step.badge}
                        </span>
                        {isActive && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#9F7ACB]/15 text-[#9F7ACB] font-mono font-medium animate-pulse">
                            Processing
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-[#17151B] mt-0.5">
                        {step.title}
                      </h4>
                      <p className="text-xs text-[#68636D] mt-0.5">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:flex flex-col items-end shrink-0">
                    <span className="text-[11px] font-mono text-[#68636D]">
                      {step.status}
                    </span>
                    <span className="text-[10px] text-[#9F7ACB] font-medium mt-1">
                      {isActive ? 'Step Active' : isCompleted ? 'Completed ✓' : 'Queued'}
                    </span>
                  </div>
                </div>

                {/* Progress highlight bar inside active node */}
                {isActive && (
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#9F7ACB] to-[#B99FDF] rounded-full animate-pulse" />
                )}
              </div>
            );
          })}
        </div>

        {/* Live Payload Stream Footer */}
        <div className="mt-5 pt-4 border-t border-[#E8E4EE] flex items-center justify-between text-xs text-[#68636D] font-mono">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9F7ACB]" />
            <span>Zero manual intervention</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#9F7ACB] font-semibold">Latency: 1.18s</span>
            <span className="text-[#17151B] font-bold">100% Automated</span>
          </div>
        </div>
      </div>
    </div>
  );
};
