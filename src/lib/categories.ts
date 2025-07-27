export type Category = {
  name: string;
  slug: string;
  emoji: string; // Kept for other parts of the app, can be removed if not needed
  color: string; // main color
  colorLight: string; // lighter shade for icon bg
  description: string;
};

export const categories: Category[] = [
  { name: 'Cute', slug: 'cute', emoji: '😊', color: '#F9A825', colorLight: '#FBC02D', description: 'For all things sweet and adorable.' },
  { name: 'Crush', slug: 'crush', emoji: '😍', color: '#EC407A', colorLight: '#F06292', description: 'When you have that special someone in mind.' },
  { name: 'Proposal', slug: 'proposal', emoji: '💍', color: '#29B6F6', colorLight: '#4FC3F7', description: 'Ready to pop the big question?' },
  { name: 'Romantic', slug: 'romantic', emoji: '❤️', color: '#EF476F', colorLight: '#F26D8D', description: 'For the lovers and dreamers.' },
  { name: 'Motivational', slug: 'motivational', emoji: '🔥', color: '#F59E0B', colorLight: '#FABE58', description: 'Get up and get going!' },
  { name: 'Funny', slug: 'funny', emoji: '😂', color: '#10B981', colorLight: '#3DCAA4', description: 'For a good laugh.' },
];
