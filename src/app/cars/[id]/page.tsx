import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import ImageGallery from '@/components/ImageGallery';
import JsonLd from '@/components/JsonLd';
import CarCard from '@/components/CarCard';
import { CARS, getCarById } from '@/data/cars';
import { DEALERSHIP } from '@/data/dealership';
import {
  Fuel,
  Gauge,
  Calendar,
  User,
  ShieldCheck,
  Check,
  MessageSquare,
  Phone,
  ArrowLeft,
  Share2,
  Calculator,
  Car as CarIcon,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return CARS.map((car) => ({
    id: car.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const car = getCarById(id);

  if (!car) {
    return {
      title: 'Vehicle Not Found',
    };
  }

  const title = `${car.year} ${car.make} ${car.model} for Sale | ${DEALERSHIP.altName}`;
  const description = `${car.name} available at ${DEALERSHIP.name}. Fuel: ${car.fuelType}, Engine: ${car.engineCc}cc, Transmission: ${car.transmission}, Owner: ${car.owner}. Price: ${car.priceDisplay}. Complete service records available.`;
  const primaryImage = car.images[0]
    ? `https://priyankaracarsale.lk${car.images[0]}`
    : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: primaryImage ? [{ url: primaryImage }] : [],
    },
  };
}

export default async function CarDetailPage({ params }: PageProps) {
  const { id } = await params;
  const car = getCarById(id);

  if (!car) {
    notFound();
  }

  const relatedCars = CARS.filter((c) => c.id !== car.id).slice(0, 3);
  const whatsappMsg = encodeURIComponent(
    `Hi Priyankara Car Sale, I am interested in buying the ${car.year} ${car.make} ${car.model} (${car.priceDisplay}) listed on your website. Please share more details.`
  );

  return (
    <div className="bg-slate-50 py-8">
      {/* Schema.org JSON-LD Structured Data */}
      <JsonLd type="Vehicle" car={car} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Navigation */}
        <div className="mb-6 flex items-center justify-between text-xs text-slate-500">
          <Link
            href="/cars"
            className="inline-flex items-center gap-1.5 font-medium hover:text-red-600 transition-colors bg-white px-3 py-1.5 rounded-lg border border-slate-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Inventory</span>
          </Link>

          <span className="hidden sm:inline-block font-mono text-slate-400">
            Stock ID: {car.id.toUpperCase()}
          </span>
        </div>

        {/* Top Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                {car.make}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-semibold text-slate-500">
                {car.condition} Vehicle
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {car.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {car.year} Model • {car.fuelType} • {car.transmission} • {car.owner}
            </p>
          </div>

          <div className="md:text-right bg-slate-50 md:bg-transparent p-4 md:p-0 rounded-xl">
            <span className="text-xs text-slate-500 font-medium block">Vehicle Price</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-red-600">
              {car.priceDisplay}
            </span>
          </div>
        </div>

        {/* Main Grid: Left Gallery & Description, Right Specs & Contact CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Gallery & Details */}
          <div className="lg:col-span-7 space-y-8">
            {/* Gallery Component */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <ImageGallery images={car.images} carName={car.name} />
            </div>

            {/* Description Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <CarIcon className="w-5 h-5 text-red-600" />
                <span>Vehicle Overview & Description</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {car.description}
              </p>
            </div>

            {/* Key Features List */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Features & Equipment</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {car.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Specs Table & Conversion Box */}
          <div className="lg:col-span-5 space-y-6">
            {/* Action Inquiry Box */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl space-y-5 border border-slate-800">
              <div>
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                  Direct Inquiries
                </span>
                <h3 className="text-xl font-bold mt-1 text-white">
                  Interested in this vehicle?
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Contact Priyankara Car Sale directly for price negotiation, vehicle inspection, or test drives.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/${DEALERSHIP.whatsappRaw}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 px-4 rounded-xl font-bold text-sm shadow-lg transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Inquire via WhatsApp</span>
                </a>
                <a
                  href={`tel:${DEALERSHIP.phoneRaw}`}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3.5 px-4 rounded-xl font-semibold text-sm border border-slate-700 transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <Phone className="w-4 h-4 text-red-400" />
                  <span>Call {DEALERSHIP.phone}</span>
                </a>
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>Location: {DEALERSHIP.address.city}</span>
                <span>Opening: {DEALERSHIP.openingHours}</span>
              </div>
            </div>

            {/* Complete Specifications Grid */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                Technical Specifications
              </h3>
              <div className="divide-y divide-slate-100 text-xs text-slate-700">
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500 font-medium">Make / Brand</span>
                  <span className="font-bold text-slate-900">{car.make}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500 font-medium">Model</span>
                  <span className="font-bold text-slate-900">{car.model}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500 font-medium">Year of Manufacture</span>
                  <span className="font-bold text-slate-900">{car.year}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500 font-medium">Condition</span>
                  <span className="font-bold text-slate-900">{car.condition}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500 font-medium">Ownership</span>
                  <span className="font-bold text-slate-900">{car.owner}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500 font-medium">Body Type</span>
                  <span className="font-bold text-slate-900">{car.bodyType}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500 font-medium">Transmission</span>
                  <span className="font-bold text-slate-900">{car.transmission}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500 font-medium">Fuel Type</span>
                  <span className="font-bold text-slate-900">{car.fuelType}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500 font-medium">Engine Capacity</span>
                  <span className="font-bold text-slate-900">{car.engineCc} cc</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500 font-medium">Odometer Mileage</span>
                  <span className="font-bold text-slate-900">
                    {car.mileage > 0 ? `${car.mileage.toLocaleString()} km` : '0 km (Brand New)'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Inventory Section */}
        {relatedCars.length > 0 && (
          <div className="mt-16 pt-8 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Similar Vehicles You May Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedCars.map((relatedCar) => (
                <CarCard key={relatedCar.id} car={relatedCar} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
