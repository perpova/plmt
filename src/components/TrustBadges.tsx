import React from 'react';
import { ShieldCheck, FileText, BadgePercent, Wrench } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
      title: 'Verified Ownership',
      desc: '1st & 2nd owner vehicles with verified registration documents.',
    },
    {
      icon: <FileText className="w-8 h-8 text-red-600" />,
      title: 'Complete Service Records',
      desc: 'Transparent agent/company service history available on all units.',
    },
    {
      icon: <BadgePercent className="w-8 h-8 text-red-600" />,
      title: 'Negotiable Pricing',
      desc: 'Fair market values with flexible negotiation upon inspection.',
    },
    {
      icon: <Wrench className="w-8 h-8 text-red-600" />,
      title: 'Pre-Delivery Inspection',
      desc: 'Comprehensive mechanical check before handover.',
    },
  ];

  return (
    <div className="py-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((b, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm"
            >
              <div className="p-3 bg-red-50 rounded-xl shrink-0">{b.icon}</div>
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-1">{b.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
