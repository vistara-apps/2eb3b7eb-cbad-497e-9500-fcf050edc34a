// User types
export interface User {
  userId: string;
  farcasterId: string;
  createdAt: string;
  progress: Record<string, any>;
}

// Listing types
export interface Listing {
  listingId: string;
  title: string;
  description: string;
  url: string;
  category: string;
  verified: boolean;
  createdAt: string;
  tags: string[];
  earnings?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
}

// Micro-skill guide types
export interface MicroSkillGuide {
  guideId: string;
  title: string;
  content: string;
  apiUrl?: string;
  tags: string[];
  createdAt: string;
  isPremium?: boolean;
  estimatedTime?: string;
}

// Competency check types
export interface CompetencyCheck {
  checkId: string;
  skill: string;
  assessmentUrl: string;
  verified: boolean;
  userId: string;
}

// Component prop types
export interface ArticleCardProps {
  variant: 'listing' | 'guide';
  data: Listing | MicroSkillGuide;
  onClick?: () => void;
}

export interface SkillTagProps {
  variant: 'default' | 'premium';
  children: React.ReactNode;
}

export interface CtaButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}
