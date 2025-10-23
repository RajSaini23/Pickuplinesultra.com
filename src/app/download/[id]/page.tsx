
import * as React from 'react';
import type { Metadata } from 'next';
import { quotes } from '@/data';
import { notFound } from 'next/navigation';
import { DownloadClientPage } from './client-page';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const quoteId = parseInt(params.id, 10);
  const quote = quotes.find(q => q.id === quoteId);

  if (!quote) {
    return {
      title: 'Quote Not Found',
      description: 'The requested quote image could not be found.',
    };
  }
  
  const shortQuote = quote.hinglish.substring(0, 50);

  return {
    title: `Download Quote: "${shortQuote}..."`,
    description: `Download a shareable image for the pickup line: "${quote.hinglish}"`,
    robots: {
      index: false, // Tell search engines not to index this page
      follow: false,
    }
  };
}

export async function generateStaticParams() {
  // We won't pre-render any download pages at build time.
  // They will be generated on-demand.
  return [];
}

export default function DownloadPage({ params }: { params: { id: string } }) {
  const quoteId = parseInt(params.id, 10);
  const quote = quotes.find(q => q.id === quoteId);

  if (isNaN(quoteId) || !quote) {
    notFound();
  }

  return <DownloadClientPage quote={quote} />;
}
