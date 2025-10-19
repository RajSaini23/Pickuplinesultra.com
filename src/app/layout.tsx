
import type { Metadata, Viewport } from 'next';
import { ClientLayout } from './client-layout';
import './globals.css';

const APP_NAME = "Pickup Lines Ultra";
const APP_DESCRIPTION = "Your Emotion. Our Expression.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: APP_NAME,
  description: APP_DESCRIPTION,
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: "/logo.svg",
    apple: "/icons/icon-512x512.png",
  },
};

export const viewport: Viewport = {
  themeColor: '#2A2A3A',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
