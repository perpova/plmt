import React from 'react';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import TrustBadges from '@/components/TrustBadges';
import CarCard from '@/components/CarCard';
import { CARS, getFeaturedCars } from '@/data/cars';
import { DEALERSHIP } from '@/data/dealership';
import { ArrowRight, Car as CarIcon, Sparkles, MapPin, Phone, MessageSquare } from 'lucide-react';

export default function HomePage() {
  const featuredCars = getFeaturedCars();

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Banner */}
      <HeroSection />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Featured Vehicle Inventory Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200 gap-4">
          <div>
            <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Handpicked Collection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Vehicles for Sale
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Popular Japanese hatchbacks & hybrids inspected by Priyankara Lanka Motor Traders.
            </p>
          </div>
          <Link
            href="/cars"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-red-600 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors self-start md:self-auto"
          >
            <span>View All Inventory ({CARS.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>

      {/* Full Stock Quick Preview Grid */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
              Explore Available Models at Priyankara Car Sale
            </h2>
            <p className="text-sm text-slate-400">
              Select any vehicle below to view full specifications, photo gallery, service history details, and negotiable pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CARS.filter((c) => !c.featured).map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/cars"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <CarIcon className="w-5 h-5" />
              <span>Explore All Stock & Filter Options</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Dealership Banner / Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-gradient-to-br from-red-600 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider bg-white/20 text-white px-3 py-1 rounded-full">
                Visit Our Dealership
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                Looking for a Specific Model or Custom Import?
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                At <strong>{DEALERSHIP.name}</strong> ({DEALERSHIP.altName}), our team is dedicated to providing you with transparent service records, flexible negotiation, and top quality.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-300" />
                  <span>{DEALERSHIP.address.city}, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-amber-300" />
                  <span>{DEALERSHIP.phone}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                href={`https://wa.me/${DEALERSHIP.whatsappRaw}?text=Hi%20Priyankara%20Car%20Sale,%20I%20am%20looking%20for%20a%20car.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-lg transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Instant Inquiry</span>
              </a>
              <Link
                href="/contact"
                className="w-full bg-white hover:bg-slate-100 text-slate-900 font-bold py-3.5 px-6 rounded-xl text-center transition-colors text-sm"
              >
                View Contact Info
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
