'use client';

import { CtaButtonProps } from '@/lib/types';

export function CtaButton({ variant, children, onClick, disabled = false }: CtaButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary"
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
