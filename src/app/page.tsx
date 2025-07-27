import Link from 'next/link';
import { Cog, Search, Smile, Heart, Gem, MessageSquare, Flame, Laugh } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import { categories } from '@/lib/categories';

const iconMap: { [key: string]: React.ReactNode } = {
  cute: <Smile className="h-10 w-10 text-white" />,
  crush: <Heart className="h-10 w-10 text-white" />,
  proposal: <Gem className="h-10 w-10 text-white" />,
  romantic: <Heart className="h-10 w-10 text-white" />,
  motivational: <Flame className="h-10 w-10 text-white" />,
  funny: <Laugh className="h-10 w-10 text-white" />,
  shayari: <MessageSquare className="h-10 w-10 text-white" />,
  'desi-swag': (
    <span role="img" aria-label="sunglasses" className="text-4xl">
      😎
    </span>
  ),
};

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 border-b bg-background/80 backdrop-blur-sm">
        <h1 className="text-2xl font-bold font-headline text-primary">Ecstatic</h1>
        <Link href="/settings">
          <Button variant="ghost" size="icon" aria-label="Settings">
            <Cog className="h-6 w-6" />
          </Button>
        </Link>
      </header>

      <main className="flex-grow p-4 md:p-6">
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for categories..."
              className="w-full pl-12 h-12 text-lg rounded-full shadow-sm"
            />
          </div>
        </div>

        <div className="space-y-4">
          {categories.map((category) => (
            <Link href={`/category/${category.slug}`} key={category.slug} className="group">
              <Card 
                className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 rounded-2xl border-none"
                style={{ '--category-color': category.color, '--category-color-light': category.colorLight } as React.CSSProperties}
              >
                <div className="flex items-center p-3 bg-[var(--category-color)]">
                  <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-[var(--category-color-light)] flex-shrink-0">
                    {iconMap[category.slug] || <span></span>}
                  </div>
                  <div className="ml-5">
                    <CardTitle className="font-bold text-2xl text-white tracking-wide">{category.name}</CardTitle>
                    <CardDescription className="text-white/80 font-medium uppercase text-xs tracking-wider">Category</CardDescription>
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
