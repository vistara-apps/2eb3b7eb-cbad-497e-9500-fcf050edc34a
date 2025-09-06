'use client';

import { useState } from 'react';
import { User, MapPin, Clock, DollarSign } from 'lucide-react';

interface Opportunity {
  id: string;
  title: string;
  company: string;
  avatar: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
}

const OPPORTUNITIES: Opportunity[] = [
  {
    id: '1',
    title: 'AI Prompt Engineer',
    company: 'TechFlow Solutions',
    avatar: '👩‍💻',
    location: 'Remote',
    type: 'Full-time',
    salary: '$65K - $85K',
    posted: '2 days ago'
  },
  {
    id: '2',
    title: 'Virtual Marketing Assistant',
    company: 'Growth Partners',
    avatar: '👨‍💼',
    location: 'Remote',
    type: 'Part-time',
    salary: '$25 - $35/hr',
    posted: '1 day ago'
  },
  {
    id: '3',
    title: 'Content Creator & Social Media Manager',
    company: 'Brand Builders',
    avatar: '👩‍🎨',
    location: 'Remote',
    type: 'Contract',
    salary: '$40 - $60/hr',
    posted: '3 days ago'
  }
];

export function CuratedOpportunities() {
  const [selectedOpportunity, setSelectedOpportunity] = useState<string | null>(null);

  return (
    <section className="py-16">
      <div className="glass-card p-8 rounded-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Curated Remote Opportunities</h2>
          <div className="flex gap-2">
            <button className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
              📊 Newest
            </button>
            <button className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
              💰 Highest Pay
            </button>
            <button className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
              ⭐ Featured
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {OPPORTUNITIES.map((opportunity) => (
            <div
              key={opportunity.id}
              className={`glass-card p-6 rounded-lg cursor-pointer transition-all duration-200 ${
                selectedOpportunity === opportunity.id
                  ? 'bg-opacity-20 border-blue-400'
                  : 'hover:bg-opacity-15'
              }`}
              onClick={() => setSelectedOpportunity(
                selectedOpportunity === opportunity.id ? null : opportunity.id
              )}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-2xl">
                    {opportunity.avatar}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {opportunity.title}
                    </h3>
                    <p className="text-blue-200 text-sm mb-2">{opportunity.company}</p>
                    <div className="flex items-center gap-4 text-xs text-blue-300">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {opportunity.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {opportunity.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign size={12} />
                        {opportunity.salary}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-blue-300 text-xs">{opportunity.posted}</span>
                  <div className="mt-2">
                    <button className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-3 py-1 rounded-full text-xs font-medium hover:from-green-500 hover:to-blue-500 transition-all duration-200">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>

              {selectedOpportunity === opportunity.id && (
                <div className="mt-4 pt-4 border-t border-white border-opacity-20">
                  <p className="text-blue-100 text-sm mb-3">
                    Join our team as an {opportunity.title.toLowerCase()} and help shape the future of remote work. 
                    We're looking for passionate individuals who thrive in collaborative environments.
                  </p>
                  <div className="flex gap-2">
                    <button className="btn-primary text-sm px-4 py-2">
                      View Details
                    </button>
                    <button className="btn-secondary text-sm px-4 py-2">
                      Save for Later
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button className="btn-secondary">
            View All Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}
