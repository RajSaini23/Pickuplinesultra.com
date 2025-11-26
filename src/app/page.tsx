import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PickupLineCard } from '@/components/PickupLineCard';
import { CategoryGrid } from '@/components/CategoryGrid';
import { FAQSection } from '@/components/FAQSection';
import { TrustStrip } from '@/components/TrustStrip';
import { HowItWorks } from '@/components/HowItWorks';

// SEO Metadata - CRITICAL for ranking
export const metadata: Metadata = {
  title: 'Pickup Lines Ultra – Romantic, Funny & Flirty Lines in Hinglish, Hindi & English',
  description: 'Express emotions with 1000+ pickup lines in 4 languages. Perfect for WhatsApp, Instagram, Tinder. Romantic, funny, cute & festival pickup lines for every moment.',
  keywords: 'pickup lines, hinglish pickup lines, romantic lines, flirty messages, hindi pickup lines, love quotes, tinder lines, whatsapp status, instagram captions',
  authors: [{ name: 'INDGROWSIVE' }],
  openGraph: {
    title: 'Pickup Lines Ultra – Your Hinglish Pickup Line Library',
    description: 'Romantic, funny & flirty pickup lines in 4 languages for WhatsApp, Instagram & real conversations.',
    url: 'https://pickuplinesultra.com',
    siteName: 'Pickup Lines Ultra',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pickup Lines Ultra – Express Your Emotions',
    description: 'Romantic, funny & flirty pickup lines in 4 languages',
    images: ['/twitter-card.png'],
  },
  alternates: {
    canonical: 'https://pickuplinesultra.com',
    languages: {
      'en': 'https://pickuplinesultra.com',
      'hi': 'https://pickuplinesultra.com/hi',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

// Structured Data for SEO/AEO/GEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Pickup Lines Ultra",
  "url": "https://pickuplinesultra.com",
  "description": "Express emotions with romantic, funny & flirty pickup lines in Hinglish, Hindi, English & Mandarin",
  "applicationCategory": "LifestyleApplication",
  "operatingSystem": "Web, Android, iOS",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "INDGROWSIVE"
  },
  "inLanguage": ["en", "hi", "zh"],
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://pickuplinesultra.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Trending lines for SEO content
const trendingLines = [
  { text: "Tumhare saath har pal khaas lagta hai.", lang: "Hinglish", category: "Romantic" },
  { text: "Are you WiFi? Because I feel a connection.", lang: "English", category: "Flirty" },
  { text: "तुम्हारी मुस्कान में जन्नत नज़र आती है।", lang: "Hindi", category: "Romantic" },
  { text: "Do you have a map? I keep getting lost in your eyes.", lang: "English", category: "Cute" },
  { text: "Tere bina zindagi adhuri si lagti hai.", lang: "Hinglish", category: "Romantic" },
  { text: "Is your name Google? Because you have everything I'm searching for.", lang: "English", category: "Flirty" },
  { text: "Kya tumhare paas bandaid hai? Kyunki main tumpe gir gaya.", lang: "Hinglish", category: "Funny" },
  { text: "You must be tired, because you've been running through my mind all day.", lang: "English", category: "Cute" },
  { text: "Happy Diwali! Tumhari tarah mere dil mein bhi roshan ho gayi hai.", lang: "Hinglish", category: "Festival" },
  { text: "Main tera hero ban sakta hun, bas ek chance de de.", lang: "Hinglish", category: "Proposal" },
  { text: "Are you a magician? Whenever I look at you, everyone else disappears.", lang: "English", category: "Romantic" },
  { text: "Tujhe dekha to yeh jaana sanam, pyaar hota hai deewana.", lang: "Hinglish", category: "Romantic" },
];

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#2a2a3a] to-[#1a1a2e]">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text Content */}
            <div className="text-center lg:text-left space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Pickup Lines Ultra
                </span>
                <br />
                <span className="text-white text-3xl md:text-4xl lg:text-5xl">
                  Your Hinglish Pickup Line Library
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Romantic, funny, flirty & festival pickup lines in 4 languages [web:12][web:15].
                Perfect for WhatsApp, Instagram, Tinder & real conversations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/app"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 text-white font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Open Web App
                </Link>
                <Link 
                  href="#categories"
                  className="px-8 py-4 rounded-xl border-2 border-blue-400 text-blue-400 font-semibold text-lg hover:bg-blue-400/10 transition-all duration-300"
                >
                  Browse Categories
                </Link>
              </div>
            </div>

            {/* Right: Floating Cards Preview */}
            <div className="relative h-[400px] lg:h-[500px] hidden lg:block">
              <div className="absolute top-10 left-10 animate-float">
                <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 shadow-2xl max-w-sm">
                  <p className="text-white text-lg mb-2">🌹 Tumhare saath har pal khaas lagta hai.</p>
                  <span className="text-pink-300 text-sm">Hinglish • Romantic</span>
                </div>
              </div>
              <div className="absolute top-32 right-5 animate-float-delayed">
                <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 shadow-2xl max-w-sm">
                  <p className="text-white text-lg mb-2">💫 Are you WiFi? Because I feel a connection.</p>
                  <span className="text-blue-300 text-sm">English • Flirty</span>
                </div>
              </div>
              <div className="absolute bottom-10 left-20 animate-float">
                <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 shadow-2xl max-w-sm">
                  <p className="text-white text-lg mb-2">✨ तुम्हारी मुस्कान में जन्नत है।</p>
                  <span className="text-purple-300 text-sm">Hindi • Romantic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustStrip />

      {/* CATEGORY GRID */}
      <section id="categories" className="py-20 bg-[#1a1a2e]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Explore Popular Categories
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Choose from diverse moods, festivals, and situations to express exactly what your heart wants to say.
          </p>
          <CategoryGrid />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* MULTI-LANGUAGE BLOCK */}
      <section className="py-20 bg-gradient-to-br from-[#2a2a3a] to-[#1a1a2e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Built for Multilingual Expression
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Pickup Lines Ultra helps you express in the language your heart uses – whether it's Hinglish on WhatsApp, English on Instagram, polite Hindi or Mandarin charm.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-4xl mb-4">🇮🇳</div>
              <h3 className="text-xl font-semibold text-white mb-2">Hinglish</h3>
              <p className="text-gray-400">Meme culture & chats</p>
            </div>
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-white mb-2">English</h3>
              <p className="text-gray-400">Global audience</p>
            </div>
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-4xl mb-4">🪔</div>
              <h3 className="text-xl font-semibold text-white mb-2">Hindi</h3>
              <p className="text-gray-400">Pure emotions</p>
            </div>
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-4xl mb-4">🇨🇳</div>
              <h3 className="text-xl font-semibold text-white mb-2">Mandarin</h3>
              <p className="text-gray-400">Future ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRENDING PICKUP LINES - CRITICAL FOR SEO */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Trending Pickup Lines
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Most popular lines used by our community to break the ice and express feelings.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {trendingLines.map((line, index) => (
              <div 
                key={index}
                className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20"
              >
                <p className="text-white text-lg mb-3 leading-relaxed">{line.text}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-blue-300">{line.lang}</span>
                  <span className="text-pink-300">{line.category}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/app"
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Explore 1000+ More Lines
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION - CRITICAL FOR AEO */}
      <FAQSection />

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-pink-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Express Your Emotions?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands using Pickup Lines Ultra to make meaningful connections every day.
          </p>
          <Link 
            href="/app"
            className="inline-block px-10 py-5 rounded-xl bg-white text-purple-600 font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl"
          >
            Start Using Free
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0f0f1a] py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Pickup Lines Ultra</h3>
              <p className="text-gray-400 text-sm">Your Emotion. Our Expression.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/app" className="hover:text-pink-400 transition-colors">Web App</Link></li>
                <li><Link href="#categories" className="hover:text-pink-400 transition-colors">Categories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-pink-400 transition-colors">About</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-pink-400 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/terms-of-service" className="hover:text-pink-400 transition-colors">Terms of Service</Link></li>
                 <li><Link href="/contact" className="hover:text-pink-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Pickup Lines Ultra. Developed by <Link href="https://indgrowsive.com" className="text-pink-400 font-semibold hover:underline">INDGROWSIVE</Link>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Home Button for App */}
      <Link 
        href="/app"
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-2xl hover:scale-110 transition-transform duration-300"
        aria-label="Open Web App"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </Link>
    </>
  );
}
