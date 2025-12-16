
'use client'

import { Button } from '@/components/ui/button'
import { WifiOff } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function OfflinePage() {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground p-8 text-center">
      <WifiOff className="h-24 w-24 text-destructive/80 mb-6" />
      <h1 className="text-4xl font-bold font-headline mb-2">You're Offline</h1>
      <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
        It seems you've lost your connection. Please check your internet and try again. Some pages may be available offline.
      </p>
      <div className="flex gap-4">
        <Button 
          variant="outline"
          onClick={() => window.location.reload()}
        >
          Retry Connection
        </Button>
        <Button 
          onClick={() => router.push('/')} 
        >
          Go to Homepage
        </Button>
      </div>
    </div>
  )
}
