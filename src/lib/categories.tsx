
import { Heart, Gem, Flame, Laugh, Smile } from 'lucide-react';

export type Category = {
  name: string;
  slug: string;
  color: string;
  description: string;
};

export const categories: Category[] = [
    { name: 'Cute', slug: 'cute', color: '#ff8a65', description: 'For all things sweet and adorable.' },
    { name: 'Crush', slug: 'crush', color: '#f06292', description: 'When you have that special someone in mind.' },
    { name: 'Proposal', slug: 'proposal', color: '#4fc3f7', description: 'Ready to pop the big question?' },
    { name: 'Romantic', slug: 'romantic', color: '#e57373', description: 'For the lovers and dreamers.' },
    { name: 'Motivational', slug: 'motivational', color: '#81c784', description: 'Get up and get going!' },
    { name: 'Funny', slug: 'funny', color: '#aed581', description: 'For a good laugh.' },
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
    case 'motivational':
      return <Flame className={className} />;
    case 'funny':
      return <Laugh className={className} />;
    default:
      return <span></span>;
  }
};
