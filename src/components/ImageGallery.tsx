'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
  carName: string;
}

export default function ImageGallery({ images, carName }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0] || '/cars/placeholder.jpg');

  return (
    <div className="space-y-4">
      {/* Featured Big Image Display */}
      <div className="relative h-80 sm:h-[450px] w-full bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
        <Image
          src={selectedImage}
          alt={`${carName} photo at Priyankara Lanka Motor Traders`}
          fill
          className="object-contain"
          priority
          sizes="(max-width: 1200px) 100vw, 60vw"
        />
      </div>

      {/* Thumbnails list */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(img)}
            className={`relative w-24 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
              selectedImage === img
                ? 'border-red-600 scale-105 shadow-md'
                : 'border-slate-200 opacity-70 hover:opacity-100'
            }`}
          >
            <Image
              src={img}
              alt={`${carName} thumbnail ${idx + 1}`}
              fill
              className="object-cover"
              sizes="96px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
