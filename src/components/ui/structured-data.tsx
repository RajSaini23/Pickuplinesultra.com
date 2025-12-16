"use client";

import React from 'react';

// For the main application schema
export function AppSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Pickup Lines Ultra",
    "description": "1000+ romantic, cute & flirty pickup lines in Hinglish, Hindi, English & Mandarin",
    "url": "https://pickuplinesultra.com",
    "applicationCategory": "LifestyleApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "INDGROWSIVE",
      "url": "https://linkedin.com/in/indgrowsive-1b87262a0"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "12500",
      "bestRating": "5"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// For FAQ sections
interface FAQ {
  q: string;
  a: string;
}

export function FAQSchema({ faqs }: { faqs: FAQ[] }) {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// For the main organization schema
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'INDGROWSIVE',
    url: 'https://pickuplinesultra.com',
    logo: 'https://pickuplinesultra.com/icons/icon-512x512.png',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'indgrowsivestudio@gmail.com',
      contactType: 'Customer Support',
    },
  };

   return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
