
import type { Metadata, Viewport } from 'next';
import { ClientLayout } from './client-layout';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pickup Lines',
  description: 'Your Emotion. Our Expression.',
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#2079F2',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="font-body antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
