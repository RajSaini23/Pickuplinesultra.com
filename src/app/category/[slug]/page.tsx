
import Link from 'next/link';
import { ArrowLeft, Heart, Bookmark, Copy, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { categories } from '@/lib/categories.tsx';
import { quotes } from '@/lib/quotes';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((c) => c.slug === params.slug);
  const categoryQuotes = quotes.filter((q) => q.category === params.slug);

  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <h2 className="text-2xl font-bold">Category Not Found</h2>
        <p className="text-muted-foreground">The category you're looking for doesn't exist.</p>
        <Link href="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 flex items-center p-4 border-b bg-background/80 backdrop-blur-sm">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-2xl font-bold font-headline ml-4">{category.name}</h1>
      </header>

      <main className="flex-grow p-4 md:p-6">
        <div className="space-y-6 max-w-2xl mx-auto">
          {categoryQuotes.map((quote) => (
            <Card key={quote.id} className="shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl active:scale-[0.98] active:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-grow">
                    <p className="font-headline text-2xl mb-2 font-semibold" lang="hi">{quote.hinglish}</p>
                    <p className="text-muted-foreground italic">"{quote.english}"</p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex items-center justify-end space-x-1 text-muted-foreground">
                  <Button variant="ghost" size="icon" className="hover:text-rose-500 hover:bg-rose-500/10 rounded-full active:scale-95">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-amber-500 hover:bg-amber-500/10 rounded-full active:scale-95">
                    <Bookmark className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-sky-500 hover:bg-sky-500/10 rounded-full active:scale-95">
                    <Copy className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-emerald-500 hover:bg-emerald-500/10 rounded-full active:scale-95">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
