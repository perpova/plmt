import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import JsonLd from '@/components/JsonLd';
import { DEALERSHIP } from '@/data/dealership';

export const metadata: Metadata = {
  title: {
    default: `${DEALERSHIP.name} | ${DEALERSHIP.altName} Sri Lanka`,
    template: `%s | ${DEALERSHIP.name}`,
  },
  description:
    'Priyankara Lanka Motor Traders (Pvt) Ltd (Priyankara Car Sale) offers reliable Japanese cars for sale in Sri Lanka. Suzuki Alto, WagonR FX Safety, WagonR Stingray, Toyota Aqua S Grade, Toyota Raize 2026. High quality, verified service records, best negotiable prices.',
  keywords: [
    'Priyankara Lanka Motor Traders',
    'Priyankara Car Sale',
    'Car Sale Sri Lanka',
    'Suzuki Alto Japan 2016 price Sri Lanka',
    'Suzuki WagonR FX Safety Hybrid',
    'WagonR Stingray 2018 price',
    'Toyota Aqua S Grade 2014',
    'Toyota Raize Z Grade 2026',
    'Used cars for sale in Sri Lanka',
    'Hybrid cars Sri Lanka',
  ],
  authors: [{ name: DEALERSHIP.name }],
  metadataBase: new URL('https://priyankaracarsale.lk'),
  openGraph: {
    title: `${DEALERSHIP.name} (${DEALERSHIP.altName})`,
    description:
      'Premier Japanese vehicle importer & dealer in Sri Lanka. Browse Suzuki Alto, WagonR, Toyota Aqua, and Toyota Raize with complete service history.',
    url: 'https://priyankaracarsale.lk',
    siteName: DEALERSHIP.name,
    locale: 'en_US',
    type: 'website',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd type="AutoDealer" />
      </head>
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
