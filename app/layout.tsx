import './globals.css';

import { ReactNode } from 'react';
import { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import Footer from './components/Footer';
import Header from './components/Header';
import Providers from './providers';

const font = Inter({ axes: ['opsz'], display: 'swap', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gil Barbara — Senior Software Engineer',
  description:
    'Senior software engineer building scalable, distributed, and real-time systems across backend and frontend, with a focus on reliability, security, and long-term maintainability.',
  keywords:
    'gil barbara, senior software engineer, distributed systems, real-time systems, ai systems, typescript, react, node.js, frontend, backend, web development',
  appleWebApp: {
    title: 'Gil Barbara',
    capable: true,
    statusBarStyle: 'black',
  },
  openGraph: {
    title: 'Gil Barbara — Senior Software Engineer',
    siteName: 'Gil Barbara',
    url: 'https://gilbarbara.dev/',
    description:
      'Senior software engineer building scalable, distributed, and real-time systems across backend and frontend, with a focus on reliability, security, and long-term maintainability.',
    images: '/media/share-image.png',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gil Barbara — Senior Software Engineer',
    description:
      'Senior software engineer building scalable, distributed, and real-time systems across backend and frontend, with a focus on reliability, security, and long-term maintainability.',
    images: '/media/share-image.png',
  },
  icons: {
    icon: [
      { url: '/assets/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/favicon.ico' },
    ],
    apple: { url: '/assets/apple-touch-icon.png', sizes: '180x180' },
  },
};

export const viewport: Viewport = {
  themeColor: '#ff0044',
  initialScale: 1,
  width: 'device-width',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className} suppressHydrationWarning>
        <Providers>
          <Header />
          <main className="min-h-dvh">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
