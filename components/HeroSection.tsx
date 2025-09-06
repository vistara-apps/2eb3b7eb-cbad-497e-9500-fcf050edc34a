'use client';

import { CtaButton } from './CtaButton';
import { TrendingUp, Users, Award } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="text-center py-16 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 floating-element">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl opacity-80 transform rotate-12"></div>
      </div>
      <div className="absolute top-20 right-20 floating-element" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-70"></div>
      </div>
      <div className="absolute bottom-20 left-20 floating-element" style={{ animationDelay: '4s' }}>
        <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl opacity-60 transform -rotate-12"></div>
      </div>

      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
          Gigs & Gains Guild
        </h1>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Discover legitimate online earning opportunities and master micro-skills 
          to boost your remote income potential.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <CtaButton variant="primary">
            🚀 Explore Opportunities
          </CtaButton>
          <CtaButton variant="secondary">
            📚 Browse Guides
          </CtaButton>
          <CtaButton variant="secondary">
            🏆 Take Assessment
          </CtaButton>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="metric-card text-center">
            <div className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2">
              <TrendingUp className="text-green-400" size={32} />
              119.90.08
            </div>
            <p className="text-blue-200 text-sm">Active Opportunities</p>
          </div>
          
          <div className="metric-card text-center">
            <div className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2">
              <Users className="text-blue-400" size={32} />
              2.5K+
            </div>
            <p className="text-blue-200 text-sm">Guild Members</p>
          </div>
          
          <div className="metric-card text-center">
            <div className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2">
              <Award className="text-yellow-400" size={32} />
              95%
            </div>
            <p className="text-blue-200 text-sm">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
