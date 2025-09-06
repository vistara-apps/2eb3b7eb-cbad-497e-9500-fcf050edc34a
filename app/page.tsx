'use client';

import { useEffect } from 'react';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { AppShell } from '@/components/AppShell';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedSection } from '@/components/FeaturedSection';
import { CuratedOpportunities } from '@/components/CuratedOpportunities';

export default function HomePage() {
  const { setFrameReady } = useMiniKit();

  useEffect(() => {
    setFrameReady();
  }, [setFrameReady]);

  return (
    <AppShell>
      <HeroSection />
      <FeaturedSection />
      <CuratedOpportunities />
    </AppShell>
  );
}
