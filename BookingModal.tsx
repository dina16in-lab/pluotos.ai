import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, Sparkles, ArrowRight, Shield } from 'lucide-react';
import { BookingFormData } from '../../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    companyName: '',
    industry: 'Dental Clinic',
    monthlyRepetitiveHours: '10 - 25 hrs/week',
    automationGoal: 'WhatsApp 24/7 patient booking & reminders',
    preferredDate: '2026-11-26',
    preferredTime: '10:00 AM (EST)'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const industries = [
    'Instagram Reel Creator / Influencer',
    'Dental Clinic / Healthcare Practice',
    'Real Estate Agency / Developer',
    'E-commerce & D2C Brand',
    'B2B Service Agency / Consulting',
    'Other High-Growth Business'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-[#E8E4EE] shadow-elevated relative max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#68636D] hover:bg-[#F3EEF9] hover:text-[#17151B] transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EEF9] text-xs font-semibold text-[#9F7ACB] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>30-Min Strategy Call</span>
            </div>

            <h3 className="text-2xl font-extrabold text-[#17151B] mb-1.5">
              Engineer Your Automation Blueprint
            </h3>
            <p className="text-xs sm:text-sm text-[#68636D] mb-6">
              Tell us about your team's operational bottlenecks. We will map a custom n8n & WhatsApp pipeline before our call.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#17151B] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Dr. Julian Vance"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E4EE] text-xs sm:text-sm focus:outline-none focus:border-[#9F7ACB] bg-[#FBFBF9]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#17151B] mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="julian@clinic.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E4EE] text-xs sm:text-sm focus:outline-none focus:border-[#9F7ACB] bg-[#FBFBF9]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#17151B] mb-1">
                    Company / Practice Name
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Apex Smiles Dental"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E4EE] text-xs sm:text-sm focus:outline-none focus:border-[#9F7ACB] bg-[#FBFBF9]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#17151B] mb-1">
                    Industry Sector *
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E4EE] text-xs sm:text-sm focus:outline-none focus:border-[#9F7ACB] bg-[#FBFBF9]"
                  >
                    {industries.map((ind, i) => (
                      <option key={i} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#17151B] mb-1">
                  Primary Automation Goal or Bottleneck
                </label>
                <textarea
                  rows={2}
                  value={formData.automationGoal}
                  onChange={(e) => setFormData({ ...formData, automationGoal: e.target.value })}
                  placeholder="e.g. Stop losing WhatsApp leads outside working hours and automate calendar bookings."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E4EE] text-xs sm:text-sm focus:outline-none focus:border-[#9F7ACB] bg-[#FBFBF9]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-[#17151B] mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#9F7ACB]" />
                    Preferred Consultation Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E4EE] text-xs sm:text-sm focus:outline-none focus:border-[#9F7ACB] bg-[#FBFBF9]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#17151B] mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#9F7ACB]" />
                    Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E4EE] text-xs sm:text-sm focus:outline-none focus:border-[#9F7ACB] bg-[#FBFBF9]"
                  >
                    <option>09:30 AM (EST)</option>
                    <option>11:00 AM (EST)</option>
                    <option>02:00 PM (EST)</option>
                    <option>04:30 PM (EST)</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#9F7ACB] text-white text-sm font-bold hover:bg-[#8F6AB9] shadow-premium transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Confirm Strategy Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#68636D] text-center pt-1">
                <Shield className="w-3.5 h-3.5 text-[#9F7ACB]" />
                <span>Zero sales pressure • Frontend simulation preview • Strict NDA privacy</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-3xl bg-[#F3EEF9] text-[#9F7ACB] flex items-center justify-center mx-auto mb-5 shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-[#17151B] mb-2">
              Strategy Session Reserved!
            </h3>

            <p className="text-sm text-[#68636D] max-w-md mx-auto mb-6">
              Thank you, <strong className="text-[#17151B]">{formData.fullName || 'there'}</strong>! Our senior automation architect is preparing a custom workflow blueprint for{' '}
              <strong className="text-[#9F7ACB]">{formData.industry}</strong>.
            </p>

            <div className="bg-[#F6F4F8] p-4 rounded-2xl border border-[#E8E4EE] text-left text-xs space-y-2 mb-6 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-[#68636D]">Target Date:</span>
                <span className="font-semibold text-[#17151B]">{formData.preferredDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#68636D]">Slot:</span>
                <span className="font-semibold text-[#17151B]">{formData.preferredTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#68636D]">Confirmation Dispatched:</span>
                <span className="font-mono text-[#9F7ACB] font-semibold">{formData.email || 'Simulated Booking'}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-[#9F7ACB] text-white text-xs font-semibold hover:bg-[#8F6AB9] transition"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
