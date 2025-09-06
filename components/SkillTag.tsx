'use client';

import { SkillTagProps } from '@/lib/types';

export function SkillTag({ variant, children }: SkillTagProps) {
  const baseClasses = "px-3 py-1 rounded-full text-sm font-medium";
  const variantClasses = {
    default: "bg-gradient-to-r from-orange-400 to-pink-400 text-white",
    premium: "bg-gradient-to-r from-yellow-400 to-orange-400 text-white"
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}
