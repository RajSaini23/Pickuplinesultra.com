
import { Heart, Gem, Smile, Cloud } from 'lucide-react';

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
    default:
      return <span></span>;
  }
};
