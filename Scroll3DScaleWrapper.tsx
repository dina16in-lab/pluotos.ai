import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface Scroll3DScaleWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Scroll3DScaleWrapper: React.FC<Scroll3DScaleWrapperProps> = ({
  children,
  className = '',
  id,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center', 'end start'],
  });

  // Smooth spring physics for fluid 3D expansion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001,
  });

  // Scale: starts small (0.86) as it scrolls into view, expands to full (1.0) at center
  const scale = useTransform(smoothProgress, [0, 0.45, 0.85, 1], [0.86, 1, 1, 0.95]);

  // Opacity: fades in cleanly
  const opacity = useTransform(smoothProgress, [0, 0.25, 0.9, 1], [0.15, 1, 1, 0.3]);

  // 3D Perspective Rotation: subtle tilt as it rises up
  const rotateX = useTransform(smoothProgress, [0, 0.45, 1], [5, 0, -2]);

  // Y-translation: smooth lift
  const y = useTransform(smoothProgress, [0, 0.45, 1], [60, 0, -30]);

  return (
    <div
      ref={containerRef}
      id={id}
      style={{ perspective: '1400px' }}
      className="w-full relative py-6 sm:py-10"
    >
      <motion.div
        style={{
          scale,
          opacity,
          rotateX,
          y,
          transformStyle: 'preserve-3d',
        }}
        className={`will-change-transform ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};
