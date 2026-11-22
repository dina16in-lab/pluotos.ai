import React from 'react';
import { Network, MessageSquare, Bot, Cpu, Check, ArrowRight, Zap } from 'lucide-react';
import { ServiceType } from '../../types';

interface ServiceCardProps {
  service: ServiceType;
  onSelect: (service: ServiceType) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Network,
  MessageSquare,
  Bot,
  Cpu,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  const IconComponent = iconMap[service.icon] || Cpu;

  return (
    <div className="group relative bg-white rounded-3xl p-7 border border-[#E8E4EE] hover:border-[#9F7ACB]/60 shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between h-full">
      {/* Top Accent Pill */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-6">
          <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-[#F3EEF9] text-[#9F7ACB] flex items-center justify-center group-hover:bg-[#9F7ACB] group-hover:text-white transition-colors duration-300 shadow-sm">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-semibold text-[#9F7ACB] px-3 py-1 rounded-full bg-[#F3EEF9] border border-[#9F7ACB]/20">
            {service.tag}
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#17151B] mb-2.5 group-hover:text-[#9F7ACB] transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-[#68636D] leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        {/* Key Features Bullet List */}
        <div className="space-y-2.5 mb-6 pt-4 border-t border-[#E8E4EE]">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-[#17151B]">
              <div className="w-4 h-4 rounded-full bg-[#F3EEF9] flex items-center justify-center text-[#9F7ACB] shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span className="leading-snug">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Area: Tech Stack & Metric */}
      <div>
        {/* Metric Highlight */}
        <div className="mb-5 px-3.5 py-2 rounded-xl bg-[#F6F4F8] border border-[#E8E4EE] flex items-center justify-between text-xs">
          <span className="text-[#68636D] font-medium flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#9F7ACB]" />
            Impact
          </span>
          <span className="font-bold text-[#17151B]">{service.metrics}</span>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {service.techStack.map((tech, i) => (
            <span
              key={i}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#FBFBF9] border border-[#E8E4EE] text-[#68636D]"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          onClick={() => onSelect(service)}
          className="w-full py-2.5 px-4 rounded-xl bg-white border border-[#E8E4EE] text-xs font-semibold text-[#17151B] hover:bg-[#9F7ACB] hover:text-white hover:border-[#9F7ACB] transition-all duration-200 flex items-center justify-center gap-2 group/btn"
        >
          <span>Explore Architecture Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
