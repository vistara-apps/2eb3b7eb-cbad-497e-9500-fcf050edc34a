'use client';

import { ArticleCardProps, Listing, MicroSkillGuide } from '@/lib/types';
import { Clock, ExternalLink, Star, Shield } from 'lucide-react';
import { SkillTag } from './SkillTag';
import { VerificationBadge } from './VerificationBadge';

export function ArticleCard({ variant, data, onClick }: ArticleCardProps) {
  const isListing = variant === 'listing';
  const listing = isListing ? (data as Listing) : null;
  const guide = !isListing ? (data as MicroSkillGuide) : null;

  return (
    <div 
      className="glass-card p-6 hover:bg-opacity-15 transition-all duration-200 cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-white font-semibold text-lg group-hover:text-blue-200 transition-colors duration-200">
          {data.title}
        </h3>
        {isListing && listing?.verified && <VerificationBadge />}
        {!isListing && guide?.isPremium && (
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <Star size={12} />
            Premium
          </div>
        )}
      </div>

      <p className="text-blue-100 text-sm mb-4 line-clamp-2">
        {isListing ? listing?.description : guide?.content}
      </p>

      {/* Metadata */}
      <div className="flex items-center gap-4 mb-4 text-xs text-blue-200">
        {isListing && listing?.earnings && (
          <span className="flex items-center gap-1">
            💰 {listing.earnings}
          </span>
        )}
        {isListing && listing?.difficulty && (
          <span className="flex items-center gap-1">
            📊 {listing.difficulty}
          </span>
        )}
        {!isListing && guide?.estimatedTime && (
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {guide.estimatedTime}
          </span>
        )}
        {isListing && listing?.category && (
          <span className="flex items-center gap-1">
            📂 {listing.category}
          </span>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {data.tags.slice(0, 3).map((tag) => (
          <SkillTag key={tag} variant={guide?.isPremium ? 'premium' : 'default'}>
            {tag}
          </SkillTag>
        ))}
      </div>

      {/* Action */}
      <div className="flex items-center justify-between">
        <span className="text-blue-200 text-xs">
          {new Date(data.createdAt).toLocaleDateString()}
        </span>
        <button className="text-white hover:text-blue-200 transition-colors duration-200 flex items-center gap-1 text-sm">
          {isListing ? 'View Opportunity' : 'Start Learning'}
          <ExternalLink size={14} />
        </button>
      </div>
    </div>
  );
}
