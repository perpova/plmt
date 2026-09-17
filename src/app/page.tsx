import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import TrustBadges from '@/components/TrustBadges';
import CarCard from '@/components/CarCard';
import { CARS, getFeaturedCars } from '@/data/cars';
import { DEALERSHIP } from '@/data/dealership';
import { ArrowRight, Sparkles, MapPin, Phone, MessageSquare } from 'lucide-react';

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
            <div className="flex items-center gap-2 text-[#1F7778] font-bold text-xs uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-[#D6A84F]" />
              <span>Handpicked Collection in Matara</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172325] tracking-tight">
              Featured Vehicles for Sale
            </h2>
            <p className="text-xs sm:text-sm text-[#536466] mt-1">
              Popular Japanese hatchbacks & hybrids inspected by Priyankara Lanka Motor Traders.
            </p>
          </div>
          <Link
            href="/cars"
            className="inline-flex items-center gap-2 bg-[#172325] hover:bg-[#1F7778] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors self-start md:self-auto"
          >
            <span>View All Stock ({CARS.length})</span>
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

      {/* Full Stock Section */}
      <section className="bg-[#172325] text-white py-16 border-y border-[#1F7778]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Explore Available Models at Priyankara Car Sale Matara
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
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
              className="inline-flex items-center gap-2 bg-[#1F7778] hover:bg-[#15595A] text-white font-bold text-xs px-8 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <span>Explore All Stock & Filter Options</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Dealership Showroom Banner CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="bg-gradient-to-br from-[#15595A] to-[#172325] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-[#1F7778]">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider bg-[#D6A84F] text-[#172325] px-3 py-1 rounded-full">
                Visit Our Matara Showroom
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                Looking for a Specific Model or Vehicle Inspection?
              </h2>
              <p className="text-xs sm:text-base text-slate-200 leading-relaxed font-normal">
                At <strong>{DEALERSHIP.name}</strong> ({DEALERSHIP.altName}), our team in Matara is dedicated to providing transparent service records, fair negotiable rates, and trusted vehicle quality.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-teal-100">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D6A84F]" />
                  <span>{DEALERSHIP.address.fullFormatted}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D6A84F]" />
                  <span>Hotline: {DEALERSHIP.phoneHotline} | Tel: {DEALERSHIP.phoneLandline}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                href={`https://wa.me/${DEALERSHIP.whatsappRaw}?text=Hi%20Priyankara%20Car%20Sale,%20I%20am%20looking%20for%20a%20car.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-lg transition-colors flex items-center justify-center gap-2 text-xs"
              >
                <MessageSquare className="w-4.5 h-4.5" />
                <span>WhatsApp Instant Inquiry</span>
              </a>
              <Link
                href="/contact"
                className="w-full bg-[#D6A84F] hover:bg-[#A77A25] hover:text-white text-[#172325] font-bold py-3.5 px-6 rounded-xl text-center transition-colors text-xs"
              >
                View Contact & Location Info
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
