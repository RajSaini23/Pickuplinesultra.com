
import { Heart } from 'lucide-react';
import type { CategoryData } from '../types';

export const data: CategoryData = {
  category: {
    name: 'Romantic',
    slug: 'romantic',
    color: '#F44336',
    description: 'For the lovers and dreamers.',
    icon: Heart,
  },
  quotes: [
    { id: 1, hinglish: 'Tum ho toh sab kuch hai.', english: 'If you are here, I have everything.', emoji: '💖' },
    { id: 2, hinglish: 'Dil ki baatein dil hi jaane.', english: 'Only the heart knows the matters of the heart.', emoji: '💌' },
    { id: 3, hinglish: 'Ek cup chai, aur tum.', english: 'A cup of tea, and you.', emoji: '☕' },
  ]
};
