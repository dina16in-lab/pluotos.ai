import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { FREQUENT_QUESTIONS } from '../../data/mockData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#F6F4F8]/50 border-t border-[#E8E4EE]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEF9] border border-[#9F7ACB]/30 text-xs font-semibold text-[#9F7ACB] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Answers to Technical & Operational Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17151B] tracking-tight mb-4">
            Frequently Asked <span className="text-[#9F7ACB]">Questions.</span>
          </h2>

          <p className="text-base text-[#68636D]">
            Everything you need to know about our n8n architectures, WhatsApp integrations, and ongoing support.
          </p>
        </div>

        <div className="space-y-3.5">
          {FREQUENT_QUESTIONS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8E4EE] overflow-hidden transition-all duration-200 shadow-subtle hover:border-[#9F7ACB]/40"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#17151B] focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#F3EEF9] text-[#9F7ACB] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#9F7ACB] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#68636D] leading-relaxed border-t border-[#E8E4EE]/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
