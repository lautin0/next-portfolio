import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import type { Viewport } from 'next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Tinsley Lau',
  description: 'A Portfolio Website of Tinsley Lau',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export type Props = {
  leftNavbarItems: {
    URL: string;
    text: string;
    target?: string;
  }[];
  rightNavbarItems: {
    URL: string;
    text: string;
    target?: string;
  }[];
};

const navItems = {
  left_navbar_items: [
    {
      URL: '#experience-section',
      text: 'Experience',
    },
    {
      URL: '#about-section',
      text: 'About',
    },
  ],
  right_navbar_items: [
    {
      URL: 'https://www.linkedin.com/in/tinsleylau/',
      text: 'Contact',
      target: '_blank',
    },
  ],
  internal_links: [],
  social_media_links: [
    {
      URL: 'https://www.linkedin.com/in/tinsleylau/',
      text: 'LinkedIn',
    },
  ],
  policy_links: [],
  description: "Tinsley's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar data={navItems} />
        {children}
        <Footer data={navItems} />
      </body>
    </html>
  );
}
