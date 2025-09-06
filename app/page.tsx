'use client';

import { useEffect } from 'react';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { AppShell } from '@/components/AppShell';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedSection } from '@/components/FeaturedSection';
import { CuratedOpportunities } from '@/components/CuratedOpportunities';
import { PaymentDemo } from '@/components/PaymentDemo';

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
      
      {/* x402 Payment Demo Section */}
      <section className="mt-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            💳 x402 Payment Integration
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Experience seamless USDC payments on Base using the x402 protocol. 
            Connect your wallet and test the payment flow end-to-end.
          </p>
        </div>
        <PaymentDemo />
      </section>
    </AppShell>
  );
}
