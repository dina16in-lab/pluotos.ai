import React, { useState } from 'react';
import { MessageSquare, Instagram, Linkedin, Mail, ShieldCheck, FileText, Lock, Heart, ArrowUpRight, Sparkles } from 'lucide-react';
import { CONTACT_CONFIG } from '../../config/contact';
import { LegalModal, LegalDocType } from '../modals/LegalModal';

export const ContactFooter: React.FC = () => {
  const [legalDoc, setLegalDoc] = useState<LegalDocType>(null);

  return (
    <footer className="mt-20 w-full relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen text-xs overflow-hidden">
      {/* 1. Organic Wavy Top Divider in #BDF208 Accent */}
      <div className="w-full overflow-hidden leading-none -mb-1 relative z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-20 block text-[#121016]"
          preserveAspectRatio="none"
        >
          {/* Subtle Accent Glow Wave Stroke in #BDF208 */}
          <path
            d="M0,36 C320,85 540,12 820,54 C1100,95 1320,24 1440,48"
            stroke="#BDF208"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
          {/* Solid Dark Wave Fill */}
          <path
            d="M0,36 C320,85 540,12 820,54 C1100,95 1320,24 1440,48 L1440,96 L0,96 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* 2. Full-Bleed Dark Footer Body */}
      <div className="bg-[#121016] text-[#FBFBF9] pt-6 sm:pt-10 pb-16 sm:pb-20 w-full border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          {/* Direct Contact Cards Row: WhatsApp, LinkedIn, Instagram, Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* WhatsApp Card */}
            <a
              href={CONTACT_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 rounded-2xl bg-[#1D1B24] border border-neutral-800 transition-all duration-300 flex items-center justify-between group shadow-subtle hover:bg-[#BDF208] hover:border-[#BDF208] hover:shadow-lime-glow hover:scale-102 cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#282532] text-[#BDF208] flex items-center justify-center font-bold border border-neutral-700 group-hover:bg-[#17151B] group-hover:text-[#BDF208] group-hover:border-transparent transition-all shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-base font-black text-white group-hover:text-[#17151B] transition-colors">
                    WhatsApp
                  </div>
                  <span className="text-[11px] font-medium text-neutral-400 group-hover:text-[#17151B] transition-colors">
                    Chat Directly
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-[#17151B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={CONTACT_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 rounded-2xl bg-[#1D1B24] border border-neutral-800 transition-all duration-300 flex items-center justify-between group shadow-subtle hover:bg-[#BDF208] hover:border-[#BDF208] hover:shadow-lime-glow hover:scale-102 cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#282532] text-[#BDF208] flex items-center justify-center font-bold border border-neutral-700 group-hover:bg-[#17151B] group-hover:text-[#BDF208] group-hover:border-transparent transition-all shrink-0">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-base font-black text-white group-hover:text-[#17151B] transition-colors">
                    LinkedIn
                  </div>
                  <span className="text-[11px] font-medium text-neutral-400 group-hover:text-[#17151B] transition-colors">
                    Company Page
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-[#17151B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </a>

            {/* Instagram Card */}
            <a
              href={CONTACT_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 rounded-2xl bg-[#1D1B24] border border-neutral-800 transition-all duration-300 flex items-center justify-between group shadow-subtle hover:bg-[#BDF208] hover:border-[#BDF208] hover:shadow-lime-glow hover:scale-102 cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#282532] text-[#BDF208] flex items-center justify-center font-bold border border-neutral-700 group-hover:bg-[#17151B] group-hover:text-[#BDF208] group-hover:border-transparent transition-all shrink-0">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-base font-black text-white group-hover:text-[#17151B] transition-colors">
                    Instagram
                  </div>
                  <span className="text-[11px] font-medium text-neutral-400 group-hover:text-[#17151B] transition-colors">
                    Official Profile
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-[#17151B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${CONTACT_CONFIG.email}`}
              className="p-5 sm:p-6 rounded-2xl bg-[#1D1B24] border border-neutral-800 transition-all duration-300 flex items-center justify-between group shadow-subtle hover:bg-[#BDF208] hover:border-[#BDF208] hover:shadow-lime-glow hover:scale-102 cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#282532] text-[#BDF208] flex items-center justify-center font-bold border border-neutral-700 group-hover:bg-[#17151B] group-hover:text-[#BDF208] group-hover:border-transparent transition-all shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-base font-black text-white group-hover:text-[#17151B] transition-colors">
                    Email
                  </div>
                  <span className="text-[11px] font-medium text-neutral-400 group-hover:text-[#17151B] transition-colors">
                    Direct Inquiry
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-[#17151B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </a>
          </div>

          {/* Legal & Regulatory Navigation Bar */}
          <div className="p-5 rounded-2xl bg-[#1D1B24] border border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-white font-bold text-xs sm:text-sm">
              <ShieldCheck className="w-4 h-4 text-[#BDF208]" />
              <span>Legal, Privacy & Compliance:</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-semibold text-neutral-400">
              <button
                onClick={() => setLegalDoc('privacy')}
                className="hover:text-[#BDF208] hover:underline transition flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-[#BDF208]" />
                <span>Privacy Policy</span>
              </button>

              <button
                onClick={() => setLegalDoc('terms')}
                className="hover:text-[#BDF208] hover:underline transition flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-[#BDF208]" />
                <span>Terms of Service</span>
              </button>

              <button
                onClick={() => setLegalDoc('cookies')}
                className="hover:text-[#BDF208] hover:underline transition flex items-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5 text-[#BDF208]" />
                <span>Cookie Policy</span>
              </button>

              <button
                onClick={() => setLegalDoc('security')}
                className="hover:text-[#BDF208] hover:underline transition flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#BDF208]" />
                <span>Security Standards</span>
              </button>
            </div>
          </div>

          {/* Copyright & Identity Line */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-800 text-neutral-500 text-[11px]">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-[#201D25] flex items-center justify-center p-1 border border-neutral-700">
                <img src="/pluotos-logo.png" alt="PLUOTOS AI" className="w-4 h-4 object-contain" />
              </div>
              <span className="font-bold text-white">
                PLUOTOS AI Automation Agency
              </span>
              <span>• © {new Date().getFullYear()} All rights reserved.</span>
            </div>

            <div className="flex items-center gap-1 text-neutral-400">
              <span>Automate Smarter. Grow Faster.</span>
              <span>•</span>
              <span className="flex items-center gap-1 font-semibold text-white">
                Built with <Heart className="w-3 h-3 text-[#BDF208] fill-[#BDF208]" /> for High-Growth Businesses
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Full Legal Content Modal */}
      <LegalModal type={legalDoc} onClose={() => setLegalDoc(null)} />
    </footer>
  );
};
