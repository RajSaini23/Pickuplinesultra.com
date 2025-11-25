
'use client'
import { useState, useEffect } from 'react'

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    // Check if already installed
    if (typeof window !== 'undefined' && window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
      return
    }

    // Detect iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    setIsIOS(isIOSDevice)

    // Check if dismissed recently (don't show for 7 days)
    const dismissed = localStorage.getItem('install-prompt-dismissed')
    if (dismissed) {
      const dismissedDate = new Date(dismissed)
      const daysSince = (Date.now() - dismissedDate.getTime()) / (1000 * 60 * 60 * 24)
      if (daysSince < 7) return
    }

    // Listen for install prompt (Android/Chrome)
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      // Show prompt after 30 seconds or 2 page interactions
      setTimeout(() => setShowPrompt(true), 30000)
    }

    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    // Analytics
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'pwa_install_prompt', {
        result: outcome
      })
    }

    setDeferredPrompt(null)
    setShowPrompt(false)
  }

  const handleDismiss = () => {
    localStorage.setItem('install-prompt-dismissed', new Date().toISOString())
    setShowPrompt(false)
  }

  if (isInstalled || (!showPrompt && !isIOS)) return null

  if (isIOS) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900 to-transparent p-6 z-50">
        <div className="max-w-md mx-auto bg-white rounded-xl p-6 shadow-2xl">
          <h3 className="font-bold text-lg mb-2">Install PickupLinesUltra</h3>
          <p className="text-sm text-gray-600 mb-4">
            Get instant offline access to 90,000+ pickup lines! 
          </p>
          <ol className="text-sm space-y-2 mb-4">
            <li>1. Tap the <strong>Share</strong> button ⬆️ below</li>
            <li>2. Scroll and tap <strong>Add to Home Screen</strong> ➕</li>
            <li>3. Tap <strong>Add</strong></li>
          </ol>
          <button 
            onClick={handleDismiss}
            className="w-full py-2 border border-gray-300 rounded-lg text-sm"
          >
            Maybe Later
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white rounded-xl shadow-2xl p-6 z-50 border-2 border-purple-500">
      <div className="flex items-start gap-4">
        <img src="/icons/icon-72x72.png" alt="App Icon" className="w-12 h-12 rounded-lg" />
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1">Install PickupLinesUltra</h3>
          <p className="text-sm text-gray-600 mb-3">
            Access 90,000+ pickup lines offline. No app store needed!
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleInstall}
              className="flex-1 bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Install App
            </button>
            <button
              onClick={handleDismiss}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              Not Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
