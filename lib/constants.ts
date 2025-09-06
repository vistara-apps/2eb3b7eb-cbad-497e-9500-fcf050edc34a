import { Listing, MicroSkillGuide } from './types';

// Mock data for curated listings
export const MOCK_LISTINGS: Listing[] = [
  {
    listingId: '1',
    title: 'AI Prompt Engineering',
    description: 'Create effective prompts for AI models and earn $25-50/hour',
    url: 'https://example.com/ai-prompts',
    category: 'AI & Tech',
    verified: true,
    createdAt: '2024-01-15',
    tags: ['AI', 'Writing', 'Remote'],
    earnings: '$25-50/hr',
    difficulty: 'Intermediate'
  },
  {
    listingId: '2',
    title: 'Virtual Assistant Services',
    description: 'Provide administrative support remotely for growing businesses',
    url: 'https://example.com/va-services',
    category: 'Administrative',
    verified: true,
    createdAt: '2024-01-14',
    tags: ['Admin', 'Communication', 'Organization'],
    earnings: '$15-30/hr',
    difficulty: 'Beginner'
  },
  {
    listingId: '3',
    title: 'Content Creation & Social Media',
    description: 'Create engaging content for brands and manage social presence',
    url: 'https://example.com/content-creation',
    category: 'Marketing',
    verified: true,
    createdAt: '2024-01-13',
    tags: ['Content', 'Social Media', 'Creative'],
    earnings: '$20-40/hr',
    difficulty: 'Intermediate'
  }
];

// Mock data for micro-skill guides
export const MOCK_GUIDES: MicroSkillGuide[] = [
  {
    guideId: '1',
    title: 'Mastering ChatGPT for Business',
    content: 'Learn advanced prompt engineering techniques to maximize AI productivity...',
    tags: ['AI', 'Productivity', 'Business'],
    createdAt: '2024-01-15',
    isPremium: false,
    estimatedTime: '15 min'
  },
  {
    guideId: '2',
    title: 'Freelance Platform Optimization',
    content: 'Optimize your profiles on Upwork, Fiverr, and other platforms...',
    tags: ['Freelancing', 'Marketing', 'Profile'],
    createdAt: '2024-01-14',
    isPremium: true,
    estimatedTime: '20 min'
  },
  {
    guideId: '3',
    title: 'Remote Work Communication',
    content: 'Master the art of professional remote communication...',
    tags: ['Communication', 'Remote', 'Professional'],
    createdAt: '2024-01-13',
    isPremium: false,
    estimatedTime: '12 min'
  }
];

// Categories for filtering
export const CATEGORIES = [
  'All',
  'AI & Tech',
  'Administrative',
  'Marketing',
  'Writing',
  'Design',
  'Development'
];

// Skill tags
export const SKILL_TAGS = [
  'AI',
  'Writing',
  'Design',
  'Marketing',
  'Admin',
  'Communication',
  'Development',
  'Analytics'
];
