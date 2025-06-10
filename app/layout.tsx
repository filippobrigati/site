import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const myFont = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://filippobrigati.com'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Filippo Brigati',
    template: '%s | FB'
  },
  description: 'My portfolio, blog, and personal website.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${myFont.className}`}>
      <body className="antialiased tracking-tight">
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
          <main className="max-w-[60ch] mx-auto w-full space-y-6">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

function Footer() {
  const links = [
    { name: 'github', url: 'https://github.com/filippobrigati' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/filippo-brigati/' }
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
