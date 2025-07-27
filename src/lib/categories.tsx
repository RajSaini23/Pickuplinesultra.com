
import { Heart, Gem, Smile, Cloud } from 'lucide-react';

export type Category = {
  name: string;
  slug: string;
  color: string;
  description: string;
};

export const categories: Category[] = [
    { name: 'Romantic', slug: 'romantic', color: '#ef5350', description: 'For the lovers and dreamers.' },
    { name: 'Cute', slug: 'cute', color: '#ffb74d', description: 'For all things sweet and adorable.' },
    { name: 'Crush', slug: 'crush', color: '#ec407a', description: 'When you have that special someone in mind.' },
    { name: 'Proposal', slug: 'proposal', color: '#29b6f6', description: 'Ready to pop the big question?' },
    { name: 'Dreamy', slug: 'dreamy', color: '#7e57c2', description: 'Lost in thoughts and dreams.' },
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
