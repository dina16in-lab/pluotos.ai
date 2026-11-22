import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface ComparisonSectionProps {
  onOpenBooking: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onOpenBooking }) => {
  const comparisons = [
    {
      metric: 'Lead Inbound Response Time',
      manual: '3 to 6 hours (often next business day)',
      automated: 'Under 45 seconds via WhatsApp & Webhooks'
    },
    {
      metric: 'Patient / Client Scheduling',
      manual: 'Manual back-and-forth calls, frequent missed calls & no-shows',
      automated: 'Self-serve 24/7 calendar sync with automated multi-channel reminders'
    },
    {
      metric: 'Cross-System Data Entry',
      manual: 'Copy-pasting leads from email to CRM, spreadsheets, and Slack',
      automated: 'Instant n8n event synchronization with 100% field accuracy'
    },
    {
      metric: 'Reel & Social Inbound Capture',
      manual: 'Unread Instagram DMs, lost link requests, delayed sales handoffs',
      automated: 'Instant automated DM trigger, phone capture & WhatsApp funnel'
    },
    {
      metric: 'Operational Cost Scaling',
      manual: 'Hire additional full-time administrative staff as volume grows',
      automated: 'Scales from 10 to 10,000 tasks/day at virtually zero marginal cost'
    }
  ];

  return (
    <section className="py-24 bg-[#F6F4F8]/40 border-t border-[#E8E4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEF9] border border-[#9F7ACB]/30 text-xs font-semibold text-[#9F7ACB] mb-4">
            <span>Operational Transformation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17151B] tracking-tight mb-4">
            Manual Chaos <span className="text-[#68636D]">vs.</span>{' '}
            <span className="text-[#9F7ACB]">PLUOTOS Automation</span>
          </h2>

          <p className="text-base sm:text-lg text-[#68636D]">
            See the concrete difference between traditional administrative burden and our orchestrated intelligent pipelines.
          </p>
        </div>

        {/* Comparison Table / Grid */}
        <div className="bg-white rounded-3xl border border-[#E8E4EE] shadow-elevated overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-[#FBFBF9] p-4 sm:p-5 border-b border-[#E8E4EE] text-xs font-bold uppercase tracking-wider text-[#17151B]">
            <div className="md:col-span-4 text-left">Workflow Domain</div>
            <div className="md:col-span-4 text-rose-500 flex items-center gap-1.5">
              <XCircle className="w-4 h-4" /> Traditional Manual Operations
            </div>
            <div className="md:col-span-4 text-[#9F7ACB] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> PLUOTOS AI Architecture
            </div>
          </div>

          <div className="divide-y divide-[#E8E4EE]">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 gap-3 items-center hover:bg-[#F3EEF9]/20 transition-colors"
              >
                <div className="md:col-span-4 font-bold text-sm text-[#17151B]">
                  {item.metric}
                </div>

                <div className="md:col-span-4 text-xs text-[#68636D] bg-rose-50/50 p-3 rounded-xl border border-rose-100 flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>{item.manual}</span>
                </div>

                <div className="md:col-span-4 text-xs font-medium text-[#17151B] bg-[#F3EEF9]/60 p-3 rounded-xl border border-[#9F7ACB]/20 flex items-start gap-2">
                  <span className="text-[#9F7ACB] font-bold shrink-0">✓</span>
                  <span>{item.automated}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#FBFBF9] border-t border-[#E8E4EE] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#68636D] text-center sm:text-left">
              Eliminate up to <strong>90% of routine administrative tasks</strong> in your first 30 days.
            </span>
            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-xl bg-[#9F7ACB] text-white text-xs font-semibold hover:bg-[#8F6AB9] transition shadow-subtle flex items-center gap-2"
            >
              <span>Audit Your Operational Leakage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
