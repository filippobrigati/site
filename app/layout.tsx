import './globals.css';
import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  metadataBase: new URL('https://leerob.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Filippo Brigati',
    template: '%s | FB',
  },
  description: 'Developer, hiker, beach volley player.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistMono.className}`}>
      <body className="antialiased w-full p-4 sm:p-16">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#faedcd_1px,transparent_1px)] [background-size:16px_16px]"></div>
          {children}
      </body>
    </html>
  );
}