
export type Category = {
  name: string;
  slug: string;
  emoji: string;
  color: string;
  description: string;
};

export const categories: Category[] = [
  { name: 'Cute', slug: 'cute', emoji: '😊', color: '#F9A825', description: 'For all things sweet and adorable.' },
  { name: 'Crush', slug: 'crush', emoji: '😍', color: '#EC407A', description: 'When you have that special someone in mind.' },
  { name: 'Proposal', slug: 'proposal', emoji: '💍', color: '#29B6F6', description: 'Ready to pop the big question?' },
  { name: 'Romantic', slug: 'romantic', emoji: '❤️', color: '#EF476F', description: 'For the lovers and dreamers.' },
  { name: 'Motivational', slug: 'motivational', emoji: '🔥', color: '#66BB6A', description: 'Get up and get going!' },
  { name: 'Funny', slug: 'funny', emoji: '😂', color: '#10B981', description: 'For a good laugh.' },
];
