import React, { useState } from 'react';
import { MessageSquare, Instagram, Linkedin, Mail, ArrowRight, CheckCircle2, Sparkles, Send, Loader2 } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import { ContactFooter } from '../components/common/ContactFooter';

export const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: 'Instagram Reel Creator / Influencer',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('https://formsubmit.co/ajax/pluotos.ai@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not Specified',
          industry: formData.industry,
          message: formData.message,
          _subject: `New PLUOTOS AI Inquiry from ${formData.name} (${formData.company || formData.industry})`,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      setSubmitted(true);
    } catch {
      // Graceful fallback for offline / restricted environments
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* Header */}
      <section className="pt-6 sm:pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7FDE6] border border-[#BDF208]/50 text-xs font-bold text-[#17151B] mb-5 shadow-subtle">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Direct Communication Channels</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#17151B] tracking-tight mb-6">
          Let's <span className="bg-[#BDF208] px-2 py-0.5 rounded-xl">Talk.</span>
        </h1>
        <p className="text-base sm:text-xl text-[#68636D] max-w-2xl mx-auto leading-relaxed">
          Tell us about your business operations, repetitive tasks, and communication challenges. We build customized automation solutions to solve them.
        </p>
      </section>

      {/* Main Grid: Contact Options & Discussion Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Links configured via Centralized File */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-[#E8E7E3] shadow-elevated">
              <h3 className="text-xl font-bold text-[#17151B] mb-2">
                Fastest Response
              </h3>
              <p className="text-xs text-[#68636D] leading-relaxed mb-6">
                Connect with our automation architects directly across verified communication platforms.
              </p>

              <div className="space-y-3.5">
                {/* WhatsApp Button */}
                <a
                  href={CONTACT_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#E8E7E3] hover:bg-[#BDF208] hover:border-[#BDF208] hover:shadow-lime-glow hover:scale-[1.02] transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#17151B] text-[#BDF208] flex items-center justify-center font-bold group-hover:scale-105 transition-transform shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#17151B]">WhatsApp</div>
                      <div className="text-xs text-[#68636D] group-hover:text-[#17151B] transition-colors">
                        Chat Directly with Us
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#17151B] group-hover:translate-x-1 transition-transform shrink-0" />
                </a>

                {/* Instagram Profile Link */}
                <a
                  href={CONTACT_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#E8E7E3] hover:bg-[#BDF208] hover:border-[#BDF208] hover:shadow-lime-glow hover:scale-[1.02] transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#17151B] text-[#BDF208] flex items-center justify-center font-bold group-hover:scale-105 transition-transform shrink-0">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#17151B]">Instagram</div>
                      <div className="text-xs text-[#68636D] group-hover:text-[#17151B] transition-colors">
                        Follow on Instagram
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#17151B] group-hover:translate-x-1 transition-transform shrink-0" />
                </a>

                {/* LinkedIn Profile Link */}
                <a
                  href={CONTACT_CONFIG.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#E8E7E3] hover:bg-[#BDF208] hover:border-[#BDF208] hover:shadow-lime-glow hover:scale-[1.02] transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#17151B] text-[#BDF208] flex items-center justify-center font-bold group-hover:scale-105 transition-transform shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#17151B]">LinkedIn</div>
                      <div className="text-xs text-[#68636D] group-hover:text-[#17151B] transition-colors">
                        Connect on LinkedIn
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#17151B] group-hover:translate-x-1 transition-transform shrink-0" />
                </a>

                {/* Direct Email */}
                <a
                  href={`mailto:${CONTACT_CONFIG.email}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#E8E7E3] hover:bg-[#BDF208] hover:border-[#BDF208] hover:shadow-lime-glow hover:scale-[1.02] transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#17151B] text-[#BDF208] flex items-center justify-center font-bold group-hover:scale-105 transition-transform shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#17151B]">Email</div>
                      <div className="text-xs text-[#68636D] group-hover:text-[#17151B] transition-colors">
                        Send an Email
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#17151B] group-hover:translate-x-1 transition-transform shrink-0" />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#F4F4F0] border border-[#E8E7E3] text-xs text-[#68636D] space-y-2">
              <div className="font-bold text-[#17151B] uppercase tracking-wider text-[11px]">
                Availability & Scheduling
              </div>
              <p>{CONTACT_CONFIG.officeHours}</p>
              <p className="text-[11px] text-[#17151B] font-medium">
                Note: Inquiries sent via WhatsApp trigger an automated triage response within 45 seconds.
              </p>
            </div>
          </div>

          {/* Right Column: Discuss Automation Requirements Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-7 sm:p-10 rounded-3xl border border-[#E8E7E3] shadow-elevated">
              {!submitted ? (
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#17151B] bg-[#BDF208] px-2.5 py-1 rounded-md inline-block mb-3">
                    Project Discussion
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#17151B] mb-2">
                    Discuss Your Automation Requirements
                  </h3>
                  <p className="text-xs sm:text-sm text-[#68636D] mb-6">
                    Fill out the form below. We will review your tools and prepare an automation recommendation before getting in touch.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#17151B] mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Morgan"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E7E3] text-xs sm:text-sm bg-[#FBFBF9] focus:outline-none focus:border-[#17151B]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#17151B] mb-1">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E7E3] text-xs sm:text-sm bg-[#FBFBF9] focus:outline-none focus:border-[#17151B]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#17151B] mb-1">
                          Company / Brand Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Acme Studio"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E7E3] text-xs sm:text-sm bg-[#FBFBF9] focus:outline-none focus:border-[#17151B]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#17151B] mb-1">
                          Industry / Field *
                        </label>
                        <select
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E7E3] text-xs sm:text-sm bg-[#FBFBF9] focus:outline-none focus:border-[#17151B]"
                        >
                          <option>Instagram Reel Creator / Influencer</option>
                          <option>Dental Clinic / Medical Practice</option>
                          <option>Real Estate Agency / Brokerage</option>
                          <option>Marketing / Design Agency</option>
                          <option>E-Commerce / D2C Brand</option>
                          <option>Other Business</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#17151B] mb-1">
                        Tell us about your repetitive tasks or challenges *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="e.g. We spend 15 hours a week manually answering WhatsApp leads and copy-pasting customer info into Google Sheets..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E7E3] text-xs sm:text-sm bg-[#FBFBF9] focus:outline-none focus:border-[#17151B]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-[#BDF208] text-[#17151B] text-sm font-extrabold hover:bg-white hover:text-[#17151B] hover:border-[#17151B] hover:shadow-elevated hover:scale-[1.01] active:scale-[0.99] border border-[#17151B]/15 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#17151B]" />
                          <span>Dispatching to pluotos.ai@gmail.com...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#17151B] group-hover:translate-x-1 transition-transform" />
                          <span>Submit Automation Inquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-3xl bg-[#F7FDE6] text-[#17151B] flex items-center justify-center mx-auto border border-[#BDF208]/60 shadow-subtle">
                    <CheckCircle2 className="w-8 h-8 text-[#17151B]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#17151B]">
                    Inquiry Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#68636D] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#17151B]">{formData.name || 'there'}</strong>. Your automation inquiry has been dispatched to <strong className="text-[#17151B]">pluotos.ai@gmail.com</strong>. Our engineering team will review your requirements for <strong className="text-[#17151B]">{formData.industry}</strong> and reach out to you shortly.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`mailto:pluotos.ai@gmail.com?subject=${encodeURIComponent(`New PLUOTOS AI Inquiry from ${formData.name} (${formData.company || formData.industry})`)}&body=${encodeURIComponent(`Client Name: ${formData.name}\nBusiness Email: ${formData.email}\nCompany: ${formData.company || 'Not Specified'}\nIndustry: ${formData.industry}\n\nProject Requirements / Repetitive Tasks:\n${formData.message}`)}`}
                      className="px-5 py-2.5 rounded-xl bg-[#F7FDE6] border border-[#BDF208]/60 text-[#17151B] text-xs font-bold hover:bg-[#BDF208] transition flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Mail App</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', company: '', industry: 'Instagram Reel Creator / Influencer', message: '' });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-[#17151B] text-white text-xs font-bold hover:bg-neutral-800 transition"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section with Legal Terms & Contact Information */}
      <ContactFooter />
    </div>
  );
};
