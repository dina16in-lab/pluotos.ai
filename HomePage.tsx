import React from 'react';
import { ArrowRight, Sparkles, Check, Shield, Clock, Zap, Workflow, MessageSquare, Bot, Cpu, Layers, ArrowUpRight } from 'lucide-react';
import { Hero3DVisual } from '../components/visuals/Hero3DVisual';
import { WorkflowAnimationCanvas } from '../components/visuals/WorkflowAnimationCanvas';
import { HeroFloatingWorkflowCluster } from '../components/hero/HeroFloatingWorkflowCluster';
import { PageId } from '../types/navigation';
import { CONTACT_CONFIG } from '../config/contact';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 sm:space-y-32">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative pt-2 sm:pt-4 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-gradient-to-b from-[#BDF208]/10 via-[#F7FDE6]/40 to-transparent pointer-events-none -z-10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Organized Floating Workflow Nodes Cluster */}
              <HeroFloatingWorkflowCluster />

              {/* Exact Master Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#17151B] leading-[1.12] mb-6">
                Let Automation Do the{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">Heavy Lifting.</span>
                  <span className="absolute bottom-1 left-0 right-0 h-4 bg-[#BDF208] -z-0 rounded-sm -rotate-1" />
                </span>
              </h1>

              {/* Exact Master Supporting Text */}
              <p className="text-lg sm:text-xl text-[#68636D] leading-relaxed max-w-2xl mb-8">
                We build intelligent automation workflows that simplify your business operations, connect your tools and give you more time to focus on growth.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#BDF208] text-[#17151B] font-extrabold hover:bg-white hover:border-[#17151B] hover:shadow-elevated hover:scale-105 active:scale-95 transition-all duration-300 group text-base border border-[#17151B]/15 cursor-pointer"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border border-[#E8E7E3] text-[#17151B] font-extrabold hover:bg-[#BDF208] hover:border-[#BDF208] hover:shadow-lime-glow hover:scale-105 active:scale-95 transition-all duration-300 text-base cursor-pointer"
                >
                  <span>Let's Talk</span>
                </button>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E8E7E3] w-full">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#F7FDE6] flex items-center justify-center text-[#17151B] shrink-0 border border-[#BDF208]/50">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs font-semibold text-[#68636D]">Custom Workflows</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#F7FDE6] flex items-center justify-center text-[#17151B] shrink-0 border border-[#BDF208]/50">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs font-semibold text-[#68636D]">Zero Lock-in</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <div className="w-5 h-5 rounded-full bg-[#F7FDE6] flex items-center justify-center text-[#17151B] shrink-0 border border-[#BDF208]/50">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs font-semibold text-[#68636D]">n8n & Meta Cloud API</span>
                </div>
              </div>
            </div>

            {/* Right: 3D AI-Inspired Visual Canvas */}
            <div className="lg:col-span-5">
              <Hero3DVisual />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: INTRODUCTION TO PLUOTOS AI
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-vignette-lime rounded-3xl p-8 sm:p-14 shadow-elevated">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#17151B] bg-[#BDF208] px-2.5 py-1 rounded-md inline-block mb-3">
              About PLUOTOS AI
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17151B] tracking-tight mb-5">
              An intelligent automation agency building custom systems for high-growth businesses.
            </h2>
            <p className="text-base sm:text-lg text-[#68636D] leading-relaxed mb-6">
              Modern businesses rely on dozens of disconnected web apps, leading to endless copy-pasting, forgotten customer follow-ups, and overwhelmed teams. 
              At PLUOTOS AI, we don’t sell bloated software subscriptions or rigid templates. We architect tailor-made automation pipelines that seamlessly synchronize your software and handle repetitive busywork in real time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E8E7E3]">
              <div>
                <h4 className="text-lg font-bold text-[#17151B] mb-1">Custom Architecture</h4>
                <p className="text-xs text-[#68636D]">Engineered around your existing tools, databases, and operational bottlenecks.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#17151B] mb-1">Instant Execution</h4>
                <p className="text-xs text-[#68636D]">Real-time webhook triggers, automated validation, and sub-second data dispatch.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#17151B] mb-1">Direct Communication</h4>
                <p className="text-xs text-[#68636D]">Official WhatsApp Cloud API conversational flows that engage leads instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHAT WE AUTOMATE
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#17151B] bg-[#BDF208] px-2.5 py-1 rounded-md inline-block mb-3">
            Operational Scope
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17151B] tracking-tight mb-4">
            What We Automate
          </h2>
          <p className="text-base text-[#68636D]">
            We eliminate manual friction wherever repetitive human tasks slow down your revenue engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-vignette-lime p-7 rounded-3xl shadow-subtle hover:scale-[1.02] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#F7FDE6] text-[#17151B] flex items-center justify-center font-bold mb-5 border border-[#BDF208]/50">
              <Workflow className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#17151B] mb-2">Cross-Tool Data Flow</h3>
            <p className="text-xs text-[#68636D] leading-relaxed mb-4">
              Stop manually moving data between CRMs, Google Sheets, email inboxes, and project boards. We build continuous background synchronization.
            </p>
            <ul className="text-xs space-y-1.5 text-[#17151B] font-medium">
              <li>✓ Webhook event triggers</li>
              <li>✓ Bidirectional database sync</li>
              <li>✓ Automatic error catching</li>
            </ul>
          </div>

          <div className="card-vignette-lime p-7 rounded-3xl shadow-subtle hover:scale-[1.02] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#F7FDE6] text-[#17151B] flex items-center justify-center font-bold mb-5 border border-[#BDF208]/50">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#17151B] mb-2">Customer Communication</h3>
            <p className="text-xs text-[#68636D] leading-relaxed mb-4">
              Respond to customer inquiries within seconds 24/7 via WhatsApp, schedule consultations automatically, and recover lost missed calls.
            </p>
            <ul className="text-xs space-y-1.5 text-[#17151B] font-medium">
              <li>✓ WhatsApp 24/7 triage</li>
              <li>✓ Automated appointment booking</li>
              <li>✓ Missed-call follow-up triggers</li>
            </ul>
          </div>

          <div className="card-vignette-lime p-7 rounded-3xl shadow-subtle hover:scale-[1.02] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#F7FDE6] text-[#17151B] flex items-center justify-center font-bold mb-5 border border-[#BDF208]/50">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#17151B] mb-2">AI-Assisted Operations</h3>
            <p className="text-xs text-[#68636D] leading-relaxed mb-4">
              Incorporate modern language models to automatically classify incoming messages, extract structured JSON from documents, and summarize calls.
            </p>
            <ul className="text-xs space-y-1.5 text-[#17151B] font-medium">
              <li>✓ Document & invoice parsing</li>
              <li>✓ Urgent inquiry routing</li>
              <li>✓ Automated response drafting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: FEATURED SERVICES
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#17151B] bg-[#BDF208] px-2.5 py-1 rounded-md inline-block mb-3">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17151B] tracking-tight">
              Featured Services
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#17151B] hover:text-[#AEE200] transition"
          >
            <span>View All Service Categories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card A: n8n */}
          <div className="card-vignette-lime p-6 rounded-3xl shadow-subtle flex flex-col justify-between hover:scale-[1.02] transition group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F7FDE6] text-[#17151B] flex items-center justify-center font-bold mb-4 border border-[#BDF208]/50">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#17151B] mb-2 group-hover:text-[#17151B]">
                n8n Workflow Automation
              </h3>
              <p className="text-xs text-[#68636D] leading-relaxed mb-4">
                Custom visual pipelines linking your database, webhooks, and third-party tools with zero per-task penalties.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs font-bold text-[#17151B] flex items-center gap-1.5 pt-3 border-t border-[#BDF208]/30"
            >
              <span>Explore n8n</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#17151B]" />
            </button>
          </div>

          {/* Card B: WhatsApp */}
          <div className="card-vignette-lime p-6 rounded-3xl shadow-subtle flex flex-col justify-between hover:scale-[1.02] transition group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F7FDE6] text-[#17151B] flex items-center justify-center font-bold mb-4 border border-[#BDF208]/50">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#17151B] mb-2 group-hover:text-[#17151B]">
                WhatsApp Automation
              </h3>
              <p className="text-xs text-[#68636D] leading-relaxed mb-4">
                Official Meta Cloud API integrations for automated appointment booking, missed-call follow-ups, and notifications.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs font-bold text-[#17151B] flex items-center gap-1.5 pt-3 border-t border-[#BDF208]/30"
            >
              <span>Explore WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#17151B]" />
            </button>
          </div>

          {/* Card C: AI-Powered */}
          <div className="card-vignette-lime p-6 rounded-3xl shadow-subtle flex flex-col justify-between hover:scale-[1.02] transition group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F7FDE6] text-[#17151B] flex items-center justify-center font-bold mb-4 border border-[#BDF208]/50">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#17151B] mb-2 group-hover:text-[#17151B]">
                AI-Powered Automation
              </h3>
              <p className="text-xs text-[#68636D] leading-relaxed mb-4">
                Intelligent message processing, custom LLM tool-calling, and automated document handling for daily operations.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs font-bold text-[#17151B] flex items-center gap-1.5 pt-3 border-t border-[#BDF208]/30"
            >
              <span>Explore AI Systems</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#17151B]" />
            </button>
          </div>

          {/* Card D: Custom */}
          <div className="card-vignette-lime p-6 rounded-3xl shadow-subtle flex flex-col justify-between hover:scale-[1.02] transition group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F7FDE6] text-[#17151B] flex items-center justify-center font-bold mb-4 border border-[#BDF208]/50">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#17151B] mb-2 group-hover:text-[#17151B]">
                Custom Business Automation
              </h3>
              <p className="text-xs text-[#68636D] leading-relaxed mb-4">
                Bespoke end-to-end architectures tailored around your specific proprietary software, APIs, and workflows.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs font-bold text-[#17151B] flex items-center gap-1.5 pt-3 border-t border-[#BDF208]/30"
            >
              <span>Explore Custom Workflows</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#17151B]" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: HOW OUR AUTOMATION WORKS (Interactive Signature Canvas)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#17151B] bg-[#BDF208] px-2.5 py-1 rounded-md inline-block mb-3">
            Live Flow Demonstration
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17151B] tracking-tight mb-4">
            How Our Automation Works
          </h2>
          <p className="text-base text-[#68636D]">
            Experience continuous communication between your tools without any manual delay.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <WorkflowAnimationCanvas scenario="email-to-whatsapp" />
          <WorkflowAnimationCanvas scenario="missed-call-to-whatsapp" />
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => onNavigate('how-it-works')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#17151B] hover:text-[#AEE200] transition"
          >
            <span>Learn About Our 5-Step Development Process</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: INDUSTRY-SPECIFIC SOLUTIONS PREVIEW
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#17151B] text-[#FBFBF9] rounded-3xl p-8 sm:p-14 border border-neutral-800">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#17151B] bg-[#BDF208] px-2.5 py-1 rounded-md inline-block mb-3">
              Target Verticals
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Customized for Your Industry
            </h2>
            <p className="text-sm sm:text-base text-neutral-400">
              Different industries face unique bottlenecks. We build dedicated automation suites tailored for content creators, clinics, brokers, and service agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#201D25] p-6 rounded-2xl border border-neutral-800">
              <span className="text-xs font-bold text-[#BDF208] uppercase tracking-wider block mb-2">
                Instagram Reel Creators
              </span>
              <h4 className="text-base font-bold text-white mb-2">
                Automated Enquiry & WhatsApp Alerts
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Monitors comments and direct messages, delivers resources instantly, collects lead contacts, and notifies creators via WhatsApp.
              </p>
              <button
                onClick={() => onNavigate('industries')}
                className="text-xs font-bold text-[#BDF208] hover:underline flex items-center gap-1"
              >
                <span>Read Creator Workflow</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-[#201D25] p-6 rounded-2xl border border-neutral-800">
              <span className="text-xs font-bold text-[#BDF208] uppercase tracking-wider block mb-2">
                Dental Clinics
              </span>
              <h4 className="text-base font-bold text-white mb-2">
                Missed-Call Follow-up & Booking
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                When a patient call is missed, the system immediately triggers a WhatsApp message, offering emergency triage and self-service calendar booking.
              </p>
              <button
                onClick={() => onNavigate('industries')}
                className="text-xs font-bold text-[#BDF208] hover:underline flex items-center gap-1"
              >
                <span>Read Clinic Workflow</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-[#201D25] p-6 rounded-2xl border border-neutral-800">
              <span className="text-xs font-bold text-[#BDF208] uppercase tracking-wider block mb-2">
                Other Businesses
              </span>
              <h4 className="text-base font-bold text-white mb-2">
                SMBs, Agencies & E-Commerce
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Automate client onboarding, property brochure delivery, invoice synchronization, and inventory alert dispatches.
              </p>
              <button
                onClick={() => onNavigate('industries')}
                className="text-xs font-bold text-[#BDF208] hover:underline flex items-center gap-1"
              >
                <span>Read Business Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: WHY CHOOSE PLUOTOS AI
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#17151B] bg-[#BDF208] px-2.5 py-1 rounded-md inline-block mb-3">
            The PLUOTOS Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17151B] tracking-tight mb-4">
            Why Choose PLUOTOS AI
          </h2>
          <p className="text-base text-[#68636D]">
            Engineering intelligent automation workflows that simplify operations, connect tools, and give you more time for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card-vignette-lime p-6 rounded-3xl shadow-subtle hover:scale-[1.02] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#F7FDE6] text-[#17151B] flex items-center justify-center font-bold mb-4 border border-[#BDF208]/50">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#17151B] mb-2">Zero Vendor Lock-In</h4>
            <p className="text-xs text-[#68636D] leading-relaxed">
              We build on open, flexible architectures like n8n that you own entirely. No punitive per-task price penalties.
            </p>
          </div>

          <div className="card-vignette-lime p-6 rounded-3xl shadow-subtle hover:scale-[1.02] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#F7FDE6] text-[#17151B] flex items-center justify-center font-bold mb-4 border border-[#BDF208]/50">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#17151B] mb-2">Official Meta Cloud API</h4>
            <p className="text-xs text-[#68636D] leading-relaxed">
              Legitimate, enterprise-grade WhatsApp Cloud API integrations. Verified sender badges without risk of account bans.
            </p>
          </div>

          <div className="card-vignette-lime p-6 rounded-3xl shadow-subtle hover:scale-[1.02] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#F7FDE6] text-[#17151B] flex items-center justify-center font-bold mb-4 border border-[#BDF208]/50">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#17151B] mb-2">Fast Turnaround</h4>
            <p className="text-xs text-[#68636D] leading-relaxed">
              Targeted workflows go from discovery to production deployment within 7 to 14 business days.
            </p>
          </div>

          <div className="card-vignette-lime p-6 rounded-3xl shadow-subtle hover:scale-[1.02] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#F7FDE6] text-[#17151B] flex items-center justify-center font-bold mb-4 border border-[#BDF208]/50">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#17151B] mb-2">Tailor-Made Solutions</h4>
            <p className="text-xs text-[#68636D] leading-relaxed">
              No generic templates. Every workflow is developed specifically around your business rules and existing software.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CONTACT CTA
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#17151B] to-[#25222C] rounded-3xl p-8 sm:p-14 border border-neutral-800 text-center flex flex-col items-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#17151B] bg-[#BDF208] px-3 py-1 rounded-md mb-4">
            Start Automating
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 max-w-2xl">
            Ready to let automation do the heavy lifting?
          </h2>
          <p className="text-base text-neutral-400 max-w-xl mb-8">
            Discuss your business operations and manual bottlenecks with our automation team today.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-xl bg-[#BDF208] text-[#17151B] text-sm font-extrabold hover:bg-[#AEE200] shadow-lime-glow transition-all flex items-center gap-2 group"
            >
              <span>Discuss Your Automation Requirements</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={CONTACT_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl bg-[#201D25] border border-neutral-700 text-white text-sm font-bold hover:bg-[#BDF208] hover:text-[#17151B] hover:border-[#BDF208] hover:shadow-lime-glow transition-all flex items-center gap-2 group cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#BDF208] group-hover:text-[#17151B] transition-colors" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
