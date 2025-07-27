
import { Heart } from 'lucide-react';
import type { CategoryData } from '../types';

export const data: CategoryData = {
  category: {
    name: 'Crush',
    slug: 'crush',
    color: '#E91E63',
    description: 'When you have that special someone in mind.',
    icon: Heart,
  },
  quotes: [
    { id: 1, hinglish: 'Teri ek jhalak ke liye taraste hain hum.', english: 'I long for just one glimpse of you.', emoji: '😍' },
    { id: 2, hinglish: 'Tumse baat karke din ban jaata hai.', english: 'Talking to you makes my day.', emoji: '💬' },
  ]
};
