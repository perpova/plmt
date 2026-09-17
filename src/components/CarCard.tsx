import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Car } from '@/types/car';
import { DEALERSHIP } from '@/data/dealership';
import { Fuel, Gauge, Calendar, MessageSquare, ArrowRight, ShieldCheck, User } from 'lucide-react';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const primaryImage = car.images[0] || '/cars/placeholder.jpg';
  const whatsappMsg = encodeURIComponent(
    `Hi Priyankara Car Sale, I am interested in the ${car.year} ${car.make} ${car.model} (${car.priceDisplay}) listed on your website.`
  );

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
      {/* Image & Badge Container */}
      <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
        <Image
          src={primaryImage}
          alt={`${car.name} for sale at Priyankara Lanka Motor Traders`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold shadow-md ${
              car.condition === 'Brand New'
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-900/90 text-white backdrop-blur-md'
            }`}
          >
            {car.condition}
          </span>
          {car.fuelType === 'Hybrid' && (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white shadow-md">
              Hybrid
            </span>
          )}
        </div>
        <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span>{car.year}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">
              {car.make}
            </span>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-1">
              <Link href={`/cars/${car.id}`}>{car.name}</Link>
            </h3>
          </div>

          {/* Quick Specs Pill Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl mb-4">
            <div className="flex items-center gap-1.5">
              <Fuel className="w-4 h-4 text-slate-400" />
              <span>{car.fuelType} ({car.engineCc}cc)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Gauge className="w-4 h-4 text-slate-400" />
              <span>{car.mileage > 0 ? `${car.mileage.toLocaleString()} km` : '0 km'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-slate-400" />
              <span>{car.owner}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Records Avail.</span>
            </div>
          </div>
        </div>

        {/* Footer & Price */}
        <div>
          <div className="flex items-baseline justify-between pt-2 pb-4 border-t border-slate-100">
            <span className="text-xs text-slate-500 font-medium">Asking Price</span>
            <span className="text-base font-extrabold text-slate-900">
              {car.priceDisplay}
            </span>
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/cars/${car.id}`}
              className="w-full bg-slate-900 hover:bg-red-600 text-white py-2.5 px-3 rounded-xl font-semibold text-xs transition-colors flex items-center justify-center gap-1 text-center"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={`https://wa.me/${DEALERSHIP.whatsappRaw}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 px-3 rounded-xl font-semibold text-xs transition-colors flex items-center justify-center gap-1 text-center"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Inquire</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
