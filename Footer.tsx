import React from 'react';
import { Cpu, ArrowRight, MessageSquare, Instagram, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { PageId, NAV_ITEMS } from '../../types/navigation';
import { CONTACT_CONFIG } from '../../config/contact';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (pageId: PageId) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#17151B] text-[#FBFBF9] pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper CTA Banner */}
        <div className="bg-[#201D25] rounded-3xl p-8 sm:p-12 border border-neutral-800 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#BDF208]/15 text-[#BDF208] text-xs font-bold mb-3 border border-[#BDF208]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{CONTACT_CONFIG.tagline}</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Let Automation Do the Heavy Lifting
            </h3>
            <p className="text-sm text-neutral-400">
              {CONTACT_CONFIG.supportingMessage}
            </p>
          </div>

          <button
            onClick={() => handleNav('contact')}
            className="shrink-0 px-8 py-4 rounded-xl bg-[#BDF208] text-[#17151B] text-sm font-extrabold hover:bg-[#AEE200] shadow-lime-glow transition-all duration-200 flex items-center gap-2 group"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-neutral-800 text-xs sm:text-sm">
          {/* Brand info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#201D25] flex items-center justify-center p-1.5 border border-neutral-700">
                <img src="/pluotos-logo.png" alt="PLUOTOS AI Logo" className="w-6 h-6 object-contain" />
              </div>
              <span className="font-extrabold text-base tracking-tight text-white">
                PLUOTOS <span className="text-[#BDF208]">AI</span>
              </span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Intelligent automation agency specializing in custom workflow development, n8n orchestrations, and intelligent business automations.
            </p>
            <div className="text-[11px] text-[#BDF208] font-mono font-medium">
              "{CONTACT_CONFIG.tagline}"
            </div>
          </div>

          {/* 5 Main Pages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-neutral-400 text-xs">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="hover:text-[#BDF208] transition text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Core Services
            </h4>
            <ul className="space-y-2 text-neutral-400 text-xs">
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#BDF208] transition text-left">
                  n8n Workflow Automation
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#BDF208] transition text-left">
                  WhatsApp Automation
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#BDF208] transition text-left">
                  AI-Powered Automation
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#BDF208] transition text-left">
                  Custom Business Automation
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Communication Channels */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Connect With Us
            </h4>
            <ul className="space-y-2.5 text-neutral-400 text-xs">
              <li>
                <a
                  href={CONTACT_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#BDF208] transition"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#BDF208]" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#BDF208] transition"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#BDF208]" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_CONFIG.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#BDF208] transition"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#BDF208]" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_CONFIG.email}`}
                  className="flex items-center gap-2 hover:text-[#BDF208] transition"
                >
                  <Mail className="w-3.5 h-3.5 text-[#BDF208]" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} {CONTACT_CONFIG.brandName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Frontend Showcase & Lead-Generation Platform</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-[#BDF208] fill-[#BDF208]" /> for High-Growth Businesses
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
