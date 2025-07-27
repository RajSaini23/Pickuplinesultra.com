import * as React from 'react';
import { getCategory, getQuotesForCategory } from '@/data';
import { CategoryClientPage } from './client-page';
import { notFound } from 'next/navigation';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryData = getCategory(params.slug);
  const categoryQuotes = getQuotesForCategory(params.slug);

  if (!categoryData) {
    notFound();
  }

  // We are creating a new object without the `icon` property to pass to the client component.
  const { icon, ...category } = categoryData;

  return <CategoryClientPage category={category} quotes={categoryQuotes} />;
}
