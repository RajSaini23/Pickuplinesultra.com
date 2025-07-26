export type Category = {
  name: string;
  slug: string;
  emoji: string;
  color: string; // hex color
  description: string;
};

export const categories: Category[] = [
  { name: 'Desi Swag', slug: 'desi-swag', emoji: '😎', color: '#4B0082', description: 'Attitude and style, the desi way.' },
  { name: 'Romantic', slug: 'romantic', emoji: '❤️', color: '#EF476F', description: 'For the lovers and dreamers.' },
  { name: 'Sad', slug: 'sad', emoji: '😢', color: '#6B7280', description: 'When you\'re feeling blue.' },
  { name: 'Motivational', slug: 'motivational', emoji: '🔥', color: '#F59E0B', description: 'Get up and get going!' },
  { name: 'Funny', slug: 'funny', emoji: '😂', color: '#10B981', description: 'For a good laugh.' },
  { name: 'Shayari', slug: 'shayari', emoji: '✍️', color: '#0EA5E9', description: 'Poetic expressions of the heart.' },
];
