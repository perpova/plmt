import React from 'react';
import Link from 'next/link';
import { DEALERSHIP } from '@/data/dealership';
import { Car, MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Company Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white">
                <Car className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-xl text-white">
                PRIYANKARA <span className="text-red-500">LANKA</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              <strong>{DEALERSHIP.legalName}</strong> (also known as <strong>{DEALERSHIP.altName}</strong>) is a trusted dealer specializing in high-quality Japanese cars, hybrids, hatchbacks, and SUVs in Sri Lanka.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Service Records & Inspection Guarantee</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 uppercase tracking-wider">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-red-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cars" className="hover:text-red-400 transition-colors">
                  All Vehicles Inventory
                </Link>
              </li>
              <li>
                <Link href="/cars?fuelType=Hybrid" className="hover:text-red-400 transition-colors">
                  Hybrid Cars for Sale
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-400 transition-colors">
                  About Priyankara Car Sale
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-400 transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Brands / Search Keywords */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 uppercase tracking-wider">
              Featured Models
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <Link href="/cars?make=Suzuki" className="hover:text-red-400 transition-colors">
                  Suzuki Alto Japan (2015/2016)
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <Link href="/cars?make=Suzuki" className="hover:text-red-400 transition-colors">
                  Suzuki WagonR FX & Safety Hybrid
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <Link href="/cars?make=Suzuki" className="hover:text-red-400 transition-colors">
                  Suzuki WagonR Stingray Hybrid
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <Link href="/cars?make=Toyota" className="hover:text-red-400 transition-colors">
                  Toyota Aqua S Grade Hybrid
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <Link href="/cars?make=Toyota" className="hover:text-red-400 transition-colors">
                  Toyota Raize Z Grade Brand New
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-base mb-4 uppercase tracking-wider">
              Dealership Info
            </h3>
            <div className="flex items-start gap-3 text-sm text-slate-300">
              <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <span>
                {DEALERSHIP.address.street}, {DEALERSHIP.address.city},{' '}
                {DEALERSHIP.address.country}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <Phone className="w-5 h-5 text-red-500 shrink-0" />
              <a href={`tel:${DEALERSHIP.phoneRaw}`} className="hover:text-white">
                {DEALERSHIP.phone}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <Mail className="w-5 h-5 text-red-500 shrink-0" />
              <a href={`mailto:${DEALERSHIP.email}`} className="hover:text-white">
                {DEALERSHIP.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <Clock className="w-5 h-5 text-red-500 shrink-0" />
              <span>{DEALERSHIP.openingHours}</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {DEALERSHIP.legalName} ({DEALERSHIP.altName}). All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span>SEO Optimized for Vercel</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
