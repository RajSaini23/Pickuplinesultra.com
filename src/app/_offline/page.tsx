
'use client'

import { Button } from '@/components/ui/button'
import { WifiOff } from 'lucide-react'

export default function OfflinePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground p-8 text-center">
      <WifiOff className="h-24 w-24 text-destructive/80 mb-6" />
      <h1 className="text-4xl font-bold font-headline mb-2">You're Offline</h1>
      <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
        It seems you've lost your connection. Please check your internet and try again.
      </p>
      <a 
        href="/" 
        className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-transform active:scale-95"
      >
        Go to Homepage
      </a>
    </div>
  )
}
