
import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

export type Category = {
  name: string;
  slug: string;
  color: string;
  description: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>> | ((props: any) => JSX.Element);
};

export type Quote = {
  id: number;
  hinglish: string;
  english: string;
  emoji: string;
};

export type CategoryData = {
  category: Category;
  quotes: Quote[];
};
