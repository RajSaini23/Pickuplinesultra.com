
import type { CategoryData } from '../types';

const LotusIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <path d="M12 2v2" />
    <path d="M4.2 10.2s1.5-2 7.8-2 7.8 2 7.8 2" />
    <path d="M12 14v6" />
    <path d="M6.3 7.9A9.6 9.6 0 0 1 12 6c2 0 3.9.6 5.7 1.9" />
    <path d="M5 14s-1-2-1-4 2-4 4-4" />
    <path d="M19 14s1-2 1-4-2-4-4-4" />
  </svg>
);


export const data: CategoryData = {
  category: {
    name: 'Buddha Purnima',
    slug: 'buddha-purnima',
    color: '#F97316',
    description: 'Birth, enlightenment, and death of Buddha',
    icon: LotusIcon,
  },
  quotes: []
};
