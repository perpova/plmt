import React from 'react';
import type { Metadata } from 'next';
import { DEALERSHIP } from '@/data/dealership';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: `Contact Us | ${DEALERSHIP.name}`,
  description:
    'Contact Priyankara Lanka Motor Traders (Pvt) Ltd (Priyankara Car Sale). Reach out for vehicle inquiries, test drives, location address, and WhatsApp support.',
};

export default function ContactPage() {
  return (
    <div className="py-12 bg-slate-50 space-y-12">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-red-600 uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-100">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Contact Priyankara Car Sale
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Have a question about a car listing or want to schedule a visit? Contact <strong>{DEALERSHIP.legalName}</strong> today.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-red-50 text-red-600 rounded-xl shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Showroom Address</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {DEALERSHIP.address.street}, {DEALERSHIP.address.city}, {DEALERSHIP.address.country}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-red-50 text-red-600 rounded-xl shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Phone Contact</h3>
              <a href={`tel:${DEALERSHIP.phoneRaw}`} className="text-xs text-slate-600 hover:text-red-600 font-semibold block">
                {DEALERSHIP.phone}
              </a>
              <span className="text-[11px] text-slate-400">Available Mon - Sat</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">WhatsApp Instant</h3>
              <a
                href={`https://wa.me/${DEALERSHIP.whatsappRaw}?text=Hi%20Priyankara%20Car%20Sale,%20I%20have%20an%20inquiry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-600 hover:underline font-bold block"
              >
                Chat on WhatsApp
              </a>
              <span className="text-[11px] text-slate-400">Fast Response</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-red-50 text-red-600 rounded-xl shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Opening Hours</h3>
              <p className="text-xs text-slate-600">{DEALERSHIP.openingHours}</p>
            </div>
          </div>
        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Send Us a Direct Message</h2>
              <p className="text-xs text-slate-500 mt-1">
                Fill out the form below and our sales representative will get back to you shortly.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="077 123 4567"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Interested Vehicle / Query</label>
                <input
                  type="text"
                  placeholder="e.g. Suzuki Alto Japan 2016 or General Inquiry"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us what you are looking for..."
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          </div>

          {/* Business Info Sidebar */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider">
                <Building className="w-4 h-4" />
                <span>Dealership Headquarters</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">{DEALERSHIP.legalName}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Operating under the widely recognized name <strong>{DEALERSHIP.altName}</strong>, we welcome customers to visit our showroom for physical vehicle inspection, test drives, and document verification.
              </p>
            </div>

            <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 space-y-3 text-xs text-slate-300">
              <div className="font-bold text-white mb-1">Quick Contact Options</div>
              <div className="flex justify-between py-1 border-b border-slate-700">
                <span>Phone Inquiry:</span>
                <span className="font-bold text-white">{DEALERSHIP.phone}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-700">
                <span>WhatsApp:</span>
                <span className="font-bold text-emerald-400">{DEALERSHIP.whatsapp}</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Email:</span>
                <span className="font-bold text-white">{DEALERSHIP.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
