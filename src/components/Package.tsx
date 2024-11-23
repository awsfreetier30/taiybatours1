import React from 'react';
import { Star, Clock, Building2, Plane, FileCheck, MapPin, Wifi, Shirt, Coffee } from 'lucide-react';

interface PackageProps {
  title: string;
  type: 'Semi Deluxe' | 'Deluxe' | 'Winter Special';
  duration: string;
  distances: {
    makkah: string;
    madinah: string;
  };
  inclusions: string[];
  price: number;
  dates?: string[];
  route?: string;
  image: string;
}

const formatPrice = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const inclusionIcons: { [key: string]: React.ReactNode } = {
  'WiFi': <Wifi size={18} />,
  'Laundry': <Shirt size={18} />,
  'Buffet Meals': <Coffee size={18} />,
  'Saudi Airline Ticket': <Plane size={18} />,
};

export default function Package({
  title,
  type,
  duration,
  distances,
  inclusions,
  price,
  dates,
  route,
  image,
}: PackageProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-emerald-500 text-white">
            {type}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-3">
            <Clock size={18} className="text-gray-400" />
            <span className="text-gray-600">{duration}</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Building2 size={18} className="text-gray-400" />
            <div>
              <p className="text-gray-600">Makkah: {distances.makkah}</p>
              <p className="text-gray-600">Madinah: {distances.madinah}</p>
            </div>
          </div>

          {route && (
            <div className="flex items-center space-x-3">
              <Plane size={18} className="text-gray-400" />
              <span className="text-gray-600">{route}</span>
            </div>
          )}

          {dates && dates.length > 0 && (
            <div className="flex items-center space-x-3">
              <Clock size={18} className="text-gray-400" />
              <div className="text-gray-600">
                Available dates:
                <ul className="list-disc list-inside ml-2">
                  {dates.map((date, index) => (
                    <li key={index}>{date}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="border-t pt-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Inclusions:</h4>
            <div className="grid grid-cols-2 gap-2">
              {inclusions.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {inclusionIcons[item] || <FileCheck size={18} className="text-emerald-500" />}
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div>
            <span className="text-2xl font-bold text-emerald-600">
              {formatPrice(price)}
            </span>
          </div>
          
          <a
            href={`https://wa.me/919335152423?text=I'm interested in the ${type} package priced at ${formatPrice(price)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}