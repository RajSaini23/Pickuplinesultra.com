
import { Heart, Gem, Smile, Cloud, Sparkles, Frown, HeartCrack, FlaskConical, Brain } from 'lucide-react';

export type Category = {
  name: string;
  slug: string;
  color: string;
  description: string;
};

export const categories: Category[] = [
    { name: 'Romantic', slug: 'romantic', color: '#F44336', description: 'For the lovers and dreamers.' },
    { name: 'Cute', slug: 'cute', color: '#FF9800', description: 'For all things sweet and adorable.' },
    { name: 'Crush', slug: 'crush', color: '#E91E63', description: 'When you have that special someone in mind.' },
    { name: 'Proposal', slug: 'proposal', color: '#03A9F4', description: 'Ready to pop the big question?' },
    { name: 'Dreamy', slug: 'dreamy', color: '#673AB7', description: 'Lost in thoughts and dreams.' },
    { name: 'Poetic', slug: 'poetic', color: '#9333ea', description: 'For the words that touch the soul.' },
    { name: 'Miss', slug: 'miss', color: '#5A6872', description: 'When you are missing someone.' },
    { name: 'Breakup', slug: 'breakup', color: '#5A6872', description: 'For the times of heartbreak.' },
    { name: 'Toxic', slug: 'toxic', color: '#84cc16', description: 'When things get complicated.' },
    { name: 'Clever', slug: 'clever', color: '#22d3ee', description: 'Witty and smart expressions.' },
];

export const CategoryIcon = ({ slug, className }: { slug: string, className?: string }) => {
  switch (slug) {
    case 'cute':
      return <Smile className={className} />;
    case 'crush':
      return <Heart className={className} />;
    case 'proposal':
      return <Gem className={className} />;
    case 'romantic':
      return <Heart className={className} />;
    case 'dreamy':
      return <Cloud className={className} />;
    case 'poetic':
      return <Sparkles className={className} />;
    case 'miss':
      return <Frown className={className} />;
    case 'breakup':
      return <HeartCrack className={className} />;
    case 'toxic':
      return <FlaskConical className={className} />;
    case 'clever':
      return <Brain className={className} />;
    default:
      return <span></span>;
  }
};
