
'use client'

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900">
      <div className="text-center text-white p-8">
        <div className="text-6xl mb-4">📵</div>
        <h1 className="text-3xl font-bold mb-4">You're Offline</h1>
        <p className="text-lg mb-6">
          No worries! You can still browse your saved pickup lines and quotes.
        </p>
        <a 
          href="/favorites" 
          className="inline-block bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          View Saved Lines
        </a>
      </div>
    </div>
  )
}
