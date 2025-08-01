
import type { CategoryData } from '../types';

const RingIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m4.93 19.07 1.41-1.41" />
    <path d="m17.66 6.34 1.41-1.41" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);


export const data: CategoryData = {
  category: {
    name: 'Teej',
    slug: 'teej',
    color: '#10B981',
    description: "Women's festival for marital bliss",
    icon: RingIcon,
  },
  quotes: []
};
