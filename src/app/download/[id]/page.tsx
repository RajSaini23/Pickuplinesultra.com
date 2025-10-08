
import * as React from 'react';
import { quotes } from '@/data';
import { notFound } from 'next/navigation';
import { DownloadClientPage } from './client-page';

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
