import * as React from 'react';
import { getCategory, getQuotesForCategory } from '@/data';
import { CategoryClientPage } from './client-page';
import { notFound } from 'next/navigation';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategory(params.slug);
  const categoryQuotes = getQuotesForCategory(params.slug);

  if (!category) {
    notFound();
  }

  return <CategoryClientPage category={category} quotes={categoryQuotes} />;
}
