
import { Gem } from 'lucide-react';
import type { CategoryData } from '../types';

export const data: CategoryData = {
  category: {
    name: 'Proposal',
    slug: 'proposal',
    color: '#03A9F4',
    description: 'Ready to pop the big question?',
    icon: Gem,
  },
  quotes: [
    { id: 1, hinglish: 'Kya tum meri zindagi ka hissa banogi?', english: 'Will you be a part of my life?', emoji: '💍' },
    { id: 2, hinglish: 'Main tumhare bina adhoora hoon.', english: "I'm incomplete without you.", emoji: '❤️' }
  ]
};
