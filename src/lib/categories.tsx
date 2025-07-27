
import { categories } from '@/data';
import type { Category } from '@/data/types';

export const CategoryIcon = ({ slug, className }: { slug: string, className?: string }) => {
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return null;
  }

  const IconComponent = category.icon;
  return <IconComponent className={className} />;
};
