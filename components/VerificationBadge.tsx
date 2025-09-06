'use client';

import { Shield } from 'lucide-react';

export function VerificationBadge() {
  return (
    <div className="verification-badge">
      <Shield size={12} />
      Verified
    </div>
  );
}
