import React from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="text-emerald-700 font-arabic text-2xl md:text-3xl font-bold">
              TAIYBA
              <span className="text-amber-600"> TOURS & TRAVELS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Packages', 'Gallery', 'Videos', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="https://wa.me/1234567890"
              className="bg-emerald-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-emerald-700 transition-colors"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden rounded-md p-2 text-gray-700 hover:text-emerald-600 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {['Home', 'Packages', 'Gallery', 'Videos', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-emerald-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="https://wa.me/1234567890"
              className="bg-emerald-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-emerald-700 transition-colors mx-3"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}