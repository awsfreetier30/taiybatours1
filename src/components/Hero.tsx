import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa',
    title: 'Masjid al-Haram',
    subtitle: 'Experience the spiritual journey of Hajj'
  },
  {
    url: 'https://images.unsplash.com/photo-1581264692636-5b55d3cdc96f',
    title: 'Masjid an-Nabawi',
    subtitle: 'Visit the Prophet\'s Mosque in Madinah'
  },
  {
    url: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53',
    title: 'Umrah Journey',
    subtitle: 'Perform Umrah with peace of mind'
  },
  {
    url: 'https://images.unsplash.com/photo-1587973573675-cb817aaa9265',
    title: 'Sacred Places',
    subtitle: 'Explore the historical Islamic sites'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-screen">
      {/* Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
              <img
                src={slide.url}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
      
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {slides[currentSlide].title}
              <span className="block text-amber-400 mt-2">With TAIYBA TOURS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2 group">
                <span>View Our Packages</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}