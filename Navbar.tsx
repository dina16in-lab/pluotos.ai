import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Cpu, Sparkles } from 'lucide-react';
import { PageId, NAV_ITEMS } from '../../types/navigation';
import { CONTACT_CONFIG } from '../../config/contact';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBFBF9]/90 backdrop-blur-md border-b border-[#E8E7E3] py-3.5 shadow-subtle'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-[#17151B] flex items-center justify-center p-1.5 shadow-subtle group-hover:scale-105 transition-transform duration-200 border border-[#BDF208]/30">
              <img src="/pluotos-logo.png" alt="PLUOTOS AI Logo" className="w-7 h-7 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-[#17151B] flex items-center gap-1.5">
                PLUOTOS <span className="text-[#17151B] bg-[#BDF208] px-1.5 py-0.2 rounded-md font-black text-sm">AI</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#68636D] font-medium -mt-0.5">
                Automation Agency
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-semibold transition-all relative py-1 focus:outline-none ${
                    isActive
                      ? 'text-[#17151B]'
                      : 'text-[#68636D] hover:text-[#17151B]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#BDF208] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#BDF208] text-[#17151B] text-sm font-bold hover:bg-[#AEE200] hover:shadow-lime-glow transition-all duration-200 group border border-[#17151B]/10"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#17151B] hover:bg-[#F4F4F0] transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-white/95 backdrop-blur-lg border border-[#E8E7E3] rounded-2xl shadow-elevated flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2.5 text-left text-sm font-semibold rounded-xl transition ${
                    isActive
                      ? 'bg-[#F7FDE6] text-[#17151B] border border-[#BDF208]/40'
                      : 'text-[#68636D] hover:bg-[#F4F4F0] hover:text-[#17151B]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-2 border-t border-[#E8E7E3] flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 rounded-xl bg-[#BDF208] text-[#17151B] text-sm font-bold hover:bg-[#AEE200] transition text-center"
              >
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
