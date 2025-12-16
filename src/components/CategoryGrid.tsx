import { categories } from '@/data';
import { CategoryIcon } from '@/lib/categories';
import Link from 'next/link';

export function CategoryGrid() {
  const popularCategories = categories.slice(0, 8); // Display first 8 categories as an example

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {popularCategories.map((category) => (
        <Link 
          key={category.slug}
          href={`/category/${category.slug}`}
          className="group"
        >
          <div className="p-6 rounded-2xl text-center transition-all duration-300" style={{ backgroundColor: category.color }}>
            <CategoryIcon slug={category.slug} className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="font-bold text-lg text-white">{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
