
import * as React from 'react';
import type { Metadata } from 'next';
import { categories, getCategory, getQuotesForCategory } from '@/data';
import { CategoryClientPage } from './client-page';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory(params.slug);

  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'The requested category of pickup lines does not exist.',
    };
  }

  return {
    title: `${category.name} Lines | Pickup Lines Ultra`,
    description: `Browse a collection of ${category.name.toLowerCase()} pickup lines. ${category.description}`,
    keywords: [category.name, 'pickup lines', 'hinglish quotes', 'dating lines'],
    openGraph: {
      title: `${category.name} Lines | Pickup Lines Ultra`,
      description: `Find the perfect ${category.name.toLowerCase()} pickup line.`,
    },
  };
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryData = getCategory(params.slug);
  const categoryQuotes = getQuotesForCategory(params.slug);

  if (!categoryData) {
    notFound();
  }

  // We are creating a new object without the `icon` property to pass to the client component.
  const { icon, ...category } = categoryData;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWorkSeries',
    name: `${category.name} Pickup Lines`,
    description: category.description,
    keywords: `${category.name}, pickup lines, hinglish quotes, dating lines`,
    author: {
      '@type': 'Organization',
      name: 'Pickup Lines Ultra',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key="category-jsonld"
      />
      <CategoryClientPage category={category} quotes={categoryQuotes} />
    </>
  );
}
