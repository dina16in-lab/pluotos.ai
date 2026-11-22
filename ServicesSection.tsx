import React, { useState } from 'react';
import { Sparkles, ArrowRight, X, CheckCircle, ShieldCheck } from 'lucide-react';
import { CORE_SERVICES } from '../../data/mockData';
import { ServiceCard } from './ServiceCard';
import { ServiceType } from '../../types';

interface ServicesSectionProps {
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  return (
    <section id="services" className="py-24 bg-[#FBFBF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEF9] border border-[#9F7ACB]/30 text-xs font-semibold text-[#9F7ACB] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Engineering Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17151B] tracking-tight mb-4">
            Four Core Engines.{' '}
            <span className="text-[#9F7ACB]">Limitless Velocity.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#68636D] leading-relaxed">
            We don't sell generic software licenses or clunky templates. We design, build, and support bespoke automation pipelines that remove human friction from your revenue workflows.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={(s) => setSelectedService(s)}
            />
          ))}
        </div>

        {/* Bottom Banner with Consultation CTA */}
        <div className="mt-16 bg-white border border-[#E8E4EE] rounded-3xl p-8 sm:p-10 shadow-subtle flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-left">
            <div className="flex items-center gap-2 text-xs font-bold text-[#9F7ACB] uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-[#9F7ACB]" />
              Need a Custom Cross-Platform Pipeline?
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#17151B] mb-2">
              Have unique legacy databases or internal software?
            </h3>
            <p className="text-sm text-[#68636D]">
              We build custom webhooks, middleware scripts, and proprietary REST integrations for niche industry software.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-[#9F7ACB] text-white text-sm font-semibold hover:bg-[#8F6AB9] hover:shadow-premium transition-all duration-200 flex items-center gap-2"
          >
            <span>Request Custom Architecture Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-[#E8E4EE] shadow-elevated relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#68636D] hover:bg-[#F3EEF9] hover:text-[#17151B] transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-block px-3 py-1 rounded-full bg-[#F3EEF9] text-xs font-semibold text-[#9F7ACB] mb-3">
              {selectedService.tag}
            </div>

            <h3 className="text-2xl font-bold text-[#17151B] mb-3">
              {selectedService.title}
            </h3>

            <p className="text-base text-[#68636D] leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#17151B] mb-3">
                Deliverables & Architectural Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#17151B] bg-[#F6F4F8] p-3 rounded-xl border border-[#E8E4EE]">
                    <CheckCircle className="w-4 h-4 text-[#9F7ACB] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#17151B] mb-2.5">
                Standard Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-[#F3EEF9] text-[#9F7ACB] font-semibold border border-[#9F7ACB]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8E4EE] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#68636D]">
                Expected benchmark: <strong className="text-[#17151B]">{selectedService.metrics}</strong>
              </span>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenBooking();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#9F7ACB] text-white text-xs font-semibold hover:bg-[#8F6AB9] transition"
              >
                Discuss This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
