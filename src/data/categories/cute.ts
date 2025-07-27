
import { Smile } from 'lucide-react';
import type { CategoryData } from '../types';

export const data: CategoryData = {
  category: {
    name: 'Cute',
    slug: 'cute',
    color: '#FF9800',
    description: 'For all things sweet and adorable.',
    icon: Smile,
  },
  quotes: [
    { id: 1, hinglish: 'Tum bahut cute ho.', english: "You're very cute.", emoji: '😊' },
    { id: 2, hinglish: 'Chhoti si zindagi hai, hass ke jiyo.', english: 'Life is short, live it smiling.', emoji: '😄' },
  ]
};
