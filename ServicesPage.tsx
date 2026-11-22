import React from 'react';
import { Workflow, MessageSquare, Bot, Check, ArrowRight, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';
import { PageId } from '../types/navigation';
import { WorkflowAnimationCanvas } from '../components/visuals/WorkflowAnimationCanvas';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 sm:space-y-32">
      {/* Page Header */}
      <section className="pt-6 sm:pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7FDE6] border border-[#BDF208]/50 text-xs font-bold text-[#17151B] mb-5 shadow-subtle">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Intelligent Automation Services</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#17151B] tracking-tight mb-6">
          Engineered for <span className="bg-[#BDF208] px-2 py-0.5 rounded-xl">Continuous Velocity.</span>
        </h1>
        <p className="text-base sm:text-xl text-[#68636D] max-w-2xl mx-auto leading-relaxed">
          Explore our four core service pillars. From self-hosted visual n8n pipelines to WhatsApp Meta Cloud API automations and custom AI integrations.
        </p>
      </section>

      {/* SERVICE A: n8n Workflow Automation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E8E7E3] p-8 sm:p-14 shadow-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="w-12 h-12 rounded-2xl bg-[#F7FDE6] text-[#17151B] flex items-center justify-center font-bold mb-4 border border-[#BDF208]/50">
                <Workflow className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#17151B] bg-[#BDF208] px-2.5 py-1 rounded-md inline-block mb-3">
                Service Category A
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17151B] tracking-tight mb-4">
                n8n Workflow Automation
              </h2>
              <p className="text-base text-[#68636D] leading-relaxed mb-6">
                Connect your business applications with robust, visual, open-source automation workflows. 
                Eliminate manual copy-pasting and repetitive task friction across tools without costly recurring per-task fees.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  'Custom workflow development',
                  'Application integrations',
                  'Automated notifications',
                  'Data transfer between applications',
                  'Repetitive task automation',
                  'Business process optimization',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#17151B] font-semibold bg-[#F4F4F0] p-3 rounded-xl border border-[#E8E7E3]">
                    <Check className="w-4 h-4 text-[#17151B] shrink-0 mt-0.5 stroke-[3]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#BDF208] text-[#17151B] text-xs sm:text-sm font-bold hover:bg-[#AEE200] transition shadow-subtle"
              >
                <span>Request n8n Architecture Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-6">
              <WorkflowAnimationCanvas scenario="email-to-whatsapp" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE B: WhatsApp Automation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E8E7E3] p-8 sm:p-14 shadow-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <WorkflowAnimationCanvas scenario="missed-call-to-whatsapp" />
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="w-12 h-12 rounded-2xl bg-[#F7FDE6] text-[#17151B] flex items-center justify-center font-bold mb-4 border border-[#BDF208]/50">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#17151B] bg-[#BDF208] px-2.5 py-1 rounded-md inline-block mb-3">
                Service Category B
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17151B] tracking-tight mb-4">
                WhatsApp Automation
              </h2>
              <p className="text-base text-[#68636D] leading-relaxed mb-6">
                Turn the world's most popular messaging platform into your primary communication and conversion asset. 
                Using the official Meta Cloud API, we build intelligent 24/7 conversational flows that never miss a lead.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  'Automated WhatsApp notifications',
                  'Customer enquiry responses',
                  'Appointment reminders & calendar sync',
                  'Missed-call follow-up messages',
                  'Business communication workflows',
                  'Official Meta Cloud API compliance',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#17151B] font-semibold bg-[#F4F4F0] p-3 rounded-xl border border-[#E8E7E3]">
                    <Check className="w-4 h-4 text-[#17151B] shrink-0 mt-0.5 stroke-[3]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#BDF208] text-[#17151B] text-xs sm:text-sm font-bold hover:bg-[#AEE200] transition shadow-subtle"
              >
                <span>Deploy WhatsApp Automation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE C: AI-Powered Automation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E8E7E3] p-8 sm:p-14 shadow-elevated">
          <div className="max-w-3xl mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#F7FDE6] text-[#17151B] flex items-center justify-center font-bold mb-4 border border-[#BDF208]/50">
              <Bot className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#17151B] bg-[#BDF208] px-2.5 py-1 rounded-md inline-block mb-3">
              Service Category C
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17151B] tracking-tight mb-4">
              AI-Powered Automation
            </h2>
            <p className="text-base text-[#68636D] leading-relaxed">
              Integrate advanced LLM capabilities directly into your existing business pipelines. 
              We implement custom AI tools to intelligently handle messages, extract structured data from unstructured documents, and triage customer requests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-[#F4F4F0] border border-[#E8E7E3]">
              <h4 className="text-sm font-bold text-[#17151B] mb-1">AI-Assisted Integrations</h4>
              <p className="text-xs text-[#68636D]">Embed intelligence into standard webhook and CRM pipelines.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F4F4F0] border border-[#E8E7E3]">
              <h4 className="text-sm font-bold text-[#17151B] mb-1">Intelligent Message Processing</h4>
              <p className="text-xs text-[#68636D]">Analyze intent, sentiment, and urgency automatically.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F4F4F0] border border-[#E8E7E3]">
              <h4 className="text-sm font-bold text-[#17151B] mb-1">Automated Information Handling</h4>
              <p className="text-xs text-[#68636D]">Parse invoices, contracts, and PDFs directly into database rows.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F4F4F0] border border-[#E8E7E3]">
              <h4 className="text-sm font-bold text-[#17151B] mb-1">Custom Client AI Integrations</h4>
              <p className="text-xs text-[#68636D]">Bespoke prompt architectures grounded strictly in your business rules.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#F7FDE6] border border-[#BDF208]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#17151B] font-medium">
              We present advanced capabilities as customizable solutions tailored to your operational specifications.
            </span>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 rounded-xl bg-[#17151B] text-[#BDF208] text-xs font-bold hover:bg-neutral-800 transition shrink-0"
            >
              Discuss AI Requirements
            </button>
          </div>
        </div>
      </section>


    </div>
  );
};
