'use client';

import React, { useState, useMemo } from 'react';
import CarCard from '@/components/CarCard';
import CarFilter from '@/components/CarFilter';
import { CARS } from '@/data/cars';
import { Car as CarIcon, SearchX } from 'lucide-react';

export default function CarsCataloguePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedFuel, setSelectedFuel] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');

  const filteredCars = useMemo(() => {
    return CARS.filter((car) => {
      // Search term query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = car.name.toLowerCase().includes(query);
        const matchesMake = car.make.toLowerCase().includes(query);
        const matchesModel = car.model.toLowerCase().includes(query);
        const matchesYear = String(car.year).includes(query);
        if (!matchesName && !matchesMake && !matchesModel && !matchesYear) {
          return false;
        }
      }

      // Make Filter
      if (selectedMake && car.make.toLowerCase() !== selectedMake.toLowerCase()) {
        return false;
      }

      // Fuel Filter
      if (selectedFuel && car.fuelType.toLowerCase() !== selectedFuel.toLowerCase()) {
        return false;
      }

      // Condition Filter
      if (selectedCondition && car.condition.toLowerCase() !== selectedCondition.toLowerCase()) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedMake, selectedFuel, selectedCondition]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedMake('');
    setSelectedFuel('');
    setSelectedCondition('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page Heading */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 mb-1">
          <CarIcon className="w-4 h-4" />
          <span>Vehicle Showroom</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Vehicle Inventory for Sale
        </h1>
        <p className="text-sm text-slate-600 mt-2 max-w-2xl">
          Browse our complete listing of Japanese cars, hatchbacks, hybrids, and compact SUVs available at Priyankara Lanka Motor Traders (Priyankara Car Sale).
        </p>
      </div>

      {/* Filter Component */}
      <CarFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedMake={selectedMake}
        setSelectedMake={setSelectedMake}
        selectedFuel={selectedFuel}
        setSelectedFuel={setSelectedFuel}
        selectedCondition={selectedCondition}
        setSelectedCondition={setSelectedCondition}
        resetFilters={resetFilters}
      />

      {/* Results Header */}
      <div className="flex items-center justify-between mb-6 text-sm text-slate-600">
        <span>
          Showing <strong className="text-slate-900">{filteredCars.length}</strong> of{' '}
          <strong className="text-slate-900">{CARS.length}</strong> vehicles
        </span>
      </div>

      {/* Inventory Grid */}
      {filteredCars.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-md mx-auto my-12">
          <SearchX className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-slate-900 mb-2">No Vehicles Found</h3>
          <p className="text-xs text-slate-500 mb-6">
            No listings match your filter criteria. Try resetting search filters or checking back soon.
          </p>
          <button
            onClick={resetFilters}
            className="bg-red-600 text-white font-semibold text-xs px-5 py-2.5 rounded-xl hover:bg-red-500 transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}
