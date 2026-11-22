import React from 'react';
import { Instagram, Stethoscope, Building2, Briefcase, ShoppingBag, ArrowRight, CheckCircle2, PhoneMissed, MessageSquare, Sparkles } from 'lucide-react';
import { PageId } from '../types/navigation';
import { WorkflowAnimationCanvas } from '../components/visuals/WorkflowAnimationCanvas';

interface IndustrySolutionsPageProps {
  onNavigate: (page: PageId) => void;
}

export const IndustrySolutionsPage: React.FC<IndustrySolutionsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 sm:space-y-32">
      {/* Header */}
      <section className="pt-6 sm:pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7FDE6] border border-[#BDF208]/50 text-xs font-bold text-[#17151B] mb-5 shadow-subtle">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Tailored Target Audience Solutions</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#17151B] tracking-tight mb-6">
          Automations Built for <span className="bg-[#BDF208] px-2 py-0.5 rounded-xl">Your Industry.</span>
        </h1>
        <p className="text-base sm:text-xl text-[#68636D] max-w-2xl mx-auto leading-relaxed">
          Explore specialized automation solutions developed for Instagram creators, dental practices, and high-growth businesses.
        </p>
      </section>

      {/* SECTION A: Instagram Reel Creators */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E8E7E3] p-8 sm:p-14 shadow-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="w-12 h-12 rounded-2xl bg-[#F7FDE6] text-[#17151B] flex items-center justify-center font-bold mb-4 border border-[#BDF208]/50">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#17151B] bg-[#BDF208] px-2.5 py-1 rounded-md inline-block mb-3">
                Target Audience A
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17151B] tracking-tight mb-4">
                Instagram Reel Creators
              </h2>
              <p className="text-base text-[#68636D] leading-relaxed mb-6">
                When content creators publish viral Reels, hundreds of prospective brand partners, sponsors, and course buyers reach out in the comments and DMs. 
                Without automation, hot inquiries get buried and revenue is lost.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { title: 'Automated enquiry notifications', desc: 'Alert your team the moment a sponsor or client reaches out.' },
                  { title: 'WhatsApp alerts for incoming business enquiries', desc: 'Instant WhatsApp message sent to creator phone with lead details.' },
                  { title: 'Lead collection and organization', desc: 'Automatically store handles, emails, and inquiry details into your CRM or Google Sheets.' },
                  { title: 'Content-related workflow automation', desc: 'Trigger automated asset delivery when followers comment a keyword on your Reel.' },
                  { title: 'Custom integrations for creator tools', desc: 'Sync with Stan Store, Whop, Notion, Stripe, and Discord.' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#F4F4F0] border border-[#E8E7E3] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#17151B] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#17151B]">{item.title}</h4>
                      <p className="text-[11px] text-[#68636D]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 rounded-xl bg-[#BDF208] text-[#17151B] text-xs sm:text-sm font-bold hover:bg-[#AEE200] transition shadow-subtle flex items-center gap-2"
              >
                <span>Automate Your Creator Inquiries</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-5">
              <WorkflowAnimationCanvas scenario="email-to-whatsapp" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: Dental Clinics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E8E7E3] p-8 sm:p-14 shadow-elevated">
          <div className="w-12 h-12 rounded-2xl bg-[#F7FDE6] text-[#17151B] flex items-center justify-center font-bold mb-4 border border-[#BDF208]/50">
            <Stethoscope className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#17151B] bg-[#BDF208] px-2.5 py-1 rounded-md inline-block mb-3">
            Target Audience B
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17151B] tracking-tight mb-4">
            Dental Clinics & Healthcare Practices
          </h2>
          <p className="text-base text-[#68636D] leading-relaxed max-w-3xl mb-8">
            Simplify clinic management and customer communication. Front desks often miss urgent calls during peak hours or after-hours, leaving anxious patients to contact competing clinics.
          </p>

          {/* Example Scenario Highlight Box */}
          <div className="bg-[#17151B] text-white p-6 sm:p-8 rounded-2xl border border-neutral-800 mb-10">
            <div className="flex items-center gap-2 text-xs font-bold text-[#BDF208] uppercase tracking-wider mb-2">
              <PhoneMissed className="w-4 h-4" />
              <span>Example Scenario • Missed-Call Follow-up Automation</span>
            </div>
            <h3 className="text-xl font-bold mb-2">
              A patient calls a dental clinic, but nobody answers.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
              The automation system detects the missed call and instantly triggers a WhatsApp message to the caller, allowing them to continue their appointment enquiry, select emergency triage, or lock in a calendar slot.
            </p>

            {/* Visual Animated Step-by-Step Scenario */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-[#201D25] p-4 rounded-xl border border-neutral-800 text-xs">
                <span className="text-[#BDF208] font-bold block mb-1">01. Missed Call</span>
                <p className="text-neutral-400">Caller calls at 7:15 PM outside front desk hours.</p>
              </div>
              <div className="bg-[#201D25] p-4 rounded-xl border border-neutral-800 text-xs">
                <span className="text-[#BDF208] font-bold block mb-1">02. Webhook Event</span>
                <p className="text-neutral-400">PBX / Phone system alerts n8n with caller phone number.</p>
              </div>
              <div className="bg-[#201D25] p-4 rounded-xl border border-neutral-800 text-xs">
                <span className="text-[#BDF208] font-bold block mb-1">03. WhatsApp Triage</span>
                <p className="text-neutral-400">Meta API sends: "Sorry we missed your call! Looking to book an appointment?"</p>
              </div>
              <div className="bg-[#201D25] p-4 rounded-xl border border-neutral-800 text-xs">
                <span className="text-[#BDF208] font-bold block mb-1">04. Self-Booking</span>
                <p className="text-neutral-400">Patient books tomorrow's 10:30 AM slot directly on WhatsApp.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-[#F4F4F0] border border-[#E8E7E3]">
              <h4 className="text-xs font-bold text-[#17151B] mb-1">Appointment Enquiry Management</h4>
              <p className="text-[11px] text-[#68636D]">Route emergency vs routine checkups automatically.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#F4F4F0] border border-[#E8E7E3]">
              <h4 className="text-xs font-bold text-[#17151B] mb-1">Missed-Call Follow-up</h4>
              <p className="text-[11px] text-[#68636D]">Zero patients lost to voicemail or missed rings.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#F4F4F0] border border-[#E8E7E3]">
              <h4 className="text-xs font-bold text-[#17151B] mb-1">WhatsApp Notifications</h4>
              <p className="text-[11px] text-[#68636D]">Send intake forms, location pins, and prep guides.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#F4F4F0] border border-[#E8E7E3]">
              <h4 className="text-xs font-bold text-[#17151B] mb-1">Automated Reminders</h4>
              <p className="text-[11px] text-[#68636D]">Multi-touch reminders reduce clinic no-shows by 40%.</p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 rounded-xl bg-[#BDF208] text-[#17151B] text-xs sm:text-sm font-bold hover:bg-[#AEE200] transition shadow-subtle flex items-center gap-2"
          >
            <span>Discuss Dental Clinic Automation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* SECTION C: Other Businesses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#17151B] bg-[#BDF208] px-2.5 py-1 rounded-md inline-block mb-3">
            Target Audience C
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17151B] tracking-tight mb-4">
            Custom Automation for Other Businesses
          </h2>
          <p className="text-base text-[#68636D]">
            PLUOTOS AI also develops custom automation solutions for diverse commercial operations. Every solution is customized according to individual requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-3xl border border-[#E8E7E3] shadow-subtle">
            <div className="w-10 h-10 rounded-xl bg-[#F7FDE6] text-[#17151B] flex items-center justify-center font-bold mb-4 border border-[#BDF208]/50">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#17151B] mb-2">Small & Medium Businesses</h3>
            <p className="text-xs text-[#68636D] leading-relaxed">
              Automate invoice matching, vendor notifications, employee onboarding checklists, and internal communications.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E8E7E3] shadow-subtle">
            <div className="w-10 h-10 rounded-xl bg-[#F7FDE6] text-[#17151B] flex items-center justify-center font-bold mb-4 border border-[#BDF208]/50">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#17151B] mb-2">Marketing & Design Agencies</h3>
            <p className="text-xs text-[#68636D] leading-relaxed">
              Instantly provision client Slack channels, Google Drive folders, and contract sign-off pipelines when a deal closes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E8E7E3] shadow-subtle">
            <div className="w-10 h-10 rounded-xl bg-[#F7FDE6] text-[#17151B] flex items-center justify-center font-bold mb-4 border border-[#BDF208]/50">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#17151B] mb-2">Real Estate Businesses</h3>
            <p className="text-xs text-[#68636D] leading-relaxed">
              Qualify buyer budget and purchase timeline via WhatsApp; dispatch high-resolution property brochures automatically.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E8E7E3] shadow-subtle">
            <div className="w-10 h-10 rounded-xl bg-[#F7FDE6] text-[#17151B] flex items-center justify-center font-bold mb-4 border border-[#BDF208]/50">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#17151B] mb-2">E-Commerce Businesses</h3>
            <p className="text-xs text-[#68636D] leading-relaxed">
              Automate conversational parcel tracking, low stock supplier re-orders, and abandoned cart WhatsApp reminders.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E8E7E3] shadow-subtle md:col-span-2 lg:col-span-2">
            <div className="w-10 h-10 rounded-xl bg-[#F7FDE6] text-[#17151B] flex items-center justify-center font-bold mb-4 border border-[#BDF208]/50">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#17151B] mb-2">Service-Based Businesses</h3>
            <p className="text-xs text-[#68636D] leading-relaxed">
              Law firms, consultants, and accounting practices: automate client document collection, scheduled status updates, and calendar bookings without manual back-and-forth emails.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 rounded-xl bg-[#BDF208] text-[#17151B] text-sm font-extrabold hover:bg-[#AEE200] shadow-lime-glow transition-all"
          >
            Discuss Solutions for Your Industry
          </button>
        </div>
      </section>
    </div>
  );
};
