'use client';

import React from 'react';
import { Search, Filter, RotateCcw } from 'lucide-react';

interface CarFilterProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedMake: string;
  setSelectedMake: (val: string) => void;
  selectedFuel: string;
  setSelectedFuel: (val: string) => void;
  selectedCondition: string;
  setSelectedCondition: (val: string) => void;
  resetFilters: () => void;
}

export default function CarFilter({
  searchQuery,
  setSearchQuery,
  selectedMake,
  setSelectedMake,
  selectedFuel,
  setSelectedFuel,
  selectedCondition,
  setSelectedCondition,
  resetFilters,
}: CarFilterProps) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-[#1F7778]" />
          <h2 className="text-lg font-extrabold text-[#172325]">Filter Inventory</h2>
        </div>
        <button
          onClick={resetFilters}
          className="text-xs text-[#536466] hover:text-[#1F7778] flex items-center gap-1 font-semibold self-start md:self-auto transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Filters</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#536466] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search make, model, year..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#F2F5F5] border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#1F7778] focus:bg-white text-[#172325] font-medium"
          />
        </div>

        {/* Make Filter */}
        <div>
          <select
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#F2F5F5] border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#1F7778] focus:bg-white text-[#172325] font-medium"
          >
            <option value="">All Makes (Brands)</option>
            <option value="Suzuki">Suzuki</option>
            <option value="Toyota">Toyota</option>
          </select>
        </div>

        {/* Fuel Filter */}
        <div>
          <select
            value={selectedFuel}
            onChange={(e) => setSelectedFuel(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#F2F5F5] border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#1F7778] focus:bg-white text-[#172325] font-medium"
          >
            <option value="">All Fuel Types</option>
            <option value="Petrol">Petrol</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        {/* Condition Filter */}
        <div>
          <select
            value={selectedCondition}
            onChange={(e) => setSelectedCondition(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#F2F5F5] border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#1F7778] focus:bg-white text-[#172325] font-medium"
          >
            <option value="">All Conditions</option>
            <option value="Used">Used Vehicles</option>
            <option value="Brand New">Brand New Vehicles</option>
          </select>
        </div>
      </div>
    </div>
  );
}
