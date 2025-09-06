'use client';

import { useState } from 'react';
import { ArticleCard } from './ArticleCard';
import { MOCK_LISTINGS, MOCK_GUIDES, CATEGORIES } from '@/lib/constants';
import { Filter } from 'lucide-react';

export function FeaturedSection() {
  const [activeTab, setActiveTab] = useState<'listings' | 'guides'>('listings');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredListings = selectedCategory === 'All' 
    ? MOCK_LISTINGS 
    : MOCK_LISTINGS.filter(listing => listing.category === selectedCategory);

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Featured Content</h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
          Curated opportunities and expert guides to accelerate your online earning journey
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="glass-card p-2 rounded-lg">
          <button
            onClick={() => setActiveTab('listings')}
            className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
              activeTab === 'listings'
                ? 'bg-white bg-opacity-20 text-white'
                : 'text-blue-200 hover:text-white'
            }`}
          >
            💼 Job Listings
          </button>
          <button
            onClick={() => setActiveTab('guides')}
            className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
              activeTab === 'guides'
                ? 'bg-white bg-opacity-20 text-white'
                : 'text-blue-200 hover:text-white'
            }`}
          >
            📚 Skill Guides
          </button>
        </div>
      </div>

      {/* Category Filter for Listings */}
      {activeTab === 'listings' && (
        <div className="flex justify-center mb-8">
          <div className="glass-card p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <Filter size={16} className="text-blue-200" />
              <span className="text-blue-200 text-sm font-medium">Filter by Category</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-white bg-opacity-10 text-blue-200 hover:bg-opacity-20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeTab === 'listings' ? (
          filteredListings.map((listing) => (
            <ArticleCard
              key={listing.listingId}
              variant="listing"
              data={listing}
              onClick={() => window.open(listing.url, '_blank')}
            />
          ))
        ) : (
          MOCK_GUIDES.map((guide) => (
            <ArticleCard
              key={guide.guideId}
              variant="guide"
              data={guide}
              onClick={() => console.log('Open guide:', guide.title)}
            />
          ))
        )}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="btn-secondary">
          Load More {activeTab === 'listings' ? 'Opportunities' : 'Guides'}
        </button>
      </div>
    </section>
  );
}
