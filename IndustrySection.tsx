import React, { useState } from 'react';
import { 
  Instagram, 
  Stethoscope, 
  Building2, 
  Briefcase, 
  ShoppingBag, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  TrendingUp,
  Clock
} from 'lucide-react';
import { TARGET_INDUSTRIES } from '../../data/mockData';
import { TargetIndustry } from '../../types';

interface IndustrySectionProps {
  onOpenBooking: () => void;
}

const industryIconMap: Record<string, React.ElementType> = {
  Instagram,
  Stethoscope,
  Building2,
  Briefcase,
  ShoppingBag
};

export const IndustrySection: React.FC<IndustrySectionProps> = ({ onOpenBooking }) => {
  const [activeIndustry, setActiveIndustry] = useState<TargetIndustry>(TARGET_INDUSTRIES[0]);

  const IconComponent = industryIconMap[activeIndustry.iconName] || Sparkles;

  return (
    <section id="industries" className="py-24 bg-[#FBFBF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEF9] border border-[#9F7ACB]/30 text-xs font-semibold text-[#9F7ACB] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Industry Blueprints</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17151B] tracking-tight mb-4">
            Built For Your Specific{' '}
            <span className="text-[#9F7ACB]">Operational Bottlenecks.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#68636D]">
            Different industries bleed time in different ways. Explore how we engineer specialized automations for creators, clinics, brokers, and agencies.
          </p>
        </div>

        {/* Industry Nav Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {TARGET_INDUSTRIES.map((industry) => {
            const Icon = industryIconMap[industry.iconName] || Sparkles;
            const isSelected = activeIndustry.id === industry.id;

            return (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isSelected
                    ? 'bg-[#9F7ACB] text-white border-[#9F7ACB] shadow-premium scale-102'
                    : 'bg-white text-[#68636D] border-[#E8E4EE] hover:border-[#9F7ACB]/40 hover:text-[#17151B] shadow-subtle'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{industry.name}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Industry Solution Card */}
        <div className="bg-white rounded-3xl border border-[#E8E4EE] p-7 sm:p-10 shadow-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Problem & Solution Breakdown */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F3EEF9] text-[#9F7ACB] flex items-center justify-center shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#9F7ACB] tracking-wider uppercase">
                    {activeIndustry.category}
                  </span>
                  <h3 className="text-2xl font-bold text-[#17151B]">
                    {activeIndustry.name}
                  </h3>
                </div>
              </div>

              {/* The Bottleneck vs The Solution */}
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-2xl bg-[#FBFBF9] border border-[#E8E4EE]">
                  <span className="text-xs font-bold text-rose-500 uppercase tracking-wider block mb-1">
                    The Pain Point
                  </span>
                  <p className="text-xs sm:text-sm text-[#68636D] leading-relaxed">
                    {activeIndustry.problem}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F3EEF9]/50 border border-[#9F7ACB]/20">
                  <span className="text-xs font-bold text-[#9F7ACB] uppercase tracking-wider block mb-1">
                    The PLUOTOS Automation Engine
                  </span>
                  <p className="text-xs sm:text-sm text-[#17151B] font-medium leading-relaxed">
                    {activeIndustry.solution}
                  </p>
                </div>
              </div>

              {/* Step-by-Step Flow */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#17151B] mb-3">
                  Typical Production Pipeline
                </h4>
                <div className="space-y-2.5">
                  {activeIndustry.typicalWorkflow.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#17151B]">
                      <span className="w-5 h-5 rounded-full bg-[#F3EEF9] text-[#9F7ACB] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: ROI & Impact Stats */}
            <div className="lg:col-span-5 bg-[#F6F4F8] rounded-3xl p-6 sm:p-8 border border-[#E8E4EE] flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#68636D] uppercase tracking-wider block mb-4">
                  Projected Client Impact
                </span>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-2xl border border-[#E8E4EE] shadow-subtle">
                    <div className="flex items-center gap-1.5 text-xs text-[#68636D] mb-1">
                      <Clock className="w-3.5 h-3.5 text-[#9F7ACB]" />
                      <span>Time Recovered</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-[#17151B]">
                      {activeIndustry.timeSavedWeekly}
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-[#E8E4EE] shadow-subtle">
                    <div className="flex items-center gap-1.5 text-xs text-[#68636D] mb-1">
                      <TrendingUp className="w-3.5 h-3.5 text-[#9F7ACB]" />
                      <span>Velocity Gain</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-[#9F7ACB]">
                      {activeIndustry.roiEstimate}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#E8E4EE] mb-6">
                  <div className="text-xs font-bold text-[#17151B] mb-1">
                    Key Transformation
                  </div>
                  <p className="text-xs text-[#68636D] leading-relaxed">
                    "{activeIndustry.keyBenefit}"
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 rounded-xl bg-[#9F7ACB] text-white text-xs sm:text-sm font-bold hover:bg-[#8F6AB9] shadow-premium transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Automate Your {activeIndustry.category} Operations</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
