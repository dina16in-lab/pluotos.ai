import React from 'react';
import { ArrowRight, CheckCircle2, Search, Workflow, Link, PlayCircle, Sparkles, Layers } from 'lucide-react';
import { PageId } from '../types/navigation';
import { WorkflowAnimationCanvas } from '../components/visuals/WorkflowAnimationCanvas';

interface HowItWorksPageProps {
  onNavigate: (page: PageId) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
  const steps = [
    {
      step: 'Step 1',
      title: 'Understand Your Business',
      desc: 'We understand your business operations, challenges and requirements.',
      details: 'We begin with a focused discovery session to map your daily operations, software tools, and communication flow.',
      icon: Search,
    },
    {
      step: 'Step 2',
      title: 'Identify Opportunities',
      desc: 'We identify repetitive tasks and processes that can be automated.',
      details: 'Our automation specialists pinpoint high-friction bottlenecks where staff spend hours doing manual data entry or repetitive replies.',
      icon: Layers,
    },
    {
      step: 'Step 3',
      title: 'Build Your Workflow',
      desc: 'We design and develop a customized automation using suitable tools such as n8n.',
      details: 'We construct visual, fault-tolerant logic with custom error-handling branches, automated logging, and data validation.',
      icon: Workflow,
    },
    {
      step: 'Step 4',
      title: 'Connect Your Applications',
      desc: 'We integrate the required applications and communication platforms.',
      details: 'We bridge your CRMs, databases, email services, and WhatsApp accounts via official REST APIs and secure webhooks.',
      icon: Link,
    },
    {
      step: 'Step 5',
      title: 'Test and Deliver',
      desc: 'We test the workflow and deliver the automation according to the agreed requirements.',
      details: 'We rigorously stress-test the pipeline with live edge cases, train your team on monitoring, and deliver full ownership.',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* Header */}
      <section className="pt-6 sm:pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7FDE6] border border-[#BDF208]/50 text-xs font-bold text-[#17151B] mb-5 shadow-subtle">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Proven Automation Engineering Lifecycle</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#17151B] tracking-tight mb-6">
          How It <span className="bg-[#BDF208] px-2 py-0.5 rounded-xl">Works.</span>
        </h1>
        <p className="text-base sm:text-xl text-[#68636D] max-w-2xl mx-auto leading-relaxed">
          A structured, 5-step automation development methodology designed to transition your operations from manual chaos to automated efficiency.
        </p>
      </section>

      {/* 5 Development Steps */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="card-vignette-lime rounded-3xl p-6 sm:p-8 shadow-subtle hover:scale-[1.01] transition-all flex flex-col sm:flex-row items-start gap-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#F7FDE6] text-[#17151B] flex items-center justify-center shrink-0 border border-[#BDF208]/50">
                  <Icon className="w-7 h-7" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#17151B] bg-[#BDF208] px-2 py-0.5 rounded">
                      {s.step}
                    </span>
                    <h3 className="text-xl font-bold text-[#17151B]">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-sm font-semibold text-[#17151B] mb-2 leading-relaxed">
                    "{s.desc}"
                  </p>

                  <p className="text-xs text-[#68636D] leading-relaxed">
                    {s.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Visual Application Connection Diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#17151B] text-white rounded-3xl p-8 sm:p-14 border border-neutral-800">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#17151B] bg-[#BDF208] px-2.5 py-1 rounded-md inline-block mb-3">
              Application Communication
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              All Your Tools. One Automated Nervous System.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400">
              See how different applications communicate through an automation system without any manual human intervention.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <WorkflowAnimationCanvas scenario="email-to-whatsapp" />
            <WorkflowAnimationCanvas scenario="missed-call-to-whatsapp" />
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-xl bg-[#BDF208] text-[#17151B] text-sm font-extrabold hover:bg-[#AEE200] shadow-lime-glow transition-all"
            >
              Start Step 1: Tell Us About Your Business
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
