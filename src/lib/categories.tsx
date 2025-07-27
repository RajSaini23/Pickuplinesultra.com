
import { Heart, Gem, Smile, Cloud, Sparkles, Frown, HeartCrack, FlaskConical, Brain, Cake, MoreHorizontal, Zap, Flame, HeartPulse, HeartHandshake, Headphones, Plane, Eye } from 'lucide-react';

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
    { name: 'Comedy', slug: 'comedy', color: '#F57C00', description: 'For a good laugh.' },
    { name: 'Birthday', slug: 'birthday', color: '#009688', description: 'Celebrating another year of life.' },
    { name: 'Flirty', slug: 'flirty', color: '#EC407A', description: 'A little bit of playful charm.' },
    { name: 'Bold', slug: 'bold', color: '#FF5722', description: 'For the daring and confident.' },
    { name: 'Seductive', slug: 'seductive', color: '#D32F2F', description: 'For those moments of allure.' },
    { name: 'Tinder Ready', slug: 'tinder-ready', color: '#f45069', description: 'For your dating profile.' },
    { name: 'Apology', slug: 'apology', color: '#635bff', description: 'When you need to say sorry.' },
    { name: 'Commitment', slug: 'commitment', color: '#4a8baf', description: 'For long-term promises.' },
    { name: 'Long Distance', slug: 'long-distance', color: '#31d059', description: 'Bridging the miles.' },
    { name: 'Jealousy', slug: 'jealousy', color: '#f59e0b', description: 'The green-eyed monster.' },
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
    case 'comedy':
      return <Smile className={className} />;
    case 'birthday':
      return <Cake className={className} />;
    case 'flirty':
      return <MoreHorizontal className={className} />;
    case 'bold':
      return <Zap className={className} />;
    case 'seductive':
      return <Flame className={className} />;
    case 'tinder-ready':
      return <HeartPulse className={className} />;
    case 'apology':
      return <HeartHandshake className={className} />;
    case 'commitment':
      return <Headphones className={className} />;
    case 'long-distance':
      return <Plane className={className} />;
    case 'jealousy':
      return <Eye className={className} />;
    default:
      return <span></span>;
  }
};
