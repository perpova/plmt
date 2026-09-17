import React from 'react';
import Link from 'next/link';
import { DEALERSHIP } from '@/data/dealership';
import { Car, Search, Phone, ArrowRight, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative bg-slate-900 text-white overflow-hidden py-16 lg:py-24 border-b border-slate-800">
      {/* Background Subtle Overlay Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-red-950/40 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-red-900/60 border border-red-500/40 text-red-300 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Sri Lanka's Trusted Japanese Vehicle Dealer</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Priyankara Lanka <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-amber-400">
                Motor Traders
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Welcome to <strong>{DEALERSHIP.altName}</strong>. Explore our inventory of hand-picked Japanese hatchbacks, hybrids, and brand-new SUVs like Suzuki Alto, WagonR, Toyota Aqua, and Toyota Raize with verified service records.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/cars"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-500 text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-xl hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Browse Inventory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${DEALERSHIP.phoneRaw}`}
                className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-red-400" />
                <span>Call Us Now</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800 text-center lg:text-left">
              <div>
                <span className="block text-2xl font-extrabold text-white">100%</span>
                <span className="text-xs text-slate-400">Inspected Cars</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-red-400">7+</span>
                <span className="text-xs text-slate-400">Ready in Stock</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-white">Best</span>
                <span className="text-xs text-slate-400">Negotiable Rates</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Box */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 p-6 rounded-3xl shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-red-500" />
                  <span className="font-bold text-sm text-white">Featured Highlight</span>
                </div>
                <span className="text-xs bg-emerald-500/20 text-emerald-400 font-semibold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  Brand New 2026
                </span>
              </div>

              <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-slate-950">
                <img
                  src="/cars/car5/image_1.jpeg"
                  alt="Toyota Raize Z Grade 2026 at Priyankara Lanka Motor Traders"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-base font-bold text-white">Toyota Raize Z Grade 2026 Hybrid</h3>
                <p className="text-xs text-slate-400">360 Camera • Black Top • 1200cc • Unregistered</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-extrabold text-red-400">Contact for Price</span>
                  <Link
                    href="/cars/car5"
                    className="text-xs font-semibold text-white bg-red-600 hover:bg-red-500 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    View Car
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
