import React, { useState, useEffect } from 'react';
import { Mail, PhoneMissed, Workflow, MessageSquare, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface WorkflowAnimationCanvasProps {
  scenario?: 'email-to-whatsapp' | 'missed-call-to-whatsapp';
  className?: string;
}

export const WorkflowAnimationCanvas: React.FC<WorkflowAnimationCanvasProps> = ({
  scenario = 'email-to-whatsapp',
  className = '',
}) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const scenariosData = {
    'email-to-whatsapp': {
      title: 'Automated Lead Notification Pipeline',
      steps: [
        {
          label: 'Inbound Email Inquiry',
          desc: 'High-value customer message received',
          icon: Mail,
        },
        {
          label: 'n8n Workflow Engine',
          desc: 'Parses urgency, extracts contact & updates CRM',
          icon: Workflow,
        },
        {
          label: 'WhatsApp Dispatcher',
          desc: 'Instant WhatsApp alert sent to team & confirmation to lead',
          icon: MessageSquare,
        },
      ],
    },
    'missed-call-to-whatsapp': {
      title: 'Missed Call Recovery Automation',
      steps: [
        {
          label: 'Missed Phone Call',
          desc: 'Patient calls dental clinic outside clinic hours',
          icon: PhoneMissed,
        },
        {
          label: 'Automation Workflow',
          desc: 'Detects caller ID & triggers conversational flow',
          icon: Workflow,
        },
        {
          label: 'WhatsApp Self-Booking',
          desc: 'Dispatches instant booking link & triage form',
          icon: MessageSquare,
        },
      ],
    },
  };

  const current = scenariosData[scenario];

  return (
    <div className={`p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E7E3] shadow-elevated ${className}`}>
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8E7E3]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#BDF208] shadow-lime-badge animate-pulse" />
          <h4 className="text-xs sm:text-sm font-bold text-[#17151B] uppercase tracking-wider">
            {current.title}
          </h4>
        </div>
        <span className="text-[11px] font-mono text-[#68636D] bg-[#F4F4F0] px-2.5 py-1 rounded-md">
          Continuous Flow
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
        {current.steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === idx;
          const isDone = activeStep > idx;

          return (
            <div
              key={idx}
              className={`relative p-5 rounded-2xl border transition-all duration-300 ${
                isActive
                  ? 'bg-[#F7FDE6] border-[#BDF208] shadow-subtle scale-102'
                  : 'bg-white border-[#E8E7E3] opacity-80'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    isActive
                      ? 'bg-[#BDF208] text-[#17151B] shadow-lime-badge'
                      : 'bg-[#F4F4F0] text-[#68636D]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-[#68636D]">
                  0{idx + 1}
                </span>
              </div>

              <h5 className="text-sm font-bold text-[#17151B] mb-1">
                {step.label}
              </h5>
              <p className="text-xs text-[#68636D] leading-relaxed">
                {step.desc}
              </p>

              {isActive && (
                <div className="mt-3 flex items-center gap-1.5 text-[10px] font-bold text-[#17151B] bg-[#BDF208]/40 px-2 py-0.5 rounded w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#17151B] animate-ping" />
                  <span>Processing...</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-[#E8E7E3] flex items-center justify-between text-xs text-[#68636D]">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#17151B]" />
          <span>Zero manual intervention • Sub-second execution</span>
        </div>
        <span className="font-mono text-[#17151B] font-bold">100% Automated</span>
      </div>
    </div>
  );
};
