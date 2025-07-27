
import { Heart, Gem, Smile, Cloud, Sparkles, Frown, HeartCrack, FlaskConical, Brain, Cake, MoreHorizontal, Zap, Flame, HeartPulse, HeartHandshake, Headphones, Plane, Eye, Meh, Edit, ThumbsDown, Image, Skull, Clapperboard, Music2, CalendarHeart, Glasses } from 'lucide-react';

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
    { name: 'Self-love', slug: 'self-love', color: '#EC407A', description: 'Embracing your own worth.' },
    { name: 'Sarcasm', slug: 'sarcasm', color: '#8E44AD', description: 'For when you\'re feeling witty.' },
    { name: 'Wordplay', slug: 'wordplay', color: '#1ABC9C', description: 'Clever twists of language.' },
    { name: 'Worst Lines', slug: 'worst-lines', color: '#7F8C8D', description: 'Lines so bad, they\'re good.' },
    { name: 'Meme', slug: 'meme', color: '#E91E63', description: 'Internet culture in a line.' },
    { name: 'Nerdy', slug: 'nerdy', color: '#2196F3', description: 'For the intellectuals.' },
    { name: 'Dark Humor', slug: 'dark-humor', color: '#375a5f', description: 'For those with a wicked sense of humor.' },
    { name: 'Movie Lines', slug: 'movie-lines', color: '#d4a237', description: 'Iconic lines from the big screen.' },
    { name: 'Song Lyrics', slug: 'song-lyrics', color: '#C2185B', description: 'Lyrics that speak to the heart.' },
    { name: 'Anniversary', slug: 'anniversary', color: '#f57f51', description: 'Celebrating milestones together.' },
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
    case 'self-love':
      return <Sparkles className={className} />;
    case 'sarcasm':
      return <Meh className={className} />;
    case 'wordplay':
      return <Edit className={className} />;
    case 'worst-lines':
      return <ThumbsDown className={className} />;
    case 'meme':
      return <Image className={className} />;
    case 'nerdy':
      return <Glasses className={className} />;
    case 'dark-humor':
      return <Skull className={className} />;
    case 'movie-lines':
      return <Clapperboard className={className} />;
    case 'song-lyrics':
      return <Music2 className={className} />;
    case 'anniversary':
      return <CalendarHeart className={className} />;
    default:
      return <span></span>;
  }
};
