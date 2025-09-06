import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gigs & Gains Guild',
  description: 'Discover legitimate online earnings and master micro-skills.',
  keywords: 'online earning, gigs, freelance, micro-skills, remote work',
  authors: [{ name: 'Gigs & Gains Guild' }],
  openGraph: {
    title: 'Gigs & Gains Guild',
    description: 'Discover legitimate online earnings and master micro-skills.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
