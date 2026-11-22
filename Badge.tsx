import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'lime' | 'subtle' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  icon,
  variant = 'lime',
  className = '',
}) => {
  const variantStyles = {
    lime: 'bg-[#F7FDE6] text-[#17151B] border-[#BDF208]/50 shadow-subtle',
    subtle: 'bg-[#F4F4F0] text-[#68636D] border-[#E8E7E3]',
    outline: 'bg-transparent text-[#17151B] border-[#BDF208]',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border transition-all ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="w-3.5 h-3.5 flex items-center justify-center text-[#17151B]">{icon}</span>}
      {children}
    </span>
  );
};
