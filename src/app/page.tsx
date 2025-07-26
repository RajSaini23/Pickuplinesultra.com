import Link from 'next/link';
import { Cog, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { categories } from '@/lib/categories';

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link href={`/category/${category.slug}`} key={category.slug} className="group">
              <Card 
                className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
                style={{ '--category-color': category.color } as React.CSSProperties}
              >
                <CardHeader className="relative h-48 flex flex-col justify-between p-6 bg-[var(--category-color)] text-primary-foreground transition-transform duration-500 group-hover:scale-105">
                  <div className="text-6xl drop-shadow-lg">{category.emoji}</div>
                  <div>
                    <CardTitle className="font-headline text-3xl">{category.name}</CardTitle>
                    <CardDescription className="text-primary-foreground/80">{category.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
