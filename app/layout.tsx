import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import Footer from '@/components/ui/footer';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Kable's Kitchen",
  description: 'Serving delicious takeout in Staunton, Virginia',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} flex min-h-screen flex-col items-center`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
