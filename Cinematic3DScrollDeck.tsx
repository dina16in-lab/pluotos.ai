import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageId, NAV_ITEMS } from '../../types/navigation';
import { HomePage } from '../../pages/HomePage';
import { ServicesPage } from '../../pages/ServicesPage';
import { IndustrySolutionsPage } from '../../pages/IndustrySolutionsPage';
import { HowItWorksPage } from '../../pages/HowItWorksPage';
import { ContactPage } from '../../pages/ContactPage';
import { ChevronDown, ChevronUp, Layers, Sparkles } from 'lucide-react';

interface Cinematic3DScrollDeckProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const STAGES: { id: PageId; index: number; label: string; number: string }[] = [
  { id: 'home', index: 0, label: 'Home', number: '01' },
  { id: 'services', index: 1, label: 'Services', number: '02' },
  { id: 'industries', index: 2, label: 'Industry Solutions', number: '03' },
  { id: 'how-it-works', index: 3, label: 'How It Works', number: '04' },
  { id: 'contact', index: 4, label: 'Contact', number: '05' },
];

export const Cinematic3DScrollDeck: React.FC<Cinematic3DScrollDeckProps> = ({
  currentPage,
  onNavigate,
}) => {
  const currentIndex = STAGES.findIndex((s) => s.id === currentPage);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const isThrottled = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToStage = (newIndex: number) => {
    if (newIndex < 0 || newIndex >= STAGES.length) return;
    setScrollDirection(newIndex > currentIndex ? 'down' : 'up');
    onNavigate(STAGES[newIndex].id);
  };

  // Wheel listener: captures scroll gestures to zoom between stages
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // If user is inside an internal scrollable element that hasn't reached top/bottom, let them scroll
      const activeEl = document.getElementById(`stage-content-${currentPage}`);
      if (activeEl) {
        const isAtBottom = activeEl.scrollHeight - activeEl.scrollTop <= activeEl.clientHeight + 40;
        const isAtTop = activeEl.scrollTop <= 10;

        if (e.deltaY > 0 && !isAtBottom) return;
        if (e.deltaY < 0 && !isAtTop) return;
      }

      if (isThrottled.current) return;

      if (Math.abs(e.deltaY) > 35) {
        if (e.deltaY > 0 && currentIndex < STAGES.length - 1) {
          isThrottled.current = true;
          goToStage(currentIndex + 1);
          setTimeout(() => {
            isThrottled.current = false;
          }, 900);
        } else if (e.deltaY < 0 && currentIndex > 0) {
          isThrottled.current = true;
          goToStage(currentIndex - 1);
          setTimeout(() => {
            isThrottled.current = false;
          }, 900);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentIndex, currentPage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        goToStage(currentIndex + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        goToStage(currentIndex - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  // 3D Zoom Variants: zooms from deep space (small) into full screen (big)
  const variants = {
    initial: (direction: 'down' | 'up') => ({
      scale: direction === 'down' ? 0.35 : 1.4,
      opacity: 0,
      z: direction === 'down' ? -700 : 300,
      rotateX: direction === 'down' ? 12 : -10,
      filter: 'blur(10px)',
    }),
    animate: {
      scale: 1,
      opacity: 1,
      z: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: (direction: 'down' | 'up') => ({
      scale: direction === 'down' ? 1.35 : 0.45,
      opacity: 0,
      z: direction === 'down' ? 400 : -600,
      rotateX: direction === 'down' ? -10 : 10,
      filter: 'blur(8px)',
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const renderActiveStageComponent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={onNavigate} />;
      case 'services':
        return <ServicesPage onNavigate={onNavigate} />;
      case 'industries':
        return <IndustrySolutionsPage onNavigate={onNavigate} />;
      case 'how-it-works':
        return <HowItWorksPage onNavigate={onNavigate} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={onNavigate} />;
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[calc(100vh-80px)] min-h-[640px] overflow-hidden"
      style={{ perspective: '1600px' }}
    >
      {/* 3D Stage Background Glow in #BDF208 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#BDF208]/8 rounded-full blur-[140px] pointer-events-none -z-10" />



      {/* Right-Side 3D Spatial Stage Indicators */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-4 bg-white/80 backdrop-blur-md p-3 rounded-full border border-[#E8E7E3] shadow-elevated">
        <button
          onClick={() => goToStage(currentIndex - 1)}
          disabled={currentIndex === 0}
          className="p-1.5 rounded-full text-[#17151B] hover:bg-[#F4F4F0] disabled:opacity-30 disabled:cursor-not-allowed transition"
          aria-label="Previous Stage"
        >
          <ChevronUp className="w-4 h-4" />
        </button>

        <div className="flex flex-col gap-2.5">
          {STAGES.map((stage) => {
            const isActive = stage.id === currentPage;
            return (
              <button
                key={stage.id}
                onClick={() => goToStage(stage.index)}
                className="group relative flex items-center justify-center p-1 focus:outline-none"
                aria-label={`Go to ${stage.label}`}
              >
                <span
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-[#BDF208] ring-4 ring-[#BDF208]/30 scale-125'
                      : 'bg-[#E8E7E3] hover:bg-[#17151B]'
                  }`}
                />
                {/* Tooltip on hover */}
                <span className="absolute right-8 px-2.5 py-1 rounded-lg bg-[#17151B] text-white text-[10px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-subtle">
                  {stage.number}. {stage.label}
                </span>
              </button>
            );
          })}
        </div>

        <button
          onClick={() => goToStage(currentIndex + 1)}
          disabled={currentIndex === STAGES.length - 1}
          className="p-1.5 rounded-full text-[#17151B] hover:bg-[#F4F4F0] disabled:opacity-30 disabled:cursor-not-allowed transition"
          aria-label="Next Stage"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* 3D Animated Stage Portal */}
      <AnimatePresence mode="wait" custom={scrollDirection}>
        <motion.div
          key={currentPage}
          custom={scrollDirection}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full h-full flex flex-col justify-start"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div
            id={`stage-content-${currentPage}`}
            className="w-full h-full overflow-y-auto px-2 sm:px-6 scroll-smooth pb-20"
          >
            {renderActiveStageComponent()}
          </div>
        </motion.div>
      </AnimatePresence>


    </div>
  );
};
