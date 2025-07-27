
"use client";

import Link from 'next/link';
import { Menu, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import { categories, CategoryIcon } from '@/lib/categories.tsx';
import * as React from 'react';

const AppLogo = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="floating-logo"
  >
    <style>
      {`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
          100% { transform: translateY(0px); }
        }
        .floating-logo {
          animation: float 3s ease-in-out infinite;
        }
      `}
    </style>
    <rect width="160" height="160" rx="40" fill="#2A2A3A"/>
    <rect x="10" y="10" width="140" height="140" rx="30" stroke="#00BFFF" strokeWidth="3" strokeOpacity="0.4"/>
    <rect x="18" y="18" width="124" height="124" rx="22" stroke="#00BFFF" strokeWidth="4" strokeOpacity="0.8"/>

    <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{stopColor: '#90E0EF', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#00BFFF', stopOpacity: 1}} />
        </radialGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
    </defs>

    <g filter="url(#glow)" transform="translate(80, 80) rotate(45) translate(-80, -80)">
        <path d="M80 25 C 85 45, 105 50, 115 55 C 105 70, 95 80, 80 95 C 65 80, 55 70, 45 55 C 55 50, 75 45, 80 25 Z" fill="url(#grad1)"/>
    </g>
    <g transform="translate(80, 80) rotate(135) translate(-80, -80)">
        <path d="M80 25 C 85 45, 105 50, 115 55 C 105 70, 95 80, 80 95 C 65 80, 55 70, 45 55 C 55 50, 75 45, 80 25 Z" fill="url(#grad1)"/>
    </g>
    <g transform="translate(80, 80) rotate(225) translate(-80, -80)">
        <path d="M80 25 C 85 45, 105 50, 115 55 C 105 70, 95 80, 80 95 C 65 80, 55 70, 45 55 C 55 50, 75 45, 80 25 Z" fill="url(#grad1)"/>
    </g>
    <g transform="translate(80, 80) rotate(315) translate(-80, -80)">
        <path d="M80 25 C 85 45, 105 50, 115 55 C 105 70, 95 80, 80 95 C 65 80, 55 70, 45 55 C 55 50, 75 45, 80 25 Z" fill="url(#grad1)"/>
    </g>

    <path d="M80 65 L95 80 L80 95 L65 80 Z" fill="white"/>
</svg>
);


export default function Dashboard() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-muted/30 text-foreground">
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-primary text-primary-foreground">
        <AppLogo />
        <div className="relative flex-1 mx-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search categories..."
            className="w-full pl-10 h-10 bg-background text-foreground rounded-lg border-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Link href="/settings">
          <Button variant="ghost" size="icon" aria-label="Settings" className="text-white hover:bg-white/20">
            <Menu className="h-7 w-7" />
          </Button>
        </Link>
      </header>

      <div className="bg-primary px-4 md:px-6 pb-8">
        <h1 className="text-4xl font-bold text-white">Dashboard</h1>
      </div>

      <main className="flex-grow p-4 md:px-6 md:py-8 -mt-8">
        <div className="flex flex-col gap-y-4">
          {filteredCategories.map((category) => (
            <Link href={`/category/${category.slug}`} key={category.slug} className="group">
              <Card 
                className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] active:shadow-md rounded-2xl border-none shadow-md h-24 bg-card"
              >
                <div className="flex items-center p-4 h-full">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl flex-shrink-0" style={{ backgroundColor: category.color }}>
                    <CategoryIcon slug={category.slug} className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-5">
                    <CardTitle className="font-bold text-lg text-card-foreground">{category.name}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground tracking-wider opacity-80">Category</CardDescription>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
