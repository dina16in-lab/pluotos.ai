import React from 'react';
import { X, ShieldCheck, FileText, Lock, Check } from 'lucide-react';
import { CONTACT_CONFIG } from '../../config/contact';

export type LegalDocType = 'privacy' | 'terms' | 'cookies' | 'security' | null;

interface LegalModalProps {
  type: LegalDocType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-[#E8E7E3] shadow-elevated relative max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#68636D] hover:bg-[#F4F4F0] hover:text-[#17151B] transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' && (
          <div className="space-y-4 text-xs sm:text-sm text-[#68636D] leading-relaxed">
            <div className="flex items-center gap-2 text-xs font-bold text-[#17151B] uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-[#17151B]" />
              <span>Legal Document</span>
            </div>
            <h3 className="text-2xl font-black text-[#17151B]">Privacy Policy</h3>
            <p className="text-[11px] text-[#68636D]">Last updated: November 2026</p>

            <h4 className="font-bold text-[#17151B] text-sm pt-2">1. Data Privacy Commitment</h4>
            <p>
              At {CONTACT_CONFIG.brandName}, we prioritize client and customer confidentiality. As an AI automation agency specializing in n8n workflows and Meta WhatsApp Cloud API integrations, we architect systems with strict zero-retention principles.
            </p>

            <h4 className="font-bold text-[#17151B] text-sm pt-2">2. Data We Process</h4>
            <p>
              When clients engage our agency, we only access the minimal API credentials and webhook endpoints required to deploy and maintain custom workflows. We do not sell, rent, or monetize client data or patient records.
            </p>

            <h4 className="font-bold text-[#17151B] text-sm pt-2">3. WhatsApp & AI Integration Compliance</h4>
            <p>
              All WhatsApp automations utilize the official Meta WhatsApp Cloud API in adherence to Meta’s Business Messaging Terms. AI models utilized in client pipelines process data via encrypted, stateless API endpoints without training on proprietary client data.
            </p>

            <h4 className="font-bold text-[#17151B] text-sm pt-2">4. Contact & Inquiries</h4>
            <p>
              For data protection questions, contact us directly via WhatsApp at <strong>{CONTACT_CONFIG.phoneDisplay}</strong> or email at <strong>{CONTACT_CONFIG.email}</strong>.
            </p>
          </div>
        )}

        {type === 'terms' && (
          <div className="space-y-4 text-xs sm:text-sm text-[#68636D] leading-relaxed">
            <div className="flex items-center gap-2 text-xs font-bold text-[#17151B] uppercase tracking-wider mb-2">
              <FileText className="w-4 h-4 text-[#17151B]" />
              <span>Legal Document</span>
            </div>
            <h3 className="text-2xl font-black text-[#17151B]">Terms of Service</h3>
            <p className="text-[11px] text-[#68636D]">Last updated: November 2026</p>

            <h4 className="font-bold text-[#17151B] text-sm pt-2">1. Services & Custom Architecture</h4>
            <p>
              {CONTACT_CONFIG.brandName} delivers bespoke automation engineering, n8n workflow development, and third-party application integrations. All workflows are built according to agreed project specifications.
            </p>

            <h4 className="font-bold text-[#17151B] text-sm pt-2">2. Intellectual Property & Workflow Ownership</h4>
            <p>
              Unless otherwise specified in a service contract, clients retain full ownership of their self-hosted n8n workflows, connected accounts, and proprietary business logic once project handover is completed.
            </p>

            <h4 className="font-bold text-[#17151B] text-sm pt-2">3. Third-Party Platforms</h4>
            <p>
              Automations rely on third-party APIs (Meta, OpenAI, Google, CRM providers). Clients are responsible for maintaining their active platform accounts and API access tiers.
            </p>

            <h4 className="font-bold text-[#17151B] text-sm pt-2">4. Disclaimers & SLA</h4>
            <p>
              This website serves as an informational agency showcase and lead-generation platform. Custom service level agreements (SLAs) are defined per project contract.
            </p>
          </div>
        )}

        {type === 'cookies' && (
          <div className="space-y-4 text-xs sm:text-sm text-[#68636D] leading-relaxed">
            <div className="flex items-center gap-2 text-xs font-bold text-[#17151B] uppercase tracking-wider mb-2">
              <Lock className="w-4 h-4 text-[#17151B]" />
              <span>Legal Document</span>
            </div>
            <h3 className="text-2xl font-black text-[#17151B]">Cookie & Tracking Notice</h3>
            <p className="text-[11px] text-[#68636D]">Last updated: November 2026</p>

            <p>
              This website is a frontend-only platform that does not use intrusive third-party tracking cookies or advertising pixels. Local session storage is strictly used for user interface preferences and client-side navigation states.
            </p>
          </div>
        )}

        {type === 'security' && (
          <div className="space-y-4 text-xs sm:text-sm text-[#68636D] leading-relaxed">
            <div className="flex items-center gap-2 text-xs font-bold text-[#17151B] uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-[#17151B]" />
              <span>Compliance & Security</span>
            </div>
            <h3 className="text-2xl font-black text-[#17151B]">Security & Compliance Standards</h3>
            <p className="text-[11px] text-[#68636D]">Last updated: November 2026</p>

            <div className="space-y-2 pt-2">
              <div className="flex items-start gap-2 bg-[#F4F4F0] p-3 rounded-xl border border-[#E8E7E3] text-xs text-[#17151B]">
                <Check className="w-4 h-4 text-[#17151B] shrink-0 mt-0.5 stroke-[3]" />
                <span>Encrypted Webhooks & TLS/SSL API Communication</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F4F4F0] p-3 rounded-xl border border-[#E8E7E3] text-xs text-[#17151B]">
                <Check className="w-4 h-4 text-[#17151B] shrink-0 mt-0.5 stroke-[3]" />
                <span>Zero-Retention LLM Processing for Sensitive Data</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F4F4F0] p-3 rounded-xl border border-[#E8E7E3] text-xs text-[#17151B]">
                <Check className="w-4 h-4 text-[#17151B] shrink-0 mt-0.5 stroke-[3]" />
                <span>Official Meta Cloud API Verified Senders</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F4F4F0] p-3 rounded-xl border border-[#E8E7E3] text-xs text-[#17151B]">
                <Check className="w-4 h-4 text-[#17151B] shrink-0 mt-0.5 stroke-[3]" />
                <span>Environment-Isolated Client API Credentials</span>
              </div>
            </div>
          </div>
        )}

        <div className="pt-4 mt-6 border-t border-[#E8E7E3] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#17151B] text-white text-xs font-bold hover:bg-neutral-800 transition"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
