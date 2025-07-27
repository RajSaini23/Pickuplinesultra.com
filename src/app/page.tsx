
import Link from 'next/link';
import { Cog, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import { categories, CategoryIcon } from '@/lib/categories.tsx';

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

        <div className="flex flex-col gap-y-4">
          {categories.map((category) => (
            <Link href={`/category/${category.slug}`} key={category.slug} className="group">
              <Card 
                className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] active:shadow-md rounded-2xl border-none shadow-md h-24"
                style={{ backgroundColor: category.color } as React.CSSProperties}
              >
                <div className="flex items-center p-4 h-full">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/20 flex-shrink-0">
                    <CategoryIcon slug={category.slug} className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-5">
                    <CardTitle className="font-bold text-lg text-white">{category.name}</CardTitle>
                    <CardDescription className="text-sm text-white/80 tracking-wider">Category</CardDescription>
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
