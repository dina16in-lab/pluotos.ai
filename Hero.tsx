import React from 'react';
import { ArrowRight, Sparkles, Check, Play, Shield, Clock, Zap } from 'lucide-react';
import { Badge } from '../common/Badge';
import { WorkflowHeroVisual } from './WorkflowHeroVisual';
import { AGENCY_METRICS } from '../../data/mockData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreWorkflows: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreWorkflows }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle organic gradient blurs in the background (avoiding dark/heavy gradients) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#F3EEF9]/80 to-transparent pointer-events-none -z-10 rounded-full blur-3xl" />
      <div className="absolute top-24 right-10 w-72 h-72 bg-[#B99FDF]/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning & Messaging */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Tag */}
            <div className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEF9] border border-[#9F7ACB]/30 text-xs font-semibold text-[#9F7ACB] shadow-subtle">
              <Sparkles className="w-3.5 h-3.5 text-[#9F7ACB]" />
              <span>AI Automation Agency for High-Growth Businesses</span>
            </div>

            {/* Main Tagline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#17151B] leading-[1.12] mb-6">
              Automate Smarter.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F7ACB] via-[#8F6AB9] to-[#B99FDF]">
                Grow Faster.
              </span>
            </h1>

            {/* Supporting Message */}
            <p className="text-lg sm:text-xl text-[#68636D] leading-relaxed max-w-2xl mb-8">
              Your business has better things to do than repetitive tasks. We engineer customized{' '}
              <strong className="font-semibold text-[#17151B]">n8n pipelines</strong>,{' '}
              <strong className="font-semibold text-[#17151B]">WhatsApp conversational bots</strong>, and{' '}
              <strong className="font-semibold text-[#17151B]">AI-powered integrations</strong> that save your team 20+ hours every week.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#9F7ACB] text-white font-semibold hover:bg-[#8F6AB9] shadow-premium hover:shadow-elevated transition-all duration-200 group text-base"
              >
                <span>Book a Free Strategy Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreWorkflows}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white border border-[#E8E4EE] text-[#17151B] font-semibold hover:bg-[#F6F4F8] hover:border-[#9F7ACB]/40 transition-all duration-200 shadow-subtle text-base"
              >
                <Play className="w-4 h-4 text-[#9F7ACB] fill-[#9F7ACB]/20" />
                <span>Simulate n8n Workflow</span>
              </button>
            </div>

            {/* Trust points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E8E4EE]/90 w-full">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#F3EEF9] flex items-center justify-center text-[#9F7ACB] shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span className="text-xs font-medium text-[#68636D]">Zero Monthly Lock-in</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#F3EEF9] flex items-center justify-center text-[#9F7ACB] shrink-0">
                  <Shield className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span className="text-xs font-medium text-[#68636D]">Official Meta Cloud API</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <div className="w-5 h-5 rounded-full bg-[#F3EEF9] flex items-center justify-center text-[#9F7ACB] shrink-0">
                  <Clock className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span className="text-xs font-medium text-[#68636D]">7-14 Day Fast Deployment</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Workflow Canvas */}
          <div className="lg:col-span-5">
            <WorkflowHeroVisual />
          </div>
        </div>

        {/* Agency Metrics Banner */}
        <div className="mt-20 pt-10 border-t border-[#E8E4EE]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {AGENCY_METRICS.map((metric, i) => (
              <div
                key={i}
                className="bg-white/80 border border-[#E8E4EE] rounded-2xl p-5 text-center shadow-subtle hover:border-[#9F7ACB]/40 hover:shadow-premium transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-[#17151B] tracking-tight mb-1">
                  {metric.value}
                </div>
                <div className="text-xs font-bold text-[#9F7ACB] uppercase tracking-wider mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-[#68636D]">
                  {metric.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
