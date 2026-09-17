'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DEALERSHIP } from '@/data/dealership';
import { Car, Phone, MessageSquare, Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg border-b border-slate-800">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-xs py-1.5 px-4 text-center font-medium tracking-wide flex justify-between items-center max-w-7xl mx-mx auto">
        <div className="hidden sm:flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-300" />
          <span>Priyankara Lanka Motor Traders (Pvt) Ltd — Premier Car Dealer</span>
        </div>
        <div className="flex items-center gap-4 mx-auto sm:mx-0">
          <a href={`tel:${DEALERSHIP.phoneRaw}`} className="hover:underline flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-amber-300" />
            <span>Call: {DEALERSHIP.phone}</span>
          </a>
          <span className="text-red-300">|</span>
          <a
            href={`https://wa.me/${DEALERSHIP.whatsappRaw}?text=Hi%20Priyankara%20Car%20Sale,%20I%20want%20to%20inquire%20about%20a%20vehicle.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-1 text-emerald-300"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Direct</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center shadow-md group-hover:bg-red-500 transition-colors">
              <Car className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white leading-tight">
                PRIYANKARA <span className="text-red-500">LANKA</span>
              </span>
              <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
                Motor Traders (Pvt) Ltd <span className="text-amber-400">| Priyankara Car Sale</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            <Link href="/" className="text-slate-200 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/cars" className="text-slate-200 hover:text-white transition-colors">
              Vehicle Inventory
            </Link>
            <Link href="/about" className="text-slate-200 hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-slate-200 hover:text-white transition-colors">
              Contact & Location
            </Link>
          </nav>

          {/* Contact Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${DEALERSHIP.whatsappRaw}?text=Hi%20Priyankara%20Car%20Sale,%20I%20would%20like%20to%20inquire%20about%20vehicle%20listings.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-lg font-semibold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 px-4 pt-4 pb-6 space-y-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-red-400"
          >
            Home
          </Link>
          <Link
            href="/cars"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-red-400"
          >
            Vehicle Inventory
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-red-400"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-red-400"
          >
            Contact & Location
          </Link>
          <a
            href={`https://wa.me/${DEALERSHIP.whatsappRaw}?text=Hi%20Priyankara%20Car%20Sale,%20I%20would%20like%20to%20inquire%20about%20vehicle%20listings.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold text-center flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
