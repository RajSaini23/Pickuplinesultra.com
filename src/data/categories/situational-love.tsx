
import type { CategoryData } from '../types';

const SituationalLoveIcon = (props: any) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 4v16" />
    <path d="M12 4v16" />
    <path d="M16 4l-1.5 16" />
  </svg>
);


export const data: CategoryData = {
  category: {
    name: 'Situational Love',
    slug: 'situational-love',
    color: '#d35400',
    description: "For life's many situations.",
    icon: SituationalLoveIcon,
  },
  quotes: []
};
